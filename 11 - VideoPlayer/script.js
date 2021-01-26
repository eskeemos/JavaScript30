const player = document.querySelector(".player");
const video = document.querySelector(".video");
const buttonPP = document.querySelector(".buttonPP");
const progressFBar = document.querySelector(".progress-filled");
const progressBar = document.querySelector(".progress");
const ranges = [...document.querySelectorAll("input[type='range']")];
const skips = [...document.querySelectorAll("[data-skip]")];

let mousedown = false;

function togglePP(){
    var method = video.paused ? 'play' : 'pause';
    video[method]();
}
function buttonUpdate(){
    var icon = video.paused ? '▶️' : '⏸️';
    buttonPP.textContent = icon;
}
function progressHandling(){
    var percent = (video.currentTime / video.duration) * 100;
    progressFBar.style.flexBasis = `${percent}%`;
}
function rangesHandling(){
    video[this.name] = this.value;
}
function skipHandling(){
    video.currentTime += parseFloat(this.dataset.skip);
}
function moveHandling(e){
    var time = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = time;
}

video.addEventListener("click",togglePP);
video.addEventListener("play", buttonUpdate);
video.addEventListener("pause", buttonUpdate);
video.addEventListener("timeupdate", progressHandling);

buttonPP.addEventListener("click", togglePP);

ranges.forEach((item) => item.addEventListener("click", rangesHandling));
ranges.forEach((item) => item.addEventListener("mousemove", rangesHandling));

skips.forEach((item) => item.addEventListener("click",skipHandling));

progressBar.addEventListener("mousedown", () => mousedown = true);
progressBar.addEventListener("mouseup", () => mousedown = false);
progressBar.addEventListener("mousemove", (e) => {
    if(mousedown){
        moveHandling(e);
    }
})
