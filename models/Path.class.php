<?php

class Path{


    private static function getCurrentPage()
    {
        $array = explode("/",$_SERVER["PHP_SELF"]);
        return end($array);
    }

    public static function root()
    {
        if(self::getCurrentPage() == "index.php")
        {
            return "";
        }else{
            return "../../";
        }
    }
    
    public static function views()
    {
        return $_SERVER['DOCUMENT_ROOT'] . "/vino-mornag/views/";
    }

    public static function controllers()
    {
        return "/vino-mornag/controllers/";
    }

    public static function imagePath()
    {
        if(self::getCurrentPage() != "index.php")
        {
            return "../../img/";
        }
        return "img/";
    }

}