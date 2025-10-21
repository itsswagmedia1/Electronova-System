document.addEventListener("DOMContentLoaded", function() {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLogo = document.querySelector(".nav-logo"); // Get the logo
    const menuOverlay = document.querySelector(".menu-overlay"); // Get the overlay

    // --- Mobile Navigation Toggle ---
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        navLogo.classList.toggle("active"); // Toggle active class on logo
        menuOverlay.classList.toggle("active"); // Toggle the overlay
    });

    // Function to close the menu
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        navLogo.classList.remove("active");
        menuOverlay.classList.remove("active");
    }

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", closeMenu));
    
    // Close menu when the overlay is clicked
    menuOverlay.addEventListener("click", closeMenu);
    
    // --- Animate on Scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

});