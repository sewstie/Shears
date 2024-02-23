window.onload = function () {
    const menu_btn = document.querySelector('.header__menu-burger')
    const mobile_menu = document.querySelector('.header__menu-list-mobile')
    const cover = document.querySelector('.header__menu-burger-cover');
    var contact_btn = document.querySelector('.contact-btn');

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('active');
        mobile_menu.classList.toggle('active');
        cover.classList.toggle('active');
    });
}