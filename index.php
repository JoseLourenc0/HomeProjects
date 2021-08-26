<?php

session_start();

$_SESSION['fa'] = $_SESSION['fa'] ?? true;
$_SESSION['logged'] = $_SESSION['logged'] ?? false;

if(!$_SESSION['logged'] && !$_SESSION['fa'])
    echo 'Incorrect Keys';

if($_SESSION['logged'])
    header('Location: ./app/HomeActivities/index.php');


require_once 'layout/login.html';
