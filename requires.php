<?php

require_once "libraries/Database.class.php";

spl_autoload_register(function($class){
    require_once "models/".$class.".class.php";
});