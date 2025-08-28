const hamMenu = document.getElementById('ham-menu');
const navbar = document.querySelector('.navbar-text');

hamMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.addEventListener("click", function(param) {
    if (!hamMenu.contains(param.target) && !navbar.contains(param.target)) {
        navbar.classList.remove('active');
    }
});