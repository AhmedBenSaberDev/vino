<?php

require '../../requires.php';
session_start();

$error = false;

if(isset($_POST['addProduct']))
{
    $name = FormSanitizer::sanitizeFormString($_POST['productName']);
    $price = $_POST['price'];
    $year = $_POST['year'];
    $description = FormSanitizer::sanitizeFormString($_POST['description']);

    $allowedTypes = array( 'png' => IMAGETYPE_PNG  ,  'jpeg' =>IMAGETYPE_JPEG  ,   'gif' =>IMAGETYPE_GIF );

    if(!empty($_FILES['image']["name"]))
    {
        $detectedType = exif_imagetype($_FILES['image']['tmp_name']);
        
        if(!in_array($detectedType, $allowedTypes))
        {
            $error = true;
        }
        
    }

    if(!$error)
        {
            //$fileExtension = ".".array_search($detectedType,$allowedTypes);
            $picture =  $_FILES['image']['name'];
            $tmpPicture = $_FILES['image']['tmp_name'];
            $folder = Path::imagePath() . 'products/';
            move_uploaded_file($tmpPicture,$folder.$picture);
        }
    if($error || empty($_FILES['image']["name"]))
    {
        $picture = 'default.jpg';
    }
    
    $productModel = new ProductModel();
    $productModel->addProduct($name,$description,$price,$picture, $year);

    $_SESSION['success'] = $name . " has been added successfuly";
    
}
header('location: http://localhost:8080/vino-mornag/controllers/admin/adminPannel.php');