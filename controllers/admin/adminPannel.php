<?php
require "../../requires.php";
session_start();

if(!array_key_exists('auth',$_SESSION)){
    header('location: http://localhost:8080/vino-mornag/index.php');
    die();
}

$productModel = new ProductModel();
$products = $productModel->listAll();

$template = Path::views() ."admin/adminPannel";
require Path::views() . "layout.phtml";


