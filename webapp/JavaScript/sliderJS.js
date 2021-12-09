var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var circleNavs = document.getElementsByClassName("circleNav");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } 
    for (i = 0; i < circleNavs.length; i++) {
        circleNavs[i].className = circleNavs[i].className.replace("circleSelect", "");
    }
    slides[slideIndex-1].style.display = "flex";
    circleNavs[slideIndex-1].className += " circleSelect";
}

/*JS til modal box / form popup*/
var modal = document.getElementById("modalBox");
var btn = document.getElementsByClassName("callToAction");


function clickMe() {
    modal.style.display = "block";
}

function closeMe() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}