<?php

class FormSanitizer{

    public static function sanitizeFormString($input){
        $input = strip_tags($input);
        $input = trim($input);
        return  $input;
    }

    public static function sanitizeFormPassword($input){
        $input = strip_tags($input);
        return  $input;
    }
    
    public static function sanitizeFormEmail($input){
        $input = strip_tags($input);
        $input = trim($input);
        return  $input;
    }
}