<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $message = $_POST['message'];
    $email = "Имя: " . $name . "\n\n" . "Email: " .  $email . "\n\n" . "Адресс: " .  $address . "\n\n" . "Сообщение: " .  $message;
    mail("info@mavitrans.by", 'Новая заявка', $email);
    echo json_encode(array("data"=>'successfuly send'));
?>