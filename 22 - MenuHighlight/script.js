const list = document.querySelector("ul");
const cont = document.querySelector(".content");
const links = Array.from(document.querySelectorAll(".content a"));
const subjects = ["Home","About","Achievements","Why we?","Gallery"];

list.innerHTML = subjects.map((item,i) => {
    links[i].innerHTML = subjects[i];
    return `
    <a href="#">
        <li>${subjects[i]}</li>
    </a>`;
}).join("");

const AllLinks = Array.from(document.querySelectorAll("a"));
const marked = document.createElement("span");
marked.classList.add("marked");
document.body.appendChild(marked);

function mark(){
    const linkCoords = this.getBoundingClientRect();
    const coords = {
        width  : linkCoords.width,
        height : linkCoords.height,
        top    : linkCoords.top + window.scrollY,
        left   : linkCoords.left + window.scrollX
    }

    marked.style.width = `${coords.width}px`;
    marked.style.height = `${coords.height}px`;
    marked.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

AllLinks.forEach((item) => item.addEventListener("mouseenter", mark));
