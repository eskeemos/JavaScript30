const lorem = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet justo donec enim diam vulputate ut pharetra. Posuere morbi leo urna molestie at elementum eu. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Suspendisse interdum consectetur libero id faucibus. Rhoncus dolor purus non enim praesent elementum facilisis. Sit amet nulla facilisi morbi tempus. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. At lectus urna duis convallis convallis tellus id interdum velit. A diam sollicitudin tempor id. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. At volutpat diam ut venenatis.</p>";
const content = document.querySelector(".content");
let txt = "";
for(var i = 0;i < 5;i++){
    txt+= lorem;
}
content.innerHTML = txt;

const nav = document.querySelector("#nav");
let topNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY > topNav){
        document.body.classList.add("fix");
    }else{
        document.body.classList.remove("fix");
    }
}

window.addEventListener("scroll",fixNav);