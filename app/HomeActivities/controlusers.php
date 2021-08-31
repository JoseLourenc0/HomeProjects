<?php

    session_start();

    $_SESSION['logged'] = $_SESSION['logged'] ?? false;

    if($_SESSION['logged']===false){
        header('Location: ../../index.php');
    }

    require_once "../../layout/header.html";

?>

<script src="../../scripts/js/homeactivities/controlusers.js"></script>

<link rel="stylesheet" href="../../assets/css/homeactivities/controlusers.css">

<?php

    require_once "../../layout/footer.html";

?>