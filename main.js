let text = document.getElementById('text');
let fg = document.getElementById('fg');

// Fade in effect on page load
window.addEventListener('load', () => {
    text.style.opacity = '1';
});

// Parallax scrolling effect
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2 + 'px';
    text.style.opacity = 1 - value / 600; // Adjust the fade-out effect as you scroll
    fg.style.bottom = value * 1 + 'px';
});

// Hamburger menu for mobile view
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
