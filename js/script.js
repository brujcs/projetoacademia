const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

function menuMobile(){

    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}
function fecharMenu(){
    menu.classList.remove('menu-open')
    btnMenu.classList.remove('x')
}

btnMenu.addEventListener('click', menuMobile);
menu.addEventListener('click', fecharMenu);
