const form = document.querySelector(".dish-from");
const list = document.querySelector(".dish-list");
const clear = document.querySelector(".dish-clear");
var items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector("[name=item").value);
    if(text.length === 0){
        return;
    }else{
        const item = {
            text,
            done: false
        }
        items.push(item);
        displayHandling(items);
        localStorage.setItem("items",JSON.stringify(items))
        this.reset();
    }
}
function displayHandling(items){
    if(items.length === 0){
        list.innerHTML = "<li>Currently, list is empty. Add some products.</li>";
    }else{
        list.innerHTML = items.map((item,i) => {
        return `
        <li>
            <input type="checkbox" data-index="${i}" id="item${i}" ${item.done ? 'checked' : ''}>
            <label for="item${i}">${item.text}</label>
        </li>`;
    }).join("");
    }
}
function clearHandling(){
    localStorage.removeItem("items");
    items = [];
    displayHandling(items);
}
function toggleHandling(e){
    if(!e.target.matches("input")) return;
    const et = e.target;
    const index = et.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
    displayHandling(items);
}

form.addEventListener("submit",addItem);
clear.addEventListener("click", clearHandling);
list.addEventListener("click", toggleHandling);
displayHandling(items);