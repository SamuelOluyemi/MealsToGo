function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sobitcoin4@gmail.com",
        Password : "3A9045E165039139F8E8C74723C0F330C442",
        To : 'sobitcoin4@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone no: " + document.getElementById("phone").value
                + "<br> Age: " + document.getElementById("age").value
                + "<br> Role: " + document.getElementById("role").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
};
