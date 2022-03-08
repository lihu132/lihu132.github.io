<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel']
    $message = $_POST['message'];
    $from = 'From: TangledDemo'; 
    $to = 'demo@tangledindesign.com'; 
    $subject = 'Hello';

    $body = "From: $name\n E-Mail: $email\n Tel: $tel\n Message:\n $message \r\n";
?>

<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
        print "<script>document.location.href='https://www.engraintimber.com.au';</script>";
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
