const buttons  = [...document.querySelectorAll("[data-time]")];
const timeLeft = document.querySelector(".time-left");
const timeEnd  = document.querySelector(".time-end");
let interval;

function manageHandle(seconds){

    clearInterval(interval)
    
    const now = Date.now();
    const then = now + seconds * 1000;
    timeEndHandle(then);
    timeLeftHandle(seconds);

    interval = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft < 0){
            clearInterval(interval);
            timeEnd.textContent = "Time is up!";
            timeLeft.textContent = "";
            return;
        }

        timeLeftHandle(secondsLeft);
    },1000)
}
function timeLeftHandle(seconds){
    const minutes = Math.floor(seconds / 60);
    const secsLeft = seconds % 60;
    const display = `${minutes}:${secsLeft < 10 ? "0" + secsLeft : secsLeft}`;
    timeLeft.textContent = display;
    document.title = display;
}
function timeEndHandle(then){
    const end = new Date(then);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    timeEnd.innerHTML = `${hour > 12 ? hour - 12 + "<sub>p.m.</sub>" : hour + "a.m."}:${minutes < 10 ? "0" + minutes : minutes}`;
}
function timerHandle(){
    const seconds = parseInt(this.dataset.time);
    manageHandle(seconds);
}

buttons.forEach((item) => item.addEventListener("click", timerHandle));
document.form.addEventListener("submit", function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    manageHandle(mins * 60);
    this.reset();
})