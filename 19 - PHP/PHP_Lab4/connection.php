<?php
$connection = new mysqli("localhost","root","","iti_php_lab3",3306);
    if($connection->connect_error){
        die("connection failed" . $connection->connect_error);
    }else{
            echo "<h1>connected successfully to mysql</h1>";

    }
?>