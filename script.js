const navbar = document.querySelector('.nav-wrapper');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 50){
        navbar.classList.add('bgcolor');
    }else{
        navbar.classList.remove('bgcolor');
    }
});