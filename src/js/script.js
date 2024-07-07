window.onload = function () {
    const menu_btn = document.querySelector('.header__menu-burger')
    const mobile_menu = document.querySelector('.header__menu-list-mobile')
    const cover = document.querySelector('.header__menu-burger-cover');

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('active');
        mobile_menu.classList.toggle('active');
        cover.classList.toggle('active');
    });

    var contact_btn = document.querySelector('.contact-btn');

    contact_btn.addEventListener('click', function(){
        var name = document.getElementById('Name').value;
        var surname = document.getElementById('Surname').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var body = 'name: '+name + '<br> surname: '+surname + '<br> email: '+email + '<br> message: '+message;
       
        Email.send({
            SecureToken : "1ae143b5-85a4-4e68-923e-ae1a836a1af5",
            To : 'gusenovvlad@gmail.com',
            From : "gusenovvlad@gmail.com",
            Subject : "New inquiry",
            Body : body,
        })
    });
}