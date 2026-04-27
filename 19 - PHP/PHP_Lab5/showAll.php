<?php
session_start();
if (!isset($_SESSION['email'])) {
    header("Location: login.php");
    exit(); // دايماً استخدم exit بعد الـ header
}

require("DataBase.php");
$db = new DataBase("localhost", "root", "", "iti_php_lab3", 3306);
$result = $db->showAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users Dashboard</title>
    <style>
        body { font-family: sans-serif; background-color: #f4f4f9; padding: 20px; }
        .user-card { 
            background: white; 
            border-radius: 8px; 
            padding: 20px; 
            margin-bottom: 20px; 
            box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
            border-left: 5px solid #007bff;
        }
        .user-card h3 { margin: 5px 0; color: #333; font-size: 1.1rem; }
        .user-card img { 
            border-radius: 8px; 
            margin: 10px 0; 
            border: 1px solid #ddd;
        }
        .actions { margin-top: 15px; }
        .btn-edit { color: #007bff; text-decoration: none; font-weight: bold; margin-right: 20px; }
        .btn-delete { color: #dc3545; text-decoration: none; font-weight: bold; }
        .btn-edit:hover, .btn-delete:hover { text-decoration: underline; }
    </style>
</head>
<body>

    <h1 style="text-align: center;">Users List</h1>
    <hr>

    <div class="container">
        <?php while($user = $result->fetch_assoc()): ?>
            <div class="user-card">
                <h3><strong>First Name:</strong> <?php echo $user['first_name']; ?></h3>
                <h3><strong>Last Name:</strong> <?php echo $user['last_name']; ?></h3>
                <h3><strong>Department:</strong> <?php echo $user['department']; ?></h3>
                <h3><strong>Country:</strong> <?php echo $user['country']; ?></h3>
                <h3><strong>Address:</strong> <?php echo $user['address']; ?></h3>
                <h3><strong>Gender:</strong> <?php echo $user['gender']; ?></h3>
                <h3><strong>Email:</strong> <?php echo $user['email']; ?></h3>
                
                <?php $imagePath = $user["profile_image"]; ?>
                <img src="./<?php echo $imagePath; ?>" style="max-width:200px;" alt="Profile Image" />

                <div class="actions">
                    <?php $id = $user['id']; ?>
                    <a href="edit.php?id=<?php echo $id; ?>" class="btn-edit">Edit User</a>
                    <a href="delete.php?id=<?php echo $id; ?>" class="btn-delete" onclick="return confirm('Are you sure?')">Delete User</a>
                </div>
            </div>
        <?php endwhile; ?>
    </div>

</body>
</html>