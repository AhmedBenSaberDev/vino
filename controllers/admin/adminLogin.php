<?php
require '../../models/FormSanitizer.class.php';
require "../../requires.php";

session_start();

if(array_key_exists('auth',$_SESSION)){
    header('location: adminPannel.php');
}

$formIsValid = true;

if(isset($_POST['submitButton']))
{
    $userName = FormSanitizer::sanitizeFormString($_POST['name']);
    $password = FormSanitizer::sanitizeFormPassword($_POST['password']);

    $_SESSION['name'] = $userName;
    if(empty($userName))
    {
        $formIsValid = false;
    }
    if(empty($password))
    {
        $formIsValid = false;
    }

    $adminModel = new AdminModel();
    $admin = $adminModel->fetch($userName);

    if(!$admin)
    {
        $formIsValid = false;
    }
    if($formIsValid)
    {
        if($password != $admin['password'])
        {
            $formIsValid = false;
        }
        if($password == $admin['password'])
        {
            $_SESSION['auth'] = $admin;
            header('location: adminPannel.php');
        }     
    }   
}

$template = Path::views() ."admin/adminLogin";
require Path::views() . "layout.phtml";