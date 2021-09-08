<?php

    $usr = addslashes($_POST['usr']);
    $username = addslashes($_POST['username']);

    if(isset($usr)){

        require_once '../conn.php';

        try{

            $stm= $pdo->prepare('INSERT INTO tb_homeactivities (id_reg,usr_reg,username,date_reg) VALUES (NULL,:user,:username,NOW())');
            $stm ->bindValue(':user',$usr);
            $stm ->bindValue(':username',$username);

            $stm->execute();

            if($stm->rowCount()>=1){

                echo 1;

            }else{

                echo 0;

            }

            $pdo=null;

        }catch(PDOException $e){
            echo $e->getMessage();
        }

    }