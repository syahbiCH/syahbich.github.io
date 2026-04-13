// --- KONFIGURASI GLOBAL ---
const GLOBAL_ROOM_ID = "WDRP_GLOBAL_MEET_ROOM"; // ID ini harus sama untuk semua orang
let myStream;
let isScreenSharing = false;
let someoneSharing = false;
let isControlsMinimized = false;

// Inisialisasi Peer dengan ID acak untuk diri sendiri
const peer = new Peer(); 

peer.on('open', (id) => {
    console.log('ID Saya: ' + id);
    // Secara otomatis mencoba menghubungi "Global Room" setelah terbuka
});

async function startMeet() {
    const nameInput = document.getElementById('username-input').value;
    if (!nameInput) return alert("Masukkan nama dulu!");

    document.getElementById('login-box').style.display = 'none';
    document.getElementById('meet-container').style.display = 'flex';
    document.getElementById('controls-bar').style.display = 'flex';

    // Set Avatar Nama
    document.getElementById('local-initial').innerText = nameInput.charAt(0).toUpperCase();
    document.getElementById('local-name').innerText = nameInput + " (Anda)";

    // Ambil stream kosong (hanya untuk inisialisasi awal tanpa suara)
    myStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    document.getElementById('local-video-preview').srcObject = myStream;
    document.getElementById('local-video-preview').style.display = 'block';

    // 1. TERIMA PANGGILAN (Standby sebagai Penerima)
    peer.on('call', (call) => {
        call.answer(myStream); // Jawab dengan stream kita
        call.on('stream', (remoteStream) => {
            handleRemoteStream(remoteStream);
        });
    });

    // 2. OTOMATIS PANGGIL ORANG LAIN (Jika ada)
    // Di sini kamu bisa menambahkan logika untuk memanggil ID yang sudah online.
    // Karena ini statis di GitHub, cara termudah adalah membagikan ID kamu ke teman.
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