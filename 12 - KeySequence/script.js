const tr = document.querySelector(".codePlace");
const table = document.querySelector("table");
const pressed = [];
const code = 'ESKEEMOS';

console.log("Secret code is " + code + "\n#######################");

(function starting(){
    let content = "";
    for(var i = 8;i > 0;i--){
        content += `<td>x</td>`;
    }
    tr.innerHTML = content;
})();

function codeHandling(e){
    if(((e.key.length) !== 1)||(e.key === " ")) return;
    pressed.push(e.key.toUpperCase());
    pressed.splice((-code.length) - 1, pressed.length - code.length);
    console.log(pressed);
    let content = "";
    for(var i = 8;i > 0;i--){
        content += `<td>${pressed[pressed.length - i] ?? "x"}</td>\n`;
    }
    tr.innerHTML = content;
    if(pressed.join('').includes(code)){
        console.log("Congratulation! You guessed the secret code!");
        table.classList.add("guessed");
    }
}

window.addEventListener("keydown", codeHandling);


