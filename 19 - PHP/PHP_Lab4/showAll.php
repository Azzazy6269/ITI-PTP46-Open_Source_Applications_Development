<?php
session_start();
    if(!isset($_SESSION['email'])){
        header("Location: login.php");
    }
    require("connection.php");
    $sql = "SELECT * FROM users order by id desc";
    $stmt = $connection->prepare($sql);
    $stmt->execute();

    $result = $stmt->get_result();
    while($user = $result->fetch_assoc()){
        echo"<h3>first name : {$user['first_name']}</h3>";
        echo"<h3>last name : {$user['last_name']}</h3>";
        echo"<h3>department : {$user['department']}</h3>";
        echo"<h3>country : {$user['country']}</h3>";
        echo"<h3>address : {$user['address']}</h3>";
        echo"<h3>gender : {$user['gender']}</h3>";
        echo"<h3>email : {$user['email']}</h3>";
        $imagePath = $user["profile_image"];
        echo "<img src='./{$imagePath}' style='max-width:250px;' />";
        $id = $user['id'];
        echo "<a href='edit.php?id={$id}' style='padding:50px;'>edit</a>"; 
        echo "<a href='delete.php?id={$id}'>delete</a>"; 
    }

?>