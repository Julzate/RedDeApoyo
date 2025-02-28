document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("[data-carousel]");
    const slidesContainer = carousel.querySelector("[data-slides]");
    const slides = Array.from(carousel.querySelectorAll(".slide-info"));
    const prevButton = carousel.querySelector(".btn-left");
    const nextButton = carousel.querySelector(".btn-right");
    let currentIndex = 0;

    function updateSlide() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? "block" : "none";
        });
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlide();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlide();
    });

    updateSlide(); // Inicializar la visibilidad de los slides
});
