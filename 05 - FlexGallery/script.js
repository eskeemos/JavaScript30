const panelsP = document.querySelector(".panels");
const texts = [
    ["hey","let's","dance"],
    ["give","take","receive"],
    ["experience","it","today"],
    ["give","all","you can"],
    ["life","in","motion"]];

let panelsContent = "";

function param(i){
    let panelContent = "";
    for(var j = 0;j < 3;j++){
        panelContent += `<p>${texts[i][j]}</p>`;
    }
    return panelContent
}

for(var i = 0;i < 5;i++){
    panelsContent += `<div class="panel p${i + 1}">` + param(i) +  `</div>`;
}

panelsP.innerHTML = panelsContent;

const panels = Array.from(document.querySelectorAll(".panel"));

function toggleOpen(){
    this.classList.toggle("open");
}

function toggleActive(e){
    if(e.propertyName.includes("flex")){
        this.classList.toggle("active");
    }
}

panels.forEach((item) => item.addEventListener("click", toggleOpen))
panels.forEach((item) => item.addEventListener("transitionend", toggleActive))
