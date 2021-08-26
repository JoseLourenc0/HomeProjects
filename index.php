<?php

session_start();

$_SESSION['fa'] = $_SESSION['fa'] ?? true;
$_SESSION['logged'] = $_SESSION['logged'] ?? false;

if(!$_SESSION['logged'] && !$_SESSION['fa'])
	echo 'Incorrect Keys';


require_once 'layout/login.html'

?>