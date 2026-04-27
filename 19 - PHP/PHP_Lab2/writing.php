<?php
#var_dump($_POST);
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


        if(!file_exists("data.txt")){
            $file = fopen("data.txt","a");
            fputcsv($file,[
                "first_name","last_name","department","country","address","gender","skills"
            ],'|');
            fclose($file);
        }
        $file = fopen("data.txt","a");
        fputcsv($file,[
            $first_name,$last_name,$department,$country,$address,$gender,$skills
        ],'|');
        fclose($file);

        echo "<h1>successfully added</h1>";
}

?>