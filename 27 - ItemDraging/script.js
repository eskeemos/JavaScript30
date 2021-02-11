const items = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

(function gettingStarted(){
    let itemsContent = "";
    for(var i = 1;i < 26;i++){
        itemsContent += `<div class="item">${i}</div>\n`;
    }
    items.innerHTML = itemsContent;
})();

items.addEventListener("mousedown", (e) => {
    isDown = true;
    items.classList.add("active");
    startX = e.pageX - items.offsetLeft;
    scrollLeft = items.scrollLeft;
})
items.addEventListener("mouseup", (e) => {
    isDown = false;
    items.classList.remove("active");
})
items.addEventListener("mouseleave", (e) => {
    isDown = false;
    items.classList.remove("active");
})
items.addEventListener("mousemove", (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - items.offsetLeft;
    const walk = (x - startX) * 2.5;
    items.scrollLeft = scrollLeft - walk;
})