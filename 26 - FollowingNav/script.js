const triggerLi = [...document.querySelectorAll(".main-list > li")];
const ddbg = document.querySelector(".ddbg");
const nav = document.querySelector("nav");

function enterHandling(){
    this.classList.add("active-f1");
    setTimeout(() => this.classList.contains("active-f1") && this.classList.add("f2"),150);
    ddbg.classList.add("f3");

    const dd = this.querySelector(".dd");
    const ddCords = dd.getBoundingClientRect();
    const navCords = nav.getBoundingClientRect();

    const coords = {
        height : ddCords.height,
        width : ddCords.width,
        top : ddCords.top - navCords.top,
        left : ddCords.left - navCords.left 
    }
    
    ddbg.style.setProperty("width",`${coords.width}px`);
    ddbg.style.setProperty("height",`${coords.height}px`);
    ddbg.style.setProperty("transform",`translate(${coords.left}px, ${coords.top}px)`);
}
function leaveHandling(){
    this.classList.remove("active-f1","f2");
    ddbg.classList.remove("f3");
}

triggerLi.forEach((item) => item.addEventListener("mouseenter", enterHandling));
triggerLi.forEach((item) => item.addEventListener("mouseleave", leaveHandling));