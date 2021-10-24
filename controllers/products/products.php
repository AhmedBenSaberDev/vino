<?php

require "../../requires.php";

$productModel = new ProductModel();
$products = $productModel->listAll();

$template = Path::views() . "products/products";
require Path::views() . "layout.phtml";
