<?php

session_start();

$_SESSION['logged'] = $_SESSION['logged'] ?? false;

if(!$_SESSION['logged'])
	echo 'Incorrect Keys';


require_once 'layout/login.html'

?>