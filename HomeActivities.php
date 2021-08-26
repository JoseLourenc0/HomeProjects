<?php

    session_start();

    $_SESSION['logged'] = $_SESSION['logged'] ?? false;

    if($_SESSION['logged']===false){
        header('Location: index.php');
    }

    echo "You're on the system now";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a id="LogoutButton" href="scripts/php/login/logout.php">
        LOGOUT
    </a>
</body>
</html>