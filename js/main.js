document.addEventListener('DOMContentLoaded', () => {
    const mobileNavOpen = document.querySelector('.button-hamburger');
    const mobileNav = document.querySelector('.nav-mobile');
    const mobileNavCLose = document.querySelector('.button-close');

    mobileNavOpen.addEventListener('click', () => {
        mobileNav.classList.add('show');
    });
    
    mobileNavCLose.addEventListener('click', () => {
        mobileNav.classList.remove('show')
    })
});