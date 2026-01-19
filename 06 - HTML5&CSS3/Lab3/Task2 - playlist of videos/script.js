// Cache DOM elements
const videoPlayer = document.getElementById("videoPlayer");
const qualitySelect = document.getElementById("qualitySelect");
const playPauseButton = document.getElementById("playPauseButton");
const seekBar = document.getElementById('seekBar');
const list = document.querySelector('.list');
const addVideo = document.getElementById("addBtn");
const episodes = list.children;

let episodesSRCs = [
    "../Dr Stone playlist/Dr Stone S1 EP01.mp4",
    "../Dr Stone playlist/Dr Stone S1 EP02.mp4",
    "../Dr Stone playlist/Dr. Stone E3 .mp4",
    "../Dr Stone playlist/Dr. Stone E4 .mp4",
    "../Dr Stone playlist/Dr. Stone E5 .mp4",
    "../Dr Stone playlist/Dr. Stone E6 .mp4",
    "../Dr Stone playlist/Dr. Stone E7 .mp4",
    "../Dr Stone playlist/Dr. Stone E8 .mp4",
    "../Dr Stone playlist/Dr. Stone E9 .mp4",
]
/* Play / Pause */
function togglePlayPause() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseButton.textContent = "Pause";
    } else {
        videoPlayer.pause();
        playPauseButton.textContent = "Play";
    }
}

/* Change video size */
function changeVideoSize(event) {
    const size = event.target.value;
    // if (size === "small") videoPlayer.style.width = "40vw";
    // if (size === "medium") videoPlayer.style.width = "60vw";
    // if (size === "large") videoPlayer.style.width = "80vw";
    switch (event.target.value) {
        case "small":
            videoPlayer.style.width = "40vw";
            seekBar.style.width = "40vw";
            break;

        case "medium":
            videoPlayer.style.width = "60vw";
            seekBar.style.width = "60vw";
            break;

        case "large":
            videoPlayer.style.width = "80vw";
            seekBar.style.width = "80vw";
            break;
    }
}

/* Change volume */
function changeVolume(event) {
    videoPlayer.volume = event.target.value;
}

/* Change playback speed */
function changePlaybackSpeed(event) {
    videoPlayer.playbackRate = event.target.value;
}

/* Mute / Unmute */
function toggleMute() {
    videoPlayer.muted = !videoPlayer.muted;
}

/* Loop video */
function toggleLoop() {
    videoPlayer.loop = !videoPlayer.loop;
}

function seekVideo(event) {
    videoPlayer.currentTime = (event.target.value / event.target.max) * videoPlayer.duration;
}
/*
videoPlayer.addEventListener("timeupdate", function () {
    const value = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    seekBar.value = value;
});*/

/* Fullscreen */
function toggleFullScreen() {
    videoPlayer.requestFullscreen();
}

function forwardFunction() {
    videoPlayer.currentTime += 10;
}

function backwardFunction() {
    videoPlayer.currentTime -= 10;
}

document.addEventListener("keydown", function (event) {

    // Arrow Right ➜ Forward 10 seconds
    if (event.key === "ArrowRight") {
        videoPlayer.currentTime += 10;
    }
    // Arrow Left ➜ Backward 10 seconds
    if (event.key === "ArrowLeft") {
        videoPlayer.currentTime -= 10;
    }

    if (event.key === "ArrowUp") {
        event.preventDefault();
        videoPlayer.volume = Math.min(1, videoPlayer.volume + 0.1);
    }

    if (event.key === "ArrowDown") {
        event.preventDefault();
        videoPlayer.volume = Math.max(0, videoPlayer.volume - 0.1);
    }

    // subtitle - translate
    // provide more video
    // multipe codecs
    // video quality change
});

videoPlayer.addEventListener("click", function (event) { togglePlayPause() });
videoPlayer.addEventListener("dblclick", function (event) { toggleFullScreen() });

for (let i = 0; i < episodes.length; i++) {
    episodes[i].addEventListener('click', function (event) {
        videoPlayer.src = episodesSRCs[i];
        videoPlayer.load();
        videoPlayer.play();
    });
};
addVideo.addEventListener('click', function () {
    let videoURL = prompt('Enter video URL:');
    let videoPosterURL = prompt('Enter poster URL:');
    let videoName = prompt('Enter video name:');
    if(!videoURL || !videoPosterURL || !videoName) return;
    episodesSRCs.push(videoURL);
    let li = document.createElement("li");
    li.innerHTML = `
        <img src="${videoPosterURL}" />
        <p>${videoName}</p>
    `;
    const reference = addVideo.parentElement;
    list.insertBefore(li, reference);
    li.addEventListener('click', function () {
        videoPlayer.src = videoURL;
        videoPlayer.load();
        videoPlayer.play();
    });
});

