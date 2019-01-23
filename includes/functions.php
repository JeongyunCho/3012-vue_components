<?php
    include 'connect.php';

    function get_single_user($pdo, $user) {
     
        $query = "select * from users where id = '$user'";
        $get_user = $pdo->query($query);
        $results = array();

        while($row = $get_user->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return $results;
    }

    function get_all_users($pdo){
        
        $query = "select *  users";
        $get_users = $pdo->query($query);
        $results = array();

        while($row = $get_users->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return $results;
    }
?>