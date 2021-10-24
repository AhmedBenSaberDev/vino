<?php
require "../../requires.php";

$orderModel = new OrderModel();

if (isset($_POST['id'])) {

    
    $order = $orderModel->getOrderById($_POST['id']);
    $orderDetails = json_decode($order['order_details'], true);
}
if (isset($_POST['shipping'])) {

    $orderModel->updateShipping($_POST['id']);

    $order = $orderModel->getOrderById($_POST['id']);
    $orderDetails = json_decode($order['order_details'], true);
}
if (isset($_POST['delete'])) {

    $orderModel->deleteOrder($_POST['id']);

}
?>

<thead>
    <tr>
        <th>Product id</th>
        <th>Product name</th>
        <th>Quantity</th>
    </tr>
</thead>
<tbody>
    
<caption>Order number : <?= $_POST['id'] ?></caption>
    <?php foreach ($orderDetails as $detail) : ?>
        <tr>
            <td><?= $detail['id'] ?></td>
            <td><?= $detail['name'] ?></td>
            <td><?= $detail['quantity'] ?></td>
          
        </tr>
    <?php endforeach; ?>

        <tr>
            <th style="padding-top:10%;">Client name</th>
            <td style="padding-top:11%;"><?= $order['user_name']?></td>
        </tr>

        <tr>
            <th style="padding-top:10%;">Client email</th>
            <td style="padding-top:11%;"><?= $order['email']?></td> 
        </tr>
        
        <tr>
        <th style="padding-top:10%;">Shipped</th>
            <?php if (empty($order['shipped_at'])) : ?>
                <td style="padding-top:10%;"><?= "No" ?></td>
            <?php else : ?>
                <td style="padding-top:11%;"><?= $order['shipped_at'] ?></td>
            <?php endif; ?>

            <td style="padding-top:10%;"> <button data-id="<?= $order['id']?>" id='confirm-shipping'>Confirm shipping</button></td>
            <td style="padding-top:10%;"><button data-id="<?= $order['id']?>" id='delete-order'>Delete order</button></td>
        </tr>
        
</tbody>
