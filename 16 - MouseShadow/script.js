const main = document.querySelector(".main");
const logo = document.querySelector("h1");
const {offsetWidth : width, offsetHeight : height} = main;
const walk = 500;

function shadow(e){
    let {offsetX : x, offsetY : y} = e;
    
    if(this !== e.target){
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const XMove = Math.round((x / width * walk) - (walk / 2));
    const YMove = Math.round((y / height * walk) - (walk / 2));
    console.log(XMove);

    logo.style.textShadow = `
    ${XMove}px ${YMove}px 0           hsl(${(XMove + 70 ) % 256},60%, 30%),
    ${XMove * -1}px ${YMove}px 0      hsl(${(XMove + 140) % 256},60%, 50%),
    ${XMove}px ${YMove * -1}px 0      hsl(${(XMove + 210) % 256},60%, 70%),
    ${XMove * -1}px ${YMove * -1}px 0 hsl(${(XMove + 280) % 256},60%, 90%)`;
}

main.addEventListener("mousemove",shadow);