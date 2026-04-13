// --- KONFIGURASI GLOBAL ---
const GLOBAL_ID = "RED_DISTRICT_GLOBAL_ROOM"; 
let myStream;
let userID;
let isScreenSharing = false;
let isControlsMinimized = false;

// Inisialisasi Peer
const peer = new Peer(); 

peer.on('open', (myId) => {
    console.log('ID Saya: ' + myId);
    userID = myId;
});

// Fungsi untuk memanggil ID teman secara manual
async function callFriend() {
    const userID = prompt("Masukkan ID Teman kamu:");
    if (!userID) return;

    const call = peer.call(userID, myStream);
    call.on('stream', (remoteStream) => {
        addRemoteUser(remoteStream, userID);
    });
}

async function startMeet() {
    const nameInput = document.getElementById('username-input').value;
    if (!nameInput) return alert("Masukkan nama dulu!");

    // UI Transition
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('meet-container').style.display = 'flex';
    document.getElementById('controls-bar').style.display = 'flex';

    document.getElementById('local-initial').innerText = nameInput.charAt(0).toUpperCase();
    document.getElementById('local-name').innerText = nameInput + " (Anda)";

    // 1. Ambil akses Kamera/Mic
    try {
        myStream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
        document.getElementById('local-video-preview').srcObject = myStream;
        document.getElementById('local-video-preview').style.display = 'block';
    } catch (e) {
        console.log("Kamera ditolak, menggunakan stream kosong.");
        myStream = new MediaStream();
    }

    // 2. LISTENER: Menerima panggilan dari orang lain
    peer.on('call', (call) => {
        call.answer(myStream);
        call.on('stream', (remoteStream) => {
            addRemoteUser(remoteStream, call.peer);
        });
    });

    // 3. AUTO-JOIN: Mencoba memanggil Host Utama (Pintu Masuk)
    // Kita beri jeda sedikit agar Peer benar-benar siap
    setTimeout(() => {
        const call = peer.call(GLOBAL_ID, myStream);
        if (call) {
            call.on('stream', (remoteStream) => {
                addRemoteUser(remoteStream, GLOBAL_ID);
            });
        }
    }, 1000);
}

function addRemoteUser(stream, peerId) {
    if (document.getElementById(`user-${peerId}`)) return;

    const grid = document.getElementById('users-grid');
    const card = document.createElement('div');
    card.className = 'user-card';
    card.id = `user-${peerId}`;
    
    // Ambil inisial dari PeerID atau Nama jika tersedia
    const initial = peerId.charAt(0).toUpperCase();

    card.innerHTML = `
        <div class="avatar-circle">${initial}</div>
        <span>Peserta</span>
        <video autoplay playsinline id="video-${peerId}"></video>
    `;
    grid.appendChild(card);

    const videoElement = document.getElementById(`video-${peerId}`);
    videoElement.srcObject = stream;
    videoElement.style.display = 'block';
}

function handleRemoteStream(stream) {
    const mainVideo = document.getElementById('shared-video');
    const placeholder = document.getElementById('screen-placeholder');

    mainVideo.srcObject = stream;
    mainVideo.style.display = 'block';
    placeholder.style.display = 'none';

    stream.getVideoTracks()[0].onended = () => {
        mainVideo.style.display = 'none';
        placeholder.style.display = 'flex';
    };
}

async function toggleShareScreen() {
    const shareBtn = document.getElementById('share-btn');
    try {
        if (!isScreenSharing) {
            const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
            handleRemoteStream(screenStream);
            isScreenSharing = true;
            shareBtn.classList.add('active');
            
            // Note: Untuk sistem global tanpa database, share screen hanya akan 
            // terlihat oleh orang yang kita panggil/memanggil kita saat itu.
            screenStream.getVideoTracks()[0].onended = () => stopLocalShare();
        } else {
            stopLocalShare();
        }
    } catch (err) { console.error(err); }
}

function stopLocalShare() {
    const mainVideo = document.getElementById('shared-video');
    if (mainVideo.srcObject) {
        mainVideo.srcObject.getTracks().forEach(t => t.stop());
    }
    mainVideo.style.display = 'none';
    document.getElementById('screen-placeholder').style.display = 'flex';
    isScreenSharing = false;
    document.getElementById('share-btn').classList.remove('active');
}

function toggleControls() {
    const wrapper = document.getElementById('controls-bar');
    isControlsMinimized = !isControlsMinimized;
    wrapper.classList.toggle('minimized', isControlsMinimized);
}