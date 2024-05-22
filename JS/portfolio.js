// THESE FUNCTIONS OPEN ANC CLOSE THE CONTACT FORM
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// THIS FUNCTION DISPLAYS THE FIRST IMAGE IN THE SLIDESHOW WHEN THE PAGE LOADS
var slideIndex = 1;
showSlides(slideIndex);

// THIS FUNCTION CHANGES THE SLIDE WHEN THE LEFT OR RIGHT ARROWS ARE CLICKED
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// THIS FUNCTION CHANGES THE SLIDE WHEN THE DOTS ARE CLICKED
function currentSlide(n) {
    showSlides(slideIndex =n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.addEventListener("click", function(even) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") &&
    !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false)