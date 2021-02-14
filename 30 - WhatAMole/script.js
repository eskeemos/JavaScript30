(function gettingStarted(){
    const gameP = document.querySelector(".game");
    let gameC = "";
    for(var i = 0;i < 6;i++){
    gameC += `
    <div class="hole${i}">
        <div class="mole"></div>
    </div>
    `;
}
gameP.innerHTML = gameC;
})();

const start = document.querySelector(".start");
const scoreP = document.querySelector(".score");
const holes = [...document.querySelectorAll("[class^=hole]")];
const moles = [...document.querySelectorAll(".mole")]
let timeUp = false;
let score = 0;
let lastHole;

function startGame(){
    scoreP.textContent = 0;
    timeUp = false;
    score = 0;
    showMole();
    setTimeout(() => timeUp = true,10000)
}

function showMole(){
    const time = randomTime(100,1000);
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
        hole.classList.remove("up");
        if(!timeUp) showMole();
    },time)
}

function randomHole(holes){
    const x = Math.floor(Math.random() * holes.length);
    const hole = holes[x];
    if(hole === lastHole){    
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function randomTime(min,max){
    return Math.round(Math.random() * (max - min) + min);
}

function scored(e){
    if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove("up");
    scoreP.textContent = score;
}

start.addEventListener("click", startGame);
moles.forEach((item) => item.addEventListener("click", scored));