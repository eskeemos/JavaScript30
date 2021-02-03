const video = document.querySelector(".small-camera");
const canvas = document.querySelector(".big-camera");
const ctx = canvas.getContext("2d");
const photoCont = document.querySelector(".photoContainer");
const photoMaker = document.querySelector("#photoMaker");
const sound = document.querySelector("#sound");

function getVideo(){
    navigator.mediaDevices.getUserMedia({
        video : true,
        audio : false
    }).then((item) => {
        video.srcObject = item;
        video.play();
    }).catch((err) => {
        error("Oh no, something gone wrong!:(", err);
    });
}
function createCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

        let pixels = ctx.getImageData(0, 0, width, height);

        pixels = MuchShadingProtect(pixels)
        pixels = rgbSplit(pixels);

        ctx.globalAlpha = 0.8;

        pixels = greenScreen(pixels);

        ctx.putImageData(pixels,0,0);
    }, 16)
}
function rgbSplit(pixels){
    for(var i = 0; i < pixels.data.length; i+=4){
        pixels.data[i - 150] = pixels.data[i] // red
        pixels.data[i + 500] = pixels.data[i + 1] // green
        pixels.data[i - 550] = pixels.data[i + 2] // blue
    }
    return pixels;
}
function takePhoto(){

    sound.currentTime = 0;
    sound.play();

    const data = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download","handsome");
    link.innerHTML = `<img src="${data}" ale="Handsome person">`;
    photoCont.insertBefore(link,photoCont.firstChild);
}
function MuchShadingProtect(pixels){
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
}
function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll('input').forEach((input) => {
    levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin) {
        pixels.data[i + 3] = 0;
    }
    }

    return pixels;
}
getVideo();

video.addEventListener("canplay", createCanvas);
photoMaker.addEventListener("click", takePhoto);