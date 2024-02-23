contact_btn.addEventListener('click', function(){
    var name = document.getElementById('Name').value;
    var surname = document.getElementById('Surname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var body = 'name: '+name + '<br> surname: '+surname + '<br> email: '+email + '<br> message: '+message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vladgusenov3@gmail.com",
        Password : "19C21601F1F0512C6C1960440CFAFEA7D9D2",
        To : 'gusenovvlad@gmail.com',
        From : "vladgusenov3@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
});