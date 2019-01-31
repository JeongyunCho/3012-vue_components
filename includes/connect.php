<?php

    $user = "root";
    $pw = "root";

    try {
        $conn = new PDO("mysql:host=localhost;dbname=tesmpusers", $user, $pw);
        //var_dump($conn);
    } catch(PDOException $exception) {
        echo 'connection error! sumpin done broke!!' . $exception->getMessage();
    }

?>