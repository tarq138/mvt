<?php 
    $fromCounty = $_POST['fromCounty'];
    $toCounty = $_POST['toCounty'];
    $fromCity = $_POST['fromCity'];
    $toCity = $_POST['toCity'];
    $item = $_POST['item'];
    $weight = $_POST['weight'];
    $volume = $_POST['volume'];
    $companyName = $_POST['companyName'];
    $number = $_POST['number'];
    $inputEmailCalc = $_POST['inputEmailCalc'];
    $personName = $_POST['personName'];
    $exampleFormControlTextareaCalc = $_POST['exampleFormControlTextareaCalc'];
    $email = "Страна отправления: " . $fromCounty . " Город отправления: " .  $fromCity . "\n\n" . "Страна назначения: " .  $toCounty . " Город назначения: " .  $toCity . "\n\n" . 'Наименование заказа: ' .  $toCity . ' Вес: ' . $weight . ' Объем: ' . $volume . "\n\n" . "Название компании: " . $companyName . "\n\n" . "Контрактный номер: " . $number . "\n\n" . "Контрактное лицо: " . $personName . "\n\n" . "Дополнительная информация: " . $exampleFormControlTextareaCalc;
    mail("info@mavitrans.by", 'Новая заявка на расчет стоимости', $email);
    echo json_encode(array("data"=>'successfuly send'));
?>