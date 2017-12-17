<?php

$name = $_POST['user-name'];
$email = $_POST['user-email'];
$phone = $_POST['user-phone'];
$message = $_POST['user-message'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'gruzchiki154@mail.ru';                 // Наш логин
$mail->Password = 'logist1979';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('gruzchiki154@mail.ru', 'Order');   // От кого письмо
$mail->addAddress('sergun_zahar@mail.ru');     // Add a recipient
$mail->addAddress('2131198@mail.ru');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта ГРУЗЧИКИ.NSK';
$mail->Body    = '
	Пользователь оставил свои данные: <br>
	Имя: ' . $name . ' <br>
	Телефон: ' . $phone . ' <br>
  Email: ' . $email . ' <br>
  Сообщение: ' . $message . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>
