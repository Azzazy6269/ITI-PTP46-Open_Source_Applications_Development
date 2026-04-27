<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors =[];
    $emailPattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
    $skills = "";
    $destination = "uploads/";

    if(empty($_POST['first_name'])){
        array_push($errors,"first name is required");
    }elseif(strlen($_POST['first_name']) < 3){
        array_push($errors,"first name minimum length = 3");
    }elseif(strlen($_POST['first_name']) > 20){
        array_push($errors,"first name maximum length = 20");
    }


    if(empty($_POST['last_name'])){
        array_push($errors,"last name is required");
    }elseif(strlen($_POST['last_name']) < 3){
        array_push($errors,"last name minimum length = 3");
    }elseif(strlen($_POST['last_name']) > 20){
        array_push($errors,"last name maximum length = 20");
    }


    if(empty($_POST['department'])){
        array_push($errors,"department is required");
    }elseif(strlen($_POST['department']) < 2){
        array_push($errors,"department minimum length = 2");
    }elseif(strlen($_POST['department']) > 80){
        array_push($errors,"department maximum length = 80");
    }


    if(empty($_POST['country'])){
        array_push($errors,"country is required");
    }


    if(empty($_POST['country'])){
        array_push($errors,"country is required");
    }


    if(empty($_POST['address'])){
        array_push($errors,"address is required");
    }


    if(empty($_POST['gender'])){
        array_push($errors,"gender is required");
    }


    if(empty($_POST['password'])){
        array_push($errors,"password is required");
    }    


    
    if(empty($_POST['email'])){
        array_push($errors,"email is required");
    }elseif(!preg_match($emailPattern,$_POST['email'])){
        array_push($errors,"email is in unValid format");
    } 


    if(!empty($_FILES["profile_image"])){
        $profile_image = $_FILES["profile_image"];
        $profile_image_name = $profile_image["name"] ;
        $destination = "uploads/" . $profile_image_name;
        $profile_image_tmp_name = $profile_image["tmp_name"] ;
        move_uploaded_file($profile_image_tmp_name,$destination);
    }    

    $connection = new mysqli("localhost","root","","iti_php_lab3",3306);
    if($connection->connect_error){
        die("connection failed" . $connection->connect_error);
    }else{
            echo "<h1>connected successfully to mysql</h1>";

    }

    if(count($errors)>0){
        $errors = json_encode($errors);
        header("location: index.php?errors=" . urlencode($errors));
    }else{
        $first_name = $_POST['first_name'];
        $last_name  = $_POST['last_name'];
        $department = $_POST['department'];
        $country    = $_POST['country'];
        $address    = $_POST['address'];
        $gender     = $_POST['gender'];
        $email      = $_POST['email'];
        $password   = $_POST['password'];
        $skills     = " " ;
        $image      = $_FILES['profile_image'] ?? null;
        if(isset($_POST['skills'])){
            foreach($_POST['skills'] as $skill){
                $skills .= $skill . " ";
        }
        }else{
            $skills = "UnKnown";
        }
        echo "<h1>data validated</h1>";
        $sql = "INSERT INTO users (first_name,last_name,department,country,address,gender,email,password,skills,profile_image) VALUES('$first_name','$last_name','$department','$country','$address','$gender','$email','$password','$skills','$destination')";
        $stmt = $connection->prepare($sql);
        $stmt->execute();
        echo "<h1>Data inserted in users table</h1>";
        echo '<a href="showFromMySQL.php">show data</a>';    
        
    }

}

?>