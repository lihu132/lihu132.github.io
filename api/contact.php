<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel']
    $message = $_POST['message'];
    $headers = 'From: EngrainTimber'; 
    $to = 'lihu132@gmail.com'; 
    $subject = 'Hello';

    $body = "From: $name\n E-Mail: $email\n Tel: $tel\n Message:\n $message \r\n";
?>

<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $headers)) { 
        print "<script>document.location.href='https://www.engraintimber.com.au';</script>";
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    }
}
?>

