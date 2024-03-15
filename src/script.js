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

    setInterval(nextTestimonial, 5000);
    showTestimonial();
});

