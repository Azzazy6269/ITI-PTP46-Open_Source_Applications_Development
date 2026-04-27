<?php
if(!isset($_SESSION['email'])){
        header("Location: login.php");
    }
    $connection = new mysqli("localhost","root","","iti_php_lab3",3306);
    if($connection->connect_error){
        die("connection failed" . $connection->connect_error);
    }else{
        echo "<h1>connected successfully to mysql</h1>";
    }
    $sql = "SELECT * FROM users ORDER BY id DESC LIMIT 1";
    $stmt = $connection->prepare($sql);
    $stmt->execute();

    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    var_dump($user);
    $imagePath = $user["profile_image"];
    echo "<img src='./$imagePath'/ >";

?>