<div class="admin-pannel">
    <h1>Admin pannel</h1>
</div>
<?php
require "../../requires.php";

$orderModel = new OrderModel();
$orders = $orderModel->listAll();


require Path::views() ."admin/adminNavLayout.phtml";
$template = Path::views() .'admin/adminCommandes';

require Path::views() . "layout.phtml";
require Path::views() ."admin/adminModals.phtml";