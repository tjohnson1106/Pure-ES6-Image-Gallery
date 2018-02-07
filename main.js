const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// set first image opacity

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click",
    imgClick
));

function imgClick(e) {
    //reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //change current image to source of clicked image
    current.src = e.target.src;

    //add fade-in class
    current.classList.add("fade-in");

    //remove fade-in class
    setTimeout(() => current.classList.remove("fade-in"),
        500
    );

    //change opacity to opacity const
    e.target.style.opacity = opacity;
}