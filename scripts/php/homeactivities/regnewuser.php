<?php

    $user_name = addslashes($_POST['user_name']);
    $user_username = addslashes($_POST['user_username']);
    $user_password = addslashes($_POST['user_password']);

    if(isset($user_name)  && isset($user_username) && isset($user_password)){

        require_once '../conn.php';

        try{

            $stm= $pdo->prepare('INSERT INTO tb_user (name,user_name,user_password) VALUES (:name,:username,:userpassword)');
            $stm ->bindValue(':name',$user_name);
            $stm ->bindValue(':username',$user_username);
            $stm ->bindValue(':userpassword',md5(md5($user_password)));

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