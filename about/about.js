// EQUIPO //

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


// OPINIONS //

document.addEventListener('DOMContentLoaded', function () {
    let currentReview = 0;
    const reviews = document.querySelectorAll('.review');
    console.log('Número de opiniones encontradas:', reviews.length); // Deberías ver la cantidad de opiniones

    function showCurrentReview() {
        // ... (mantener el resto del código igual)
    }

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    console.log('Prev Button:', prevButton); // Deberías ver el botón prev en la consola
    console.log('Next Button:', nextButton); // Deberías ver el botón next en la consola

    prevButton.addEventListener('click', function () {
        console.log('Clicked prev'); // Esto debería aparecer en la consola cuando hagas clic en prev
        // ... (resto del código del evento prev)
    });

    nextButton.addEventListener('click', function () {
        console.log('Clicked next'); // Esto debería aparecer en la consola cuando hagas clic en next
        // ... (resto del código del evento next)
    });

    showCurrentReview();
});