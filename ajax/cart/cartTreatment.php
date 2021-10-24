
<?php if(!empty($_POST['data'])):?>

<div class="cart-content">
    <h1>Shopping Cart</h1>
    <p class="cart-notification">Please review the contents of your cart. When you have finished please proceed to the check out.</p>
</div>

<table>
    <thead>
        <tr>
  
            <th>Your items</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            
        </tr>
    </thead>
    <tbody>
        
        <?php foreach($_POST['data'] as $product):?>
        <tr>
            
            <td><?= $product['name']?></td>
            <td><?= $product['price'] . " $"?></td>
            <td><?= $product['quantity']?></td>
            <td><?= $product['quantity'] * $product['price'] . " $"?></td>
            <td class="test"><i data-id="<?=$product['id']?>" class="fas fa-trash"></i></td>

        </tr>
        
        <?php endforeach;?>
        <th>Subtotal</th>
        <td></td>
        <td></td>
        <td><?=$_POST["subTotal"]. " $"?></td>

    </tbody>
</table>

<div class="checkout">
    <ul>
        <li><img src="https://assetss3.vin65.com/v2/images/v65-icons/visa-on.svg" alt="visa"></li>
        <li><img src="https://assetss3.vin65.com/v2/images/v65-icons/mastercard-on.svg" alt="mastercard"></li>
        <li><img src="https://assetss3.vin65.com/v2/images/v65-icons/americanexpress-on.svg" alt="american"></li>
        <li><img src="https://assetss3.vin65.com/v2/images/v65-icons/discover-on.svg" alt="discover"></li>
    </ul>
    <button id='checkout-btn' class="checkout-btn">check out</button>
</div>

<?php else:?>
    <div class="cart-content">
    <h1>Shopping Cart</h1>
    <p class="cart-notification">There are currently no items in your shopping cart.</p>
</div>
<?php endif;?>