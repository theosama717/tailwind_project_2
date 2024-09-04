const initApp = () => {
    const hamburger = document.querySelector('#hamburger'); 
    const mobileMenu = document.querySelector('#mobile-menu'); 


    const toggleMenu = () => {
        mobileMenu.classList.toggle('flex')
        mobileMenu.classList.toggle('hidden')
    }

    hamburger.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

window.addEventListener('DOMContentLoaded', initApp)