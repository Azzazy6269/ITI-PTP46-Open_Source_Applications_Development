<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $email=$_POST['email'];
        $password=$_POST['password'];

        require("DataBase.php");
        $db = new DataBase("localhost","root","","iti_php_lab3",3306);
        $result = $db->login($email,$password);
        $user = $result->fetch_assoc();

        if($result->num_rows > 0){
            $user = $result->fetch_assoc();
            session_start();
            $_SESSION['email'] =$email;
            header("Location: showAll.php");
        }else{
            echo"<div class='error-msg'><h3>failed to login</h3></div>";
        }
    }
?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تسجيل الدخول</title>
    <style>
        /* CSS لتجميل الصفحة */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0;
        }

        .login-card {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            width: 100%;
            max-width: 400px;
            box-sizing: border-box;
        }

        h2 {
            text-align: center;
            color: #4a4a4a;
            margin-bottom: 30px;
        }

        input[type="text"] {
            width: 100%;
            padding: 12px 15px;
            margin: 10px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-sizing: border-box;
            font-size: 16px;
            transition: border 0.3s;
        }

        input[type="text"]:focus {
            border: 1px solid #764ba2;
            outline: none;
        }

        button {
            width: 100%;
            background-color: #764ba2;
            color: white;
            padding: 14px 20px;
            margin: 20px 0 0 0;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            transition: background 0.3s;
        }

        button:hover {
            background-color: #5a3782;
        }

        .error-msg {
            background-color: #ffebee;
            color: #c62828;
            padding: 1px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            width: 100%;
            max-width: 400px;
            box-sizing: border-box;
        }

        label {
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>

    <div class="login-card">
        <h2>Welcome Back</h2>
        <form method="POST">
            <label>Email Address</label>
            <input type="text" name="email" placeholder="Enter your email">
            
            <label>Password</label>
            <input type="text" name="password" placeholder="Enter your password">
            
            <button type="submit">Login</button>
        </form>
    </div>

</body>
</html>