<?php

class AdminModel{

    public function fetch($name)
    {
        $dataBase = new Database();

        $sql = "SELECT * FROM admins WHERE name = ? ";

        return $dataBase->queryOne($sql,[$name]);
    }

}