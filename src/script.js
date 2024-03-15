document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    let index = 0;

    function showTestimonial() {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }

    function nextTestimonial() {
        index = (index + 1) % testimonials.length;
        showTestimonial();
    }

    // Cambia el testimonio cada 5 segundos (5000 ms)
    setInterval(nextTestimonial, 5000);

    // Muestra el primer testimonio al cargar la página
    showTestimonial();
});

