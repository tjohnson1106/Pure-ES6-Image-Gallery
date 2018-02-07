const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

imgs.forEach(img => img.addEventListener("click",
    imgClick
));

function imgClick(e) {
    imgs.forEach(img => (img.style.opacity = 1));

    //change current image to source of clicked image
    current.src = e.target.src;

    //change opacity to opacity const
    e.target.style.opacity = opacity;
}