const config = {
    contactSelector: '.contact',
    contactLogoSelector: '.contact__logo',
    burgerSelector: '.header__burger',
    menuSelector: '.header__menu',
    menuItemSelector: '.header__menu-item'
}

const overMouse = (logo) => {
    logo.classList.add('contact__logo_hover');
}

const outMouse = (logo) => {
    logo.classList.remove('contact__logo_hover');
}

const addHoverListener = (config) => {
    const contacts = Array.from(document.querySelectorAll(config.contactSelector))
    contacts.forEach((contact) => {
        const logo = contact.querySelector(config.contactLogoSelector);
        contact.addEventListener('mouseover', function () {
            overMouse(logo)
        })
        contact.addEventListener('mouseout', function () {
            outMouse(logo)
        })
    })
}

addHoverListener(config)

const addBurgerListener = (config) => {
    const burger = document.querySelector(config.burgerSelector);
    const menu = document.querySelector(config.menuSelector);
    const body = document.querySelector('body')
    burger.addEventListener('click', function(){
        burger.classList.toggle('header__burger_active');
        menu.classList.toggle('header__menu_active');
        body.classList.toggle('fix')
    })
}

const imgCars = document.querySelector('.carsImg')
if (window.innerWidth < 767) {
    imgCars.src = './images/Group 75.png'
}

addBurgerListener(config)

