const msg = new SpeechSynthesisUtterance();
const speak = document.querySelector("#speak");
const stop = document.querySelector("#stop");
const voicesPlace = document.querySelector("#voices");
const options = Array.from(document.querySelectorAll("[type=range]"));
let voices = [];

function voicesHandle(){
    voices = this.getVoices();
    voicesPlace.innerHTML = voices
        .filter((item) => item.lang.includes("en"))
        .map((item) => `<option value="${item.name}">${item.name}</option>`)
        .join("");
}
function toggle(startOver = true){
    msg.text = document.querySelector("textarea").value;
    speechSynthesis.cancel();
    if(startOver){
        speechSynthesis.speak(msg);
    }
}
function setVoice(){
    msg.voice = voices.find((item) => item.name === this.value);
    toggle();
}
function setOption(){
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener("voiceschanged", voicesHandle);
voicesPlace.addEventListener("change", setVoice);
speak.addEventListener("click", toggle);
stop.addEventListener("click", () => toggle(false));
options.forEach((item) => item.addEventListener("change",setOption));