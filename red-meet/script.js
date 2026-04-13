let myPeerId;
let myName;
let isScreenSharing = false;
let someoneSharing = false;
let isControlsMinimized = false;
const peer = new Peer();

peer.on('open', (id) => { myPeerId = id; });

async function startMeet()
{
    myName = document.getElementById('username-input').value;
    if (!myName) return alert("Masukkan nama dulu!");
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('meet-container').style.display = 'flex';
    document.getElementById('controls-bar').style.display = 'flex';
    document.getElementById('local-initial').innerText = myName.charAt(0).toUpperCase();
    document.getElementById('local-name').innerText = myName + " (Anda)";
    peer.on('call', (call) => {
        call.answer();
        call.on('stream', (remoteStream) => {
            handleRemoteStream(remoteStream, call.peer);
        });
    });
}

function handleRemoteStream(stream, peerId)
{
    const videoTrack = stream.getVideoTracks()[0];
    if (videoTrack)
    {
        someoneSharing = true;
        const mainVideo = document.getElementById('shared-video');
        const placeholder = document.getElementById('screen-placeholder');
        mainVideo.srcObject = stream;
        mainVideo.style.display = 'block';
        placeholder.style.display = 'none';
        videoTrack.onended = () => {
            someoneSharing = false;
            mainVideo.style.display = 'none';
            placeholder.style.display = 'flex';
        };
    }
}

async function toggleShareScreen()
{
    const shareBtn = document.getElementById('share-btn');
    if(someoneSharing && !isScreenSharing)
    {
        return alert("ERROR: Someone is sharing their screen");
    }
    try
    {
        if(!isScreenSharing)
        {
            const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
            const mainVideo = document.getElementById('shared-video');
            mainVideo.srcObject = screenStream;
            mainVideo.style.display = 'block';
            document.getElementById('screen-placeholder').style.display = 'none';
            isScreenSharing = true;
            shareBtn.classList.add('active');
            screenStream.getVideoTracks()[0].onended = () => {
                stopLocalShare();
            };
        }
        else
        {
            stopLocalShare();
        }
    }
    catch(err)
    {
        console.error("Gagal share screen:", err);
    }
}

function stopLocalShare()
{
    const mainVideo = document.getElementById('shared-video');
    const shareBtn = document.getElementById('share-btn');
    if (mainVideo.srcObject) {
        mainVideo.srcObject.getTracks().forEach(track => track.stop());
    }
    mainVideo.style.display = 'none';
    mainVideo.srcObject = null;
    document.getElementById('screen-placeholder').style.display = 'flex';
    isScreenSharing = false;
    shareBtn.classList.remove('active');
}

function toggleControls()
{
    const wrapper = document.getElementById('controls-bar');
    if (!isControlsMinimized)
    {
        wrapper.classList.add('minimized');
        isControlsMinimized = true;
    } else
    {
        wrapper.classList.remove('minimized');
        isControlsMinimized = false;
    }
}