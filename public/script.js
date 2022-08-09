const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const toggle = document.querySelector('#toggle');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');

    if(toggle.getAttribute('src') === "./images/icon-hamburger.svg"){
        toggle.setAttribute('src', "./images/icon-close.svg") 
    }else {
        toggle.setAttribute('src', "./images/icon-hamburger.svg")
    }
})