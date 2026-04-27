<?php
#delete
session_start();
if(!isset($_SESSION['email'])){
        header("Location: login.php");
    }
    require("connection.php");
    $id= $_GET["id"];
    if(isset($id)){
        $sql = "Delete from users where id={$id}";
        $stmt = $connection->prepare($sql);
        $stmt->execute();
        echo"<h1>deleted successfully</h1>";
    }else{
        echo"<h1>failed to delete</h1>";
    }
?>