const navbar = document.getElementById('navbar');

// Change styles on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#555'; // Change background color on scroll
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

// Reset styles when scrolling stops (optional)
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        navbar.style.backgroundColor = window.scrollY > 0 ? '#555' : '#333';
    }, 250);
});
