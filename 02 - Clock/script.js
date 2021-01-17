const secoP = document.querySelector(".seco");
const minuP = document.querySelector(".minu");
const hourP = document.querySelector(".hour");
const digitTime = document.querySelector(".digit-clock");
const zero = "0";
var str,hours,minutes,seconds;

function setClock(){
    var date = new Date();

    var secoI = date.getSeconds();
    var secoV = (secoI / 60 * 360) + 90;
    secoP.style.transform = `rotate(${secoV}deg)`;

    var minuI = date.getMinutes();
    var minuV = (minuI / 60 * 360) + (secoI / 60 * 6) + 90;
    minuP.style.transform = `rotate(${minuV}deg)`;

    var hourI = date.getHours();
    var hourV = (hourI / 12 * 360) + (minuI / 60 * 30) + 90;
    hourP.style.transform = `rotate(${hourV}deg)`;

    if(secoI < 10){
        str = secoI.toString();
        seconds = zero.concat(str);
    }else{
        seconds = secoI;
    }
    if(minuI < 10){
        str = minuI.toString();
        minutes = zero.concat(str);
    }else{
        minutes = minuI;
    }
    if(hourI < 10){
        str = hourI.toString();
        hours = zero.concat(str);
    }else{
        hours = hourI;
    }

    digitTime.innerText = `${hours} : ${minutes} : ${seconds}`;

    console.log(`Time : ${hours} : ${minutes} : ${seconds}`);
}

setInterval(setClock,1000);

setClock();

