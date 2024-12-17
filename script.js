const mobileMenuButton = document.getElementById('mobile-menu');
const mobileMenuDropdown = document.getElementById('mobile-menu-dropdown');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuDropdown.classList.toggle('hidden');
});


const carousel = document.getElementById('testimonial-carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

function updateCarousel() {
    const width = carousel.clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carousel.children.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === carousel.children.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);


// Toggle Main Categories
const toggleContent = (toggleBtn, content, icon) => {
    toggleBtn.addEventListener("click", () => {
        content.classList.toggle("hidden");
        icon.textContent = content.classList.contains("hidden") ? "+" : "-";
    });
};

const basicToggle = document.getElementById("basicToggle");
const basicContent = document.getElementById("basicContent");
const basicIcon = document.getElementById("basicIcon");

const signatureToggle = document.getElementById("signatureToggle");
const signatureContent = document.getElementById("signatureContent");
const signatureIcon = document.getElementById("signatureIcon");

toggleContent(basicToggle, basicContent, basicIcon);
toggleContent(signatureToggle, signatureContent, signatureIcon);

// Toggle Subcategories
const subToggles = document.querySelectorAll(".subToggle");
const subContents = document.querySelectorAll(".subContent");
const toggleIcons = document.querySelectorAll(".toggleIcon");

subToggles.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        subContents[index].classList.toggle("hidden");
        toggleIcons[index].textContent = subContents[index].classList.contains("hidden") ? "+" : "-";
    });
});



// Function to animate numbers
function animateCounter() {
    const counters = document.querySelectorAll('.client-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = target / 80;

        const updateCount = () => {
            if (count < target) {
                count = count + increment;
                counter.textContent = `${Math.ceil(count)}`;
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = `${target}`;
            }
        };

        // IntersectionObserver to trigger when section comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.disconnect(); // Stop observing once animation starts
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

// Initialize the counter animation when the page loads
window.onload = animateCounter;


const modal = document.getElementById('image-modal');
const openModalBtn = document.querySelector('#open-modal');
const closeModalBtn = document.getElementById('close-modal');
const prevBtn1 = document.getElementById('prev-btn1');
const nextBtn1 = document.getElementById('next-btn1');
const carouselImage = document.getElementById('carousel-image');
const images = {
    coupleOneImages: ['./assets/couples-1-1.jpg', './assets/couples-1-2.jpg', './assets/couples-1-3.jpg', './assets/couples-1-4.jpg', './assets/couples-1-5.jpg'],
    coupleTwoImages: ['./assets/couples-2-1.jpg', './assets/couples-2-2.jpg', './assets/couples-2-3.jpg', './assets/couples-2-4.jpg'],
    coupleThreeImages: ['./assets/couples-3-1.jpg', './assets/couples-3-2.jpg', './assets/couples-3-3.jpg', './assets/couples-3-4.jpg'],
    coupleFourImages: ['./assets/couples-4-1.jpg', './assets/couples-4-2.jpg', './assets/couples-4-3.jpg', './assets/couples-4-4.jpg', './assets/couples-4-5.jpg'],
    coupleFiveImages: ['./assets/couples-5-1.jpg', './assets/couples-5-2.jpg', './assets/couples-5-3.jpg', './assets/couples-5-4.jpg', './assets/couples-5-5.jpg'],
    coupleSixImages: ['./assets/couples-6-1.jpg', './assets/couples-6-2.jpg', './assets/couples-6-3.jpg'],
    coupleSevenImages: ['./assets/couples-7-1.jpg', './assets/couples-7-2.jpg', './assets/couples-7-3.jpg', './assets/couples-7-4.jpg'],
    coupleEightImages: ['./assets/couples-8-1.jpg', './assets/couples-8-2.jpg', './assets/couples-8-3.jpg'],
}
var currentImagesAlbum = 'coupleOneImages';

let currentIndex1 = 0;

function openModal(coupleImages) {
    currentIndex1 = 0;
    currentImagesAlbum = coupleImages;
    console.log('asd', currentImagesAlbum);
    if (coupleImages == 'coupleOneImages') {
        carouselImage.src = images.coupleOneImages[currentIndex1]
    } else if (coupleImages == 'coupleTwoImages') {
        carouselImage.src = images.coupleTwoImages[currentIndex1]
    } else if (coupleImages == 'coupleThreeImages') {
        carouselImage.src = images.coupleThreeImages[currentIndex1]
    } else if (coupleImages == 'coupleFourImages') {
        carouselImage.src = images.coupleFourImages[currentIndex1]
    } else if (coupleImages == 'coupleFiveImages') {
        carouselImage.src = images.coupleFiveImages[currentIndex1]
    } else if (coupleImages == 'coupleSixImages') {
        carouselImage.src = images.coupleSixImages[currentIndex1]
    } else if (coupleImages == 'coupleSevenImages') {
        carouselImage.src = images.coupleSevenImages[currentIndex1]
    } else if (coupleImages == 'coupleEightImages') {
        carouselImage.src = images.coupleEightImages[currentIndex1]
    }

    modal.classList.remove('hidden');
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
}

// Close Modal
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    setTimeout(() => modal.classList.add('hidden'), 300);
}

// Carousel Functionality
function updateImage(coupleImages) {
    carouselImage.src = coupleImages[4];
}

prevBtn1.addEventListener('click', () => {
    currentIndex1 = currentIndex1 - 1;
    console.log(currentImagesAlbum);

    if (currentIndex1 < 0) {
        currentIndex1 = images[currentImagesAlbum].length - 1;
    }
    carouselImage.src = images[currentImagesAlbum][currentIndex1]
});

nextBtn1.addEventListener('click', () => {
    currentIndex1 = currentIndex1 + 1;
    if (currentIndex1 > images[currentImagesAlbum].length - 1) {
        currentIndex1 = 0;
    }
    carouselImage.src = images[currentImagesAlbum][currentIndex1]
});

// Zoom Functionality
let zoomed = false;
carouselImage.addEventListener('click', () => {
    if (zoomed) {
        carouselImage.classList.remove('scale-150');
        carouselImage.classList.add('cursor-zoom-in');
        carouselImage.classList.remove('cursor-zoom-out');
    } else {
        carouselImage.classList.add('scale-150');
        carouselImage.classList.remove('cursor-zoom-in');
        carouselImage.classList.add('cursor-zoom-out');
    }
    zoomed = !zoomed;
});




// Home Slider
const slider = document.getElementById("slider");
const slides = document.querySelectorAll("#slider > div");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let currentIndexHome = 0;
let slideInterval;

// Go to next slide
function goToNextSlide() {
    currentIndexHome = (currentIndexHome + 1) % slides.length;
    updateSliderPosition();
}

// Go to previous slide
function goToPrevSlide() {
    console.log('pre');

    currentIndexHome =
        (currentIndexHome - 1 + slides.length) % slides.length;
    updateSliderPosition();
}

// Update Slider Position
function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndexHome * 100}%)`;
}

// Start Auto Slide
function startAutoSlide() {
    slideInterval = setInterval(goToNextSlide, 3000); // Auto-slide every 3 seconds
}

// Stop Auto Slide
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Restart Auto Slide when navigating manually
function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

// Event Listeners
next.addEventListener("click", () => {
    goToNextSlide();
    restartAutoSlide();
});

prev.addEventListener("click", () => {
    goToPrevSlide();
    restartAutoSlide();
});

// Initialize the Slider
startAutoSlide();