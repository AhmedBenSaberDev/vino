<?php

require "../../requires.php";

$productModel = new ProductModel();
$products = $productModel->listAll(); 

$idsArray = [];

foreach($products as $product)
{
    array_push($idsArray,$product['Id']);
}

if(!array_key_exists ("id",$_GET) || !ctype_digit($_GET['id']) || !in_array($_GET['id'],$idsArray)){
    header("location: index.php");
    exit();
}

$productId = $_GET['id'];

$productModel = new ProductModel();
$product = $productModel->getProductById($productId);

$template = Path::views() ."products/productDetails";
require Path::views() ."layout.phtml";
 





