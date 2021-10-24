<?php

require '../../requires.php';
session_start();

$productModel = new ProductModel();

if(array_key_exists('deleteProduct',$_POST))
{
    $productModel->deleteProduct($_POST['productId']);
    $_SESSION['success'] = $_POST['productName'] . " has been successfuly deleted";
}

header("location: http://localhost:8080/vino-mornag/controllers/admin/adminPannel.php");