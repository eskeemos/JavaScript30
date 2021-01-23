const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let [X,Y] = [0,0];
let direction = true;
let hue = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 50;

function draw(e){
    if(!drawing) return;
    
    ctx.strokeStyle = `hsl(${hue},90%,50%)`;
    ctx.beginPath();
    ctx.moveTo(X,Y);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();

    [X,Y] = [e.offsetX, e.offsetY];

    if((ctx.lineWidth >= 100)||(ctx.lineWidth <= 1)){
        direction = !direction;
    }

    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }

    if(hue++ > 359){
        hue = 0;
    }

}

window.addEventListener("mousemove",draw);
window.addEventListener("mousedown",(e) => {
    drawing = true;
    [X,Y] = [e.offsetX, e.offsetY];
});
window.addEventListener("mouseup",() => drawing = false);
window.addEventListener("mouseout",() => drawing = false);