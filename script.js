// You can use JavaScript libraries like GSAP or AOS for animations.
// For simplicity, here's a basic example with vanilla JavaScript:

// Add smooth scrolling to the navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});