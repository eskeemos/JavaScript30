const divs1 = document.querySelectorAll("[class$='_1']");
const divs2 = document.querySelectorAll("[class$='_2']");
const divs3 = document.querySelectorAll("[class$='_3']");
const divs4 = document.querySelectorAll("[class$='_4']");

function logs(e){
    console.log(this.classList.value);
}
function logsb(e){
    e.stopPropagation();
    console.log(this.classList.value);
}

divs1.forEach((item) => item.addEventListener("click", logs, {
    capture : true,
    once : false
}));
divs2.forEach((item) => item.addEventListener("click", logs, {
    capture : false,
    once : false
}));
divs3.forEach((item) => item.addEventListener("click", logsb, {
    capture : true,
    once : false
}));
divs4.forEach((item) => item.addEventListener("click", logsb, {
    capture : false,
    once : false
}));