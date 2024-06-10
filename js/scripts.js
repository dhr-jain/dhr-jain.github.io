// GSAP animation for the name
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(TextPlugin);
    gsap.to(".logo img", {duration: 2, text: "Dhruv Jain"});
});

// Toggle hamburger menu
document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});
