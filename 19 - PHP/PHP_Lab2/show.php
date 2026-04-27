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
<?php
    $lineNumber = -1;
    echo "<table>";
    if(file_exists("data.txt")){
        $file=fopen("data.txt","r");  
        while(($data = fgetcsv($file, 0, "|")) !== FALSE){
            $lineNumber++;
            echo "<tr>";
            foreach($data as $attribute){
                echo "<td>" . htmlspecialchars($attribute) . "</td>";
            }
            if($lineNumber != 0){
                echo '<td><a href="delete.php?line=' .$lineNumber. '">delete</a></td>';
                echo '<td><a href="profile.php?line=' .$lineNumber. '">show profile</a></td>';
            }
                
            echo "</tr>";
        }
    }
    echo "</table>";
      
?>
</body>
</html>

