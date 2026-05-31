// Variabel Global
let localStream;
let myPeer;
let myUsername = "";
const lobbyId = "RED_MEET_VOICE_ID"; // ID Room Kunci utama
let activeUsers = {}; // { peerId: username }
let connectedCalls = {}; // { peerId: callObject }

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

joinBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim().replace(/[^a-zA-Z0-9]/g, "");
    if (username === "") {
        alert("Username harus diisi huruf/angka saja!");
        return;
    }
    myUsername = username;
    initApp();
});

async function initApp() {
    loginOverlay.classList.add('hidden');
    appContainer.classList.remove('hidden');
    myNameDisplay.innerText = `Username: ${myUsername}`;
    connectionStatus.innerText = "Membuka Mikrofon...";

    try {
        // 1. Izin Mikrofon
        localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        connectionStatus.innerText = "Menghubungkan ke Voice Server...";

        // 2. Buat ID acak yang unik untuk diri kita sendiri
        const myUniqueId = `wdrp-user-${myUsername}-${Math.floor(Math.random() * 9000 + 1000)}`;
        myPeer = new Peer(myUniqueId);

        myPeer.on('open', (id) => {
            connectionStatus.innerText = "🟢 Terhubung ke jaringan!";
            
            // Tambahkan diri sendiri ke list lokal
            activeUsers[myPeer.id] = `${myUsername} (Kamu)`;
            updateUserListUI();

            // Coba hubungi Lobby Utama untuk bertukar informasi pengguna
            joinGlobalRoom();
        });

        // 3. Handle kalau ada PANGGULAN SUARA masuk dari orang lain
        myPeer.on('call', (call) => {
            call.answer(localStream);
            
            call.on('stream', (remoteStream) => {
                addRemoteAudio(call.peer, remoteStream);
            });

            call.on('close', () => {
                removeRemoteUser(call.peer);
            });

            connectedCalls[call.peer] = call;
            
            // Ekstrak nama pengirim dari ID-nya
            const extractedName = parseUsernameFromId(call.peer);
            activeUsers[call.peer] = extractedName;
            updateUserListUI();
        });

        // 4. Handle DATA masuk (untuk sinkronisasi daftar nama secara berkala)
        myPeer.on('connection', (conn) => {
            conn.on('data', (data) => {
                if (data.type === 'sync-users') {
                    // Gabungkan data user baru dari peer lain ke list kita
                    Object.assign(activeUsers, data.users);
                    updateUserListUI();

                    // Otomatis telepon orang baru yang ada di list tapi belum terkoneksi suaranya
                    Object.keys(data.users).forEach(peerId => {
                        if (peerId !== myPeer.id && !connectedCalls[peerId] && !peerId.includes(lobbyId)) {
                            callPeer(peerId);
                        }
                    });
                }
            });
        });

    } catch (err) {
        console.error(err);
        alert("Gagal koneksi atau mikrofon ditolak.");
    }
}

// Fungsi untuk menjalin komunikasi antar user melalui jembatan bersama
function joinGlobalRoom() {
    // Kirim data nama kita ke siapapun yang kita temui
    // Buat interval untuk terus menyiarkan/broadcast status kita agar yang baru join langsung tahu
    setInterval(() => {
        // Ambil semua peer yang terhubung saat ini, kirim daftar nama terbaru
        Object.keys(connectedCalls).forEach(peerId => {
            const conn = myPeer.connect(peerId);
            if (conn) {
                conn.on('open', () => {
                    conn.send({
                        type: 'sync-users',
                        users: activeUsers
                    });
                });
            }
        });
    }, 4000);

    // Di murni WebRTC client, triknya adalah saling berasumsi ID berdasarkan pola jika server list mati.
    // Kita buat mekanisme di mana user akan mencoba "mengetuk pintu" user lain lewat broadcast tak terlihat
    // Untuk menyiasati ini di github, trik terbaik adalah membiarkan user pertama bertindak sebagai 'penerima tamu'
    connectToLobbyBridge();
}

function connectToLobbyBridge() {
    // Kita buat koneksi data 'pancingan' ke ID lobby utama agar semua user bermuara di titik yang sama
    const lobbyPeer = new Peer(lobbyId);
    
    lobbyPeer.on('open', () => {
        // Jika ID Lobby ini berhasil dibuat, berarti KITA adalah orang pertama di web ini (Host)
        console.log("Kamu adalah Host Room saat ini.");
    });

    lobbyPeer.on('error', (err) => {
        // Jika ID sudah ada (unavailable-id), berarti sudah ada orang lain yang jadi Host.
        // Bagus! Kita langsung panggil si Host tersebut agar dia mengenalkan kita ke semua orang.
        if (err.type === 'unavailable-id') {
            callPeer(lobbyId);
        }
    });

    // Jalankan juga fungsi pancingan manual: panggil room lobby utama dari peer utama kita
    setTimeout(() => {
        callPeer(lobbyId);
    }, 1000);
}

function callPeer(peerId) {
    if (peerId === myPeer.id || connectedCalls[peerId]) return;

    const call = myPeer.call(peerId, localStream);
    if (call) {
        connectedCalls[peerId] = call;
        call.on('stream', (remoteStream) => {
            addRemoteAudio(peerId, remoteStream);
        });
        call.on('close', () => {
            removeRemoteUser(peerId);
        });

        // Kirim info nama kita ke dia
        const conn = myPeer.connect(peerId);
        if (conn) {
            conn.on('open', () => {
                let sendList = {};
                sendList[myPeer.id] = myUsername;
                conn.send({ type: 'sync-users', users: sendList });
            });
        }
    }
}

function parseUsernameFromId(id) {
    if (id === lobbyId) return "🔊 GLOBAL SERVER LOBBY";
    const parts = id.split('-');
    if (parts[1] === 'user' && parts[2]) {
        return parts[2];
    }
    return "User Misterius";
}

function addRemoteAudio(peerId, stream) {
    if (document.getElementById(`audio-${peerId}`)) return;
    const audioEl = document.createElement('audio');
    audioEl.id = `audio-${peerId}`;
    audioEl.srcObject = stream;
    audioEl.autoplay = true;
    remoteAudiosContainer.appendChild(audioEl);
}

function removeRemoteUser(peerId) {
    const audioEl = document.getElementById(`audio-${peerId}`);
    if (audioEl) audioEl.remove();
    if (connectedCalls[peerId]) {
        connectedCalls[peerId].close();
        delete connectedCalls[peerId];
    }
    if (activeUsers[peerId]) {
        delete activeUsers[peerId];
    }
    updateUserListUI();
}

function updateUserListUI() {
    userList.innerHTML = "";
    let count = 0;

    Object.keys(activeUsers).forEach(peerId => {
        // Jangan tampilkan ID Lobby bot/sistem di daftar nama agar tidak membingungkan
        if (peerId === lobbyId) return;

        const li = document.createElement('li');
        li.innerText = activeUsers[peerId];
        
        if (peerId === myPeer.id) {
            li.style.color = "#00fff0";
            li.style.fontWeight = "bold";
        }
        
        userList.appendChild(li);
        count++;
    });

    userCount.innerText = count;
}