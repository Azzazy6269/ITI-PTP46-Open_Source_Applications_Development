<?php
session_start();
    if(!isset($_SESSION['email'])){
        header("Location: login.php");
    }
require("connection.php");

$id = $_GET["id"];

if(!$id){
    die("Invalid ID");
}
$sql = "SELECT * FROM users WHERE id = $id";
$result = $connection->query($sql);
$user = $result->fetch_assoc();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST['first_name'];
    $last_name  = $_POST['last_name'];
    $department = $_POST['department'];
    $country    = $_POST['country'];
    $address    = $_POST['address'];
    $gender     = $_POST['gender'];
    $email      = $_POST['email'];

    $sql = "UPDATE users SET first_name = '$first_name', last_name = '$last_name', department = '$department', country = '$country', address = '$address', 
            gender = '$gender', email = '$email' WHERE id = $id";
    $connection->query($sql);
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