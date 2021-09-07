<?php

    require_once '../conn.php';

    $id = addslashes($_POST['id']);

    if(isset($id)){
        try{

            $stm= $pdo->prepare('DELETE FROM tb_user WHERE id = :id_usr');

            $stm->bindValue(':id_usr',$id);

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