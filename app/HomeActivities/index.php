<?php

    session_start();

    $_SESSION['logged'] = $_SESSION['logged'] ?? false;

    if($_SESSION['logged']===false){
        header('Location: ../../index.php');
    }

    //echo "You're on the system now";

    require_once "../../layout/header.html";

?>

<script src="../../scripts/js/homeactivities/index.js"></script>

<link rel="stylesheet" href="../../assets/css/homeactivities/index.css">

<?php

    require_once "../../layout/footer.html";

?>