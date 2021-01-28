const slideImages = [...document.querySelectorAll("img.slide-in")];

function scrollHandling(){
    slideImages.forEach((item) => {
        var imageTop = (window.scrollY + window.innerHeight) - item.height;
        var imageBottom = item.offsetTop + item.height;
        var isHalfShown = imageTop > item.offsetTop;
        var isNotScrolled = window.scrollY < imageBottom;
        if((isHalfShown)&&(isNotScrolled))
        {
            item.classList.add("active");
        }else{
            item.classList.remove("active");
        }
    })
}

window.addEventListener("scroll", scrollHandling);