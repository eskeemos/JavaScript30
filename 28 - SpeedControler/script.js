const speed = document.querySelector(".speed");
const bar   = speed.querySelector(".speed-bar");
const video = document.querySelector("video");
const min = .5;
const max = 5;

function speedHandle(e){
    const x = e.pageY - this.offsetTop;
    const percent = x / this.offsetHeight;
    const height = Math.round(percent * 100) + "%";
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + "x";
    video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove",speedHandle);