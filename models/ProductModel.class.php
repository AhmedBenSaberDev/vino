<?php

class ProductModel{

    public function listAll()
    {
        $dataBase = new Database();

        $sql = "SELECT * FROM product ORDER BY created_at DESC";

        return $dataBase->query($sql);
    }

    public function getProductById($id)
    {
        $dataBase = new Database();

        $sql = "SELECT * FROM product WHERE id = ? ";

        return $dataBase->queryOne($sql,[$id]);
    }

    public function deleteProduct($productId)
    {
        $dataBase = new Database();

        $sql = "DELETE FROM product WHERE Id = ".$productId;

        $dataBase->query($sql);
    }
    
    public function editProduct($id,$name,$desc,$price,$year,$picture)
    {
        $dataBase = new Database();

        $sql = "UPDATE product SET ProductName = '$name',
        ProductDescription = '$desc',
        Price = '$price',
        `year` = '$year',
        picture = '$picture',
        updated_at = now()
        WHERE Id = $id";

        $dataBase->query($sql);
    }

    public function addProduct($ProductName,$ProductDescription,$Price,$Picture, $year)
    {
        $dataBase = new Database();

        $sql = "INSERT INTO product (ProductName,ProductDescription,Price,Picture, `year`,created_at)
        VALUES(?,?,?,?,?,now())";
        $dataBase->query($sql,[$ProductName,$ProductDescription,$Price,$Picture, $year]);
    }

    public function searchProductByName($productName,$price)
    {
        $dataBase = new Database();

        $sql = "SELECT * FROM product WHERE ProductName LIKE ? AND price <= ?";

        return $dataBase->query($sql,["%".$productName."%",$price]);
    }
}