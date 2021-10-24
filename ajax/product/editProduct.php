<?php

require_once "../../requires.php";

if(array_key_exists('productId',$_POST))
{
    $productModel = new ProductModel();
    $product = $productModel->getProductById($_POST['productId']); 
}
?>

<div style="text-align:end;">
    <button id="closeEdit" style="border:none;background:none;"><i class="far fa-window-close"></i></button>
</div>

<div class="edit-product-wrapper">
    <form class="edit-product" enctype="multipart/form-data" action="../../ajax/product/updateProduct.php" method="POST">
        <div class="form-control">
            <label for="productName">Product name </label>
            <input required  name="productName" type="text" id="productName" value="<?= $product['ProductName']?>">
        </div>
        <div class="form-control">
            <label for="price">Price </label>
            <input required name="price" type="number" id="price" value="<?= $product['Price']?>">
        </div>
        <div class="form-control">
            <label for="year">Year </label>
            <input required name="year" type="number" id="year" value="<?= $product['year']?>">
        </div>
        <div class="form-control">
            <label for="image">Image</label>
            <input name="image" id="image" type="file" >
        </div>
        <div class="form-control">
            <label for="description">Description :</label>
            <textarea name="description" id="description" cols="70" rows="10"><?= $product['ProductDescription']?>"</textarea>
        </div>
    
        <input type="hidden" name="oldImage" value="<?= $product['Picture']?>">
        <input type="hidden" name="productId" value="<?= $product['Id']?>">
        
        <button class="update-btn" type="submit" name="updateProduct">Update</button>
    </form>
</div>