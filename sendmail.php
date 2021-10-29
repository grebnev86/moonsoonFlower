<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpMailer/src/Exception.php';
require 'phpMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet ='UTF-8';
$mail->setLanguage('ru', 'phpMailer?language');
$mail->IsHTML(true);

// От кого письмо


