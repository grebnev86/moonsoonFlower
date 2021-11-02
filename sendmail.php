<?php
require_once('phtMailer')

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpMailer/src/Exception.php';
require 'phpMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet ='UTF-8';
$mail->setLanguage('ru', 'phpMailer?language');
$mail->IsHTML(true);

// От кого письмо
$mail->setFrom('agrebnev86@yandex.ru', 'Alex');
//Кому
$mail->addAddress('grebnev86@bk.ru');
//Theme of letter
$mail->Subject = 'Hi its me';

//Body of letter
$body = '<h1>Мое новое письмеццо</h1>';

$body = '<p>Name: '.$_POST['user_name'].'</p>';

$body = '<p>Number: '.$_POST['user_number'].'</p>';

$mail->Body = $body;

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

