// --- KONFIGURASI GLOBAL ---
const GLOBAL_ID = "RED_DISTRICT_GLOBAL_ROOM"; // ID ini harus sama untuk semua orang
let myStream;
let isScreenSharing = false;
let someoneSharing = false;
let isControlsMinimized = false;

// Inisialisasi Peer dengan ID acak untuk diri sendiri
const peer = new Peer(); 

peer.on('open', (myId) => {
    console.log('ID Saya: ' + myId);
    // Setelah ID kita siap, kita otomatis join ke room global
});

async function startMeet() {
    const nameInput = document.getElementById('username-input').value;
    if (!nameInput) return alert("Masukkan nama!");

    document.getElementById('login-box').style.display = 'none';
    document.getElementById('meet-container').style.display = 'flex';
    document.getElementById('controls-bar').style.display = 'flex';

    document.getElementById('local-initial').innerText = nameInput.charAt(0).toUpperCase();
    document.getElementById('local-name').innerText = nameInput + " (Anda)";

    // Ambil akses mic/kamera
    try {
        myStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        document.getElementById('local-video-preview').srcObject = myStream;
        document.getElementById('local-video-preview').style.display = 'block';
    } catch (e) {
        myStream = new MediaStream(); // Fallback jika ditolak
    }

    // --- LOGIKA GLOBAL ROOM ---
    
    // 1. Standby menerima panggilan (jika kita adalah orang pertama/Host)
    peer.on('call', (call) => {
        call.answer(myStream);
        call.on('stream', (remoteStream) => {
            addRemoteUser(remoteStream, call.peer);
        });
    });

    // 2. Broadcast keberadaan kita
    // Trik: Kita coba panggil ID "GLOBAL_ID". 
    // Tapi karena PeerJS publik tidak bisa 'broadcast', cara paling benar di GitHub 
    // adalah setiap user mencoba memanggil Host utama.
    const call = peer.call(GLOBAL_ID, myStream);
    if(call) {
        call.on('stream', (remoteStream) => {
            addRemoteUser(remoteStream, GLOBAL_ID);
        });
    }
}

function addRemoteUser(stream, peerId) {
    if (document.getElementById(`user-${peerId}`)) return;

    const grid = document.getElementById('users-grid');
    const card = document.createElement('div');
    card.className = 'user-card';
    card.id = `user-${peerId}`;
    card.innerHTML = `
        <div class="avatar-circle">${peerId.charAt(0).toUpperCase()}</div>
        <span>Peserta</span>
        <video autoplay playsinline id="video-${peerId}"></video>
    `;
    grid.appendChild(card);

    const videoElement = document.getElementById(`video-${peerId}`);
    videoElement.srcObject = stream;
    videoElement.style.display = 'block';
}

async function startMeet() {
    const nameInput = document.getElementById('username-input').value;
    if (!nameInput) return alert("Masukkan nama dulu!");

    document.getElementById('login-box').style.display = 'none';
    document.getElementById('meet-container').style.display = 'flex';
    document.getElementById('controls-bar').style.display = 'flex';

    document.getElementById('local-initial').innerText = nameInput.charAt(0).toUpperCase();
    document.getElementById('local-name').innerText = nameInput + " (Anda)";

    // Ambil akses kamera/mic agar PeerJS punya stream untuk dikirim
    try {
        myStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        document.getElementById('local-video-preview').srcObject = myStream;
        document.getElementById('local-video-preview').style.display = 'block';
    } catch (e) {
        console.log("Kamera tidak diizinkan, mengirim stream kosong.");
        myStream = new MediaStream(); // Fallback jika kamera ditolak
    }

    // LISTENER: Menerima panggilan dari orang lain
    peer.on('call', (call) => {
        call.answer(myStream);
        call.on('stream', (remoteStream) => {
            addRemoteUser(remoteStream, call.peer);
        });
    });
}

// Fungsi menampilkan Share Screen di layar utama
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

// Fungsi Share Screen (Sama seperti sebelumnya dengan perbaikan stream)
async function toggleShareScreen() {
    const shareBtn = document.getElementById('share-btn');
    try {
        if (!isScreenSharing) {
            const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
            
            // Tampilkan di layar besar sendiri
            handleRemoteStream(screenStream);
            
            isScreenSharing = true;
            shareBtn.classList.add('active');

            // Logika Broadcast: Di sini kita harus memanggil ID lawan
            // Contoh manual: peer.call('ID_TEMAN', screenStream);

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