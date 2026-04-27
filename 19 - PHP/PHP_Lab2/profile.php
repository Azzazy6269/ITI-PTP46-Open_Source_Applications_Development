<?php
$selectedLine = (int)$_GET['line'];
$lines = file("data.txt");  
$profile=$lines[$selectedLine];
$attributes = explode('|', $profile);
foreach($attributes as $attribute){
    echo "<p>" . htmlspecialchars($attribute) . "</p>";
}
?>