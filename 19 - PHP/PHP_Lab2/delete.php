<?php
$deleteLine = (int)$_GET['line'];
$lines = file("data.txt");  
unset($lines[$deleteLine]);     
file_put_contents("data.txt", implode("", $lines));
echo "<h1>Row has been deleted</h1>";
?>