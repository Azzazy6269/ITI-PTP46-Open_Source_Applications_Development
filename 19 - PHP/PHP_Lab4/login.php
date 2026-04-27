<?php
    
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        require("connection.php");
        $email=$_POST['email'];
        $password=$_POST['password'];
        $sql="SELECT * FROM users WHERE email='$email' AND password='$password'";
        $result = $connection->query($sql);
        $user = $result->fetch_assoc();

        if($result->num_rows > 0){
            $user = $result->fetch_assoc();
            session_start();
            $_SESSION['email'] =$email;
            header("Location: showAll.php");
        }else{
            echo"<h3>failed to login</h3>";
        }

    }
?>

<form method="POST">
    <input type="text" name="email"><br><br>
    <input type="text" name="password">"><br><br>
    <button type="submit">login</button>
</form>