const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80)
});

ScrollReveal().reveal('.home-div', { delay: 500 });
ScrollReveal().reveal('.image', { delay: 500 });
ScrollReveal().reveal('.card', { delay: 500 });
ScrollReveal().reveal('.first-btn2', { delay: 500 });
ScrollReveal().reveal('.title2', { delay: 500 });
ScrollReveal().reveal('.features-des', { delay: 500 });
ScrollReveal().reveal('.big-card', { delay: 500 });
ScrollReveal().reveal('.second-div', { delay: 500 });
ScrollReveal().reveal('.another-div', { delay: 500 });

