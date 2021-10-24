<?php

require_once "../../requires.php";

$productModel = new ProductModel();
$products = $productModel->listAll();

if(isset($_POST['productName']) && !empty($_POST['productName']) ){

    $products = $productModel->searchProductByName($_POST['productName'],$_POST['productPrice']);

}
?>

<?php if(!empty($products)) :?>
    
    <?php if(isset($_POST['productName']) && !empty($_POST['productName']) ):?>

        <p class="search-result" ><?= count($products) . " result(s) where found for '" .  $_POST['productName'] . "'"?></p>

    <?php endif;?>
   
    
<?php foreach($products as $product):?>
    <div class="product">

        <div class="product-wrapper">
            
            <div class="product-content">

                <span><?= $product["year"]?></span>
                <p class="name"><?= $product["ProductName"]?></p>
                <p class="price"><?= $product["Price"]?> $</p>
                <a class="product-details-btn" href="productDetails.php?id=<?= $product['Id']?>">More details</a>
            </div>
            
        </div>
            
            <img src="<?= Path::imagePath() . "products/" . $product['Picture']?>" alt="vin">

    </div>
    <?php endforeach;?>

    <?php else :?>
        <h2>No products found</h2>
    <?php endif;?>
