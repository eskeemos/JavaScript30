const duties = ["Walk the dog","Wash dishes","Learn German",
                "Make dinner","Do shopping","Vacum the carpet",
                "Make the bed","Clean your room","Train at the gym"]
const inbox = document.querySelector(".inbox");

(function getStarted(){
    let content = `<p>Chose one element with another with shift to check elements between!</p>`;
    for(var i = 0;i < 9;i++){
        content += `
        <div class="item">
            <input type="checkbox">
            <p>${duties[i]}</p>
        </div>
        `;
    }
    inbox.innerHTML = content;
})();

const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"));
let last;
function check(e){
    if(last){
        let between = false;
        if((e.shiftKey)&&(this.checked)){
            checkboxes.forEach((item) => {
                if((item === this)||(item === last)){
                    between = !between
                }
                if(between){
                    item.checked = true;
                }
            })
        }
    }
    last = this;
}

checkboxes.forEach((item) => item.addEventListener("click",check))
