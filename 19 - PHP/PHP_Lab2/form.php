<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Profile Data</title>
    <style>
        body { font-family: sans-serif; line-height: 1.6; padding: 20px; background: #f4f4f4; }
        .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); max-width: 500px; }
        h2 { color: #6366f1; border-bottom: 2px solid #eee; padding-bottom: 10px; }
        .label { font-weight: bold; color: #4b5563; }
    </style>
</head>
<body>

<div class="card">
    <?php
    // var_dump($_POST); 

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $first_name = $_POST['first_name'] ?? "Unknown";
        $last_name  = $_POST['last_name'] ?? "Unknown";
        $department = $_POST['department'] ?? "Unknown";
        $country    = $_POST['country'] ?? "Unknown";
        $address    = $_POST['address'] ?? "Unknown";
        $gender     = $_POST['gender'] ?? "Unknown";
        $password   = $_POST['password']?? "";
        $skills     = " " ;
        if(isset($_POST['skills'])){
            foreach($_POST['skills'] as $skill){
                $skills .= $skill . " ";
        }
        }else{
            $skills = "UnKnown";
        }     

        echo "<h2>Welcome, " . htmlspecialchars($first_name) . "!</h2>";
        echo "<p><span class='label'>Full Name:</span> " . htmlspecialchars($first_name . " " . $last_name) . "</p>";
        echo "<p><span class='label'>Department:</span> " . htmlspecialchars($department) . "</p>";
        echo "<p><span class='label'>Country:</span> " . htmlspecialchars($country) . "</p>";
        echo "<p><span class='label'>Address:</span> " . htmlspecialchars($address) . "</p>";
        echo "<p><span class='label'>Gender:</span> " . htmlspecialchars($gender) . "</p>";
        echo "<p><span class='label'>Skills:</span> " . htmlspecialchars($skills) . "</p>";
    }
    ?>
</div>

</body>
</html>

