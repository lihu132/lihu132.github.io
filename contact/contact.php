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
        print "<p>success!</p>";
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    }
}
?>


<?php
header("Content-type: text/html; charset=utf-8");
$file  = 'log.txt';
$f = file_put_contents($file, $body,FILE_APPEND)

?>
