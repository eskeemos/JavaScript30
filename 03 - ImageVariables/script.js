const inputs = [...document.querySelectorAll("input")];

function change(){
    const suffix = this.dataset.size || "";
    document.documentElement.style.setProperty(`--${this.id}`,this.value + suffix);
}

inputs.forEach((item) => item.addEventListener("change",change));
inputs.forEach((item) => item.addEventListener("mousemove",change));