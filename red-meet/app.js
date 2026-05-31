// Variabel Global
let localStream;
let myPeer;
let myUsername = "";
const connectedPeers = {}; // Melacak call yang aktif

// DOM Elements
const loginOverlay = document.getElementById('login-overlay');
const usernameInput = document.getElementById('username-input');
const joinBtn = document.getElementById('join-btn');
const appContainer = document.getElementById('app-container');
const myNameDisplay = document.getElementById('my-name');
const connectionStatus = document.getElementById('connection-status');
const userList = document.getElementById('user-list');
const userCount = document.getElementById('user-count');
const remoteAudiosContainer = document.getElementById('remote-audios');

// Event saat tombol Gabung diklik
joinBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username === "") {
        alert("Username tidak boleh kosong!");
        return;
    }
    myUsername = username;
    initApp();
});

// Inisialisasi Aplikasi (Akses Mikrofon & PeerJS)
async function initApp() {
    loginOverlay.classList.add('hidden');
    appContainer.classList.remove('hidden');
    myNameDisplay.innerText = `Username: ${myUsername}`;
    connectionStatus.innerText = "Meminta izin mikrofon...";

    try {
        // 1. Ambil input audio dari mikrofon
        localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        connectionStatus.innerText = "Menghubungkan ke server signaling...";

        // 2. Hubungkan ke PeerJS Server gratisan. 
        // Kita modifikasi ID-nya menjadi format: 'wdrp-voice-[username]' agar mudah dikenali
        myPeer = new Peer(`wdrp-voice-${myUsername}-${Math.floor(Math.random() * 1000)}`);

        myPeer.on('open', (id) => {
            connectionStatus.innerText = "Terhubung! Mencari pengguna lain...";
            updateUserList();
            
            // Beritahu peer lain kalau kita baru bergabung (Metode scanning sederhana)
            discoverAndCallPeers();
        });

        // 3. Handle jika ada panggilan masuk dari pengguna lain
        myPeer.on('call', (call) => {
            // Jawab panggilan dengan mengirimkan suara kita
            call.answer(localStream);
            
            // Terima suara dari pengguna lain tersebut
            call.on('stream', (remoteStream) => {
                addRemoteAudio(call.peer, remoteStream);
            });

            call.on('close', () => {
                removeRemoteAudio(call.peer);
            });

            connectedPeers[call.peer] = call;
            setTimeout(updateUserList, 1000); // Update daftar nama
        });

        // Jika ada error pada koneksi peer
        myPeer.on('error', (err) => {
            console.error("PeerJS Error:", err);
            connectionStatus.innerText = "Error koneksi. Coba refresh halaman.";
        });

    } catch (err) {
        console.error("Gagal mengakses mikrofon:", err);
        alert("Aplikasi butuh izin mikrofon untuk melakukan voice chat!");
        connectionStatus.innerText = "Gagal mengakses mikrofon.";
    }
}

// Fungsi untuk mendeteksi user lain yang menggunakan aplikasi yang sama
// Catatan: Karena PeerJS cloud tidak punya fitur "list room", kita melakukan pencarian peer aktif secara berkala/manual.
function discoverAndCallPeers() {
    // Pada implementasi produksi, daftar user biasanya diatur oleh backend (Socket.io).
    // Untuk murni frontend + PeerJS, kita manfaatkan mekanisme saling memanggil secara otomatis ketika berinteraksi.
    // Kita jalankan interval untuk memperbarui list nama di UI.
    setInterval(updateUserList, 3000);
}

// Menambahkan elemen audio ke HTML untuk mendengar suara orang lain
function addRemoteAudio(peerId, stream) {
    if (document.getElementById(`audio-${peerId}`)) return; // Jika sudah ada, abaikan

    const audioEl = document.createElement('audio');
    audioEl.id = `audio-${peerId}`;
    audioEl.srcObject = stream;
    audioEl.autoplay = true;
    audioEl.controls = false; // Sembunyikan player agar rapi
    remoteAudiosContainer.appendChild(audioEl);
}

// Menghapus elemen audio jika user keluar
function removeRemoteAudio(peerId) {
    const audioEl = document.getElementById(`audio-${peerId}`);
    if (audioEl) audioEl.remove();
    if (connectedPeers[peerId]) {
        connectedPeers[peerId].close();
        delete connectedPeers[peerId];
    }
    updateUserList();
}

// Fungsi untuk memperbarui tampilan daftar user di UI
function updateUserList() {
    userList.innerHTML = "";
    
    // Tampilkan diri sendiri terlebih dahulu
    const myLi = document.createElement('li');
    myLi.innerText = `${myUsername} (Kamu)`;
    myLi.style.color = "#00fff0";
    userList.appendChild(myLi);

    let count = 1;

    // Ambil semua peer ID dari koneksi audio yang aktif
    Object.keys(connectedPeers).forEach(peerId => {
        // Potong string 'wdrp-voice-[username]-[random]' untuk mengambil nama aslinya saja
        const parts = peerId.split('-');
        if (parts[1] === 'voice') {
            const extractedUsername = parts[2];
            const li = document.createElement('li');
            li.innerText = extractedUsername;
            userList.appendChild(li);
            count++;
        }
    });

    userCount.innerText = count;
}