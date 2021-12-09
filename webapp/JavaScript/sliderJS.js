var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);

}

function showSlides(n) {
    var i;
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

setInterval( function() {
    if (slideIndex === slides.length) {
        slideIndex = 0;
    }
    slideIndex += 1;
    showSlides();
}, 5000)