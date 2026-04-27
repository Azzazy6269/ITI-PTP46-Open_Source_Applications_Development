<?php
#delete
session_start();
if(!isset($_SESSION['email'])){
    header("Location: login.php");
}
$id= $_GET["id"];
if(isset($id)){
    require("DataBase.php");
    $db = new DataBase("localhost","root","","iti_php_lab3",3306);
    $db->delete($id);
    echo"<h1>deleted successfully</h1>";
}else{
    echo"<h1>failed to delete</h1>";
}

?>