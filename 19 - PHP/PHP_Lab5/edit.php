<?php
session_start();
    if(!isset($_SESSION['email'])){
        header("Location: login.php");
    }

$id = $_GET["id"];

if(!$id){
    die("Invalid ID");
}

require("DataBase.php");
$db = new DataBase("localhost","root","","iti_php_lab3",3306);
$user = $db->selectById($id);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST['first_name'];
    $last_name  = $_POST['last_name'];
    $department = $_POST['department'];
    $country    = $_POST['country'];
    $address    = $_POST['address'];
    $gender     = $_POST['gender'];
    $email      = $_POST['email'];

    
    $result = $db->edit($first_name,$last_name,$department,$country,$address,$gender,$email,$id);
    header("Location: showAll.php");
}
?>

<form method="POST">
    <input type="text" name="first_name" value="<?= $user['first_name'] ?>"><br><br>
    <input type="text" name="last_name" value="<?= $user['last_name'] ?>"><br><br>
    <input type="text" name="department" value="<?= $user['department'] ?>"><br><br>
    <input type="text" name="country" value="<?= $user['country'] ?>"><br><br>
    <input type="text" name="address" value="<?= $user['address'] ?>"><br><br>

    <select name="gender">
        <option value="male" <?= $user['gender']=='male'?'selected':'' ?>>Male</option>
        <option value="female" <?= $user['gender']=='female'?'selected':'' ?>>Female</option>
    </select><br><br>

    <input type="email" name="email" value="<?= $user['email'] ?>"><br><br>

    <button type="submit">Update</button>
</form>