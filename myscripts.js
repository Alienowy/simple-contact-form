function sendEmail(){

var name = document.My_contact_form.name;
var email = document.My_contact_form.email;
var phone = document.My_contact_form.phone;
var subject = document.My_contact_form.subject;
var message = document.My_contact_form.message;

if(name.value == ""){
    name.nextElementSibling.style.display = "block";
    name.style.border = "1px solid #f00";
    return false
}else{
    name.nextElementSibling.style.display = "none";
    name.style.border = "1px solid transparent";   
}

if(!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || email.value == ""){
    email.nextElementSibling.style.display = "block";
    email.style.border = "1px solid #f00";
    return false
}else{
    email.nextElementSibling.style.display = "none";
    email.style.border = "1px solid transparent";   
}
if(!phone.value.match(/^[0-9]{9}$/) || phone.value == ""){
    phone.nextElementSibling.style.display = "block";
    phone.style.border = "1px solid #f00";
    return false
}else{
    phone.nextElementSibling.style.display = "none";
    phone.style.border = "1px solid transparent";   
}
if(subject.value == ""){
    subject.nextElementSibling.style.display = "block";
    subject.style.border = "1px solid #f00";
    return false
}else{
    subject.nextElementSibling.style.display = "none";
    subject.style.border = "1px solid transparent";   
}
if(message.value == ""){
    message.nextElementSibling.style.display = "block";
    message.style.border = "1px solid #f00";
    return false
}else{
    message.nextElementSibling.style.display = "none";
    message.style.border = "1px solid transparent";   
}
    Email.send({
        Host : "smtp.gmail.com",
        Username : "alienadrianwas@gmail.com",
        Password : "(Kitek29Kitek)",
        To : 'alienramzi@gmail.com',
        From : document.My_contact_form.email,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

