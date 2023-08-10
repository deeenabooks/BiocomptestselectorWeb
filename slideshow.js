// JavaScript for automatic slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("slide");
    
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show the next slide and loop back to the first slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    
    // Change slide every 5 seconds (adjust as needed)
    setTimeout(showSlides, 5000);
}
