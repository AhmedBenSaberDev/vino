<?php

require_once "../../requires.php";

if(isset($_POST['payment']))
{
    $fistName = $_POST['payment']['firstName'];
    $lastName = $_POST['payment']['lastName'];
    $userName = $fistName . ' ' . $lastName;
    $email = $_POST['payment']['email'];

    $orderDetails = json_encode($_POST['payment']['orderDetails']);

    $orderModel = new OrderModel(); 
    $orderModel->add($userName,$orderDetails,$email);
}


