<?php
if(isset($_POST['contact_btn'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $submit=$_POST['submit'];
    $message=$_POST['message'];
    $to="alienramzi@gmail.com";
    $header="from:$email";
    if(mail($to,$subject,$message,$header)){
        $msg1="Succes!"
    }
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <link rel="stylesheet" href="styles.css">
    <script src="myscripts.js"></script>
</head>
<body>
    <div class="container">
        <h1 id="alight"><span>C</span><span>O</span><span>N</span><span>T</span><span>A</span><span>C</span><span>T</span></h1>
        <strong>
        <?php if(!empty($msg1)){
            echo $msg1;
        } ?>
        </strong>
        <form name="My_contact_form" onsubmit="return validEmail()" method="post">
            <div class="form_box">
                <div class="input-row">
                    <input type="text" placeholder="Name*" name="name" required>
                    <span class="error">Please enter your name.</span>
                </div>
                <div class="input-row">
                    <input type="text" placeholder="E-mail*" name="email" required>
                    <span class="error">Please enter your E-mail.</span>
                </div>
                <div class="input-row">
                    <input type="text" placeholder="Phone*" name="phone" required>
                    <span class="error">Please enter your phone number.</span>
                </div>
                <div class="input-row">
                    <input type="text" placeholder="Subject*" name="subject" required>
                    <span class="error">Please enter your subject.</span>
                </div>
                <div class="input-row">
                    <textarea placeholder="Message" name="message" required></textarea>
                    <span class="error">Please type your message.</span>
                </div>
                <div id="Send" class="input-row">
                    <input type="submit" value="SEND">
                </div>
            </div>
        </form>
    </div>
</body>
</html>