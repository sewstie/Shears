window.onload = function (){
    contact_btn.addEventListener('click', function(){
        var name = document.getElementById('Name').value;
        var surname = document.getElementById('Surname').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var body = 'name: '+name + '<br> surname: '+surname + '<br> email: '+email + '<br> message: '+message;

        
    });
}