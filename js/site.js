const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    document.body.classList.toggle('static-body');
    document.querySelector('.hamburger').classList.toggle('hamToggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        document.body.classList.remove('static-body');
        document.querySelector('.hamburger').classList.remove('hamToggle');
    })
})