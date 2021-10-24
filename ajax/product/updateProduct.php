<?php

use function PHPSTORM_META\type;

require '../../requires.php';

session_start();

if(isset($_POST['updateProduct']))
{
    $id = $_POST['productId'];
    $name = $_POST['productName'];
    $price = $_POST['price'];
    $year = $_POST['year'];
    $desc = $_POST['description'];
    
    $allowedTypes = array( 'png' => IMAGETYPE_PNG  ,  'jpeg' =>IMAGETYPE_JPEG  ,   'gif' =>IMAGETYPE_GIF );
    
    if(!empty($_FILES['image']["name"]))
    {
        $detectedType = exif_imagetype($_FILES['image']['tmp_name']);

        if(!in_array($detectedType, $allowedTypes))
        {
            $error = true;
        }else{
            $error = false;
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
        $picture = $_POST['oldImage'];
    }

    $productModel = new ProductModel();
    $productModel->editProduct($id,$name,$desc,$price,$year,$picture);

    $_SESSION['success'] = $name . " was updated successfuly";
}
header('location: http://localhost:8080/vino-mornag/controllers/admin/adminPannel.php#');