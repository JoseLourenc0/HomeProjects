<?php

    require_once '../conn.php';

    try{

        $stm= $pdo->prepare('SELECT id,name,phonenumber,user_name,email,date_creation FROM tb_user WHERE name<>"" ORDER BY name');

        $stm->execute();

        if($stm->rowCount()>=1){

            echo json_encode($stm->fetchAll(PDO::FETCH_ASSOC));

        }else{

            echo 0;

        }

        $pdo=null;

    }catch(PDOException $e){
        echo $e->getMessage();
    }