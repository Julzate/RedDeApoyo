document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    
    // Function to move the carousel
    function moveCarousel() {
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0; // Reset to the first item
        }

        // Move the carousel to the new position
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Button click events for manual navigation
    const prevButton = document.querySelector('.btn-left');
    const nextButton = document.querySelector('.btn-right');

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        moveCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        moveCarousel();
    });

    // Automatic slide change every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        moveCarousel();
    }, 5000); // 5000 milliseconds = 5 seconds
});