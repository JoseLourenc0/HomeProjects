<?php

    require_once '../conn.php';

    try{

        $stm= $pdo->prepare('SELECT * FROM tb_homeactivities ORDER BY id_reg DESC LIMIT 1');

        $stm->execute();

        if($stm->rowCount()>=1){

            echo json_encode($stm->fetchAll(PDO::FETCH_ASSOC)[0]);

        }else{

            echo 0;

        }

        $pdo=null;

    }catch(PDOException $e){
        echo $e->getMessage();
    }