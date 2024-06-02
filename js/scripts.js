document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // GSAP Scramble Text Animation
    gsap.registerPlugin(TextPlugin);
    gsap.to("#hero-title", {
        text: "Welcome to Dhruv Jain's Website",
        duration: 2,
        ease: "power2.inOut",
        delay: 1,
        scrambleText: { chars: "0123456789", revealDelay: 0.5, speed: 1 }
    });
});

// Loader logic
window.addEventListener("load", function() {
    const loaderContainer = document.querySelector(".loader-container");
    loaderContainer.style.display = "none";
});
