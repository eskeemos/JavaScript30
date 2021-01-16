const sounds = ["boom.wav","clap.wav","hihat.wav","kick.wav","openhat.wav","ride.wav","snare.wav","tink.wav","tom.wav"];
const letters = ["A","B","D","F","G","H","J","K","L"];
const letterCode = [65,83,68,70,71,72,74,75,76];
const keysP = document.querySelector(".keys");

let keysC = "";

for(var i = 0;i < 9;i++){
    var [soundName,ext] = sounds[i].split(".");
    keysC += `
    <div class="key" data-key="${letterCode[i]}">
        <kbd>${letters[i]}</kbd>
        <span class="sound">${soundName}</span>
        <audio data-key="${letterCode[i]}" src="./sounds/${sounds[i]}"></audio>
    </div>
    `;
}
keysP.innerHTML = keysC;

function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    if(!audio) return;
    
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e){
    if(!e.propertyName == "transform") return;
    e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));

window.addEventListener("keydown",playSound);
keys.forEach((item) => item.addEventListener("transitionend",removeTransition));
