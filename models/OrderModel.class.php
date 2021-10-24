<?php

class OrderModel{

    public function add($username,$orderDetails,$email)
    {
        $database = new Database();

        $sql = "INSERT INTO orders (`user_name`,order_details,email,created_at)
        VALUES(?,?,?,now())";

        $database->query($sql,[$username,$orderDetails,$email]);
    }

    

    public function listAll()
    {
        $dataBase = new Database();

        $sql = "SELECT * FROM orders ORDER BY created_at DESC";

        return $dataBase->query($sql);
    }

    public function getOrderById($id)
    {
        $database = new Database();

        $sql = "SELECT * FROM orders WHERE id = ? ";

        return $database->queryOne($sql,[$id]);
    }

    public function updateShipping($id)
    {
        $database = new Database();
        $sql = "UPDATE orders SET shipped_at = now()
        WHERE id = $id";
        $database->query($sql);
    }

    public function deleteOrder($id)
    {
        $dataBase = new Database();

        $sql = "DELETE FROM orders WHERE id = $id ";

        $dataBase->query($sql);
    }

}