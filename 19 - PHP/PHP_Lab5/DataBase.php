<?php
class DataBase{
    private $host; //"localhost"
    private $user; //"root"
    private $password; //""
    private $DB_name; //"iti_php_lab3"
    private $port; //3306
    private $connection;

    public function __construct(string $_host, string $_user , string $_password , string $_DB_name , int $_port){
        $this->host = $_host;
        $this->user = $_user;
        $this->password = $_password;
        $this->DB_name = $_DB_name;
        $this->port = $_port;

        $this->connectToDB();
    }

    public function setHost(string $_host){
        $this->host = $_host;
        $this->connectToDB();
    }

    public function setUser(string $_user){
        $this->user = $_user;
        $this->connectToDB();
    }

    public function setPassword(string $_password){
        $this->password = $_password;
        $this->connectToDB();
    }

    public function setDB_name(string $_DB_name){
        $this->DB_name = $_DB_name;
        $this->connectToDB();
    }

    public function setPort(int $_port){
        $this->port = $_port;
        $this->connectToDB();
    }

    public function getHost() : string{
        return $this->host;
    }

    public function getUser() : string{
        return $this->user;
    }

    public function getPassword() : string{
        return $this->password;
    }

    public function getDB_name() : string{
        return $this->DB_name;
    }

    public function getPort() : int{
        return $this->port;
    }

    private function connectToDB(){
        $this->connection = new mysqli($this->host,$this->user,$this->password,$this->DB_name,$this->port);
        if($this->connection->connect_error){
            die("connection failed" . $connection->connect_error);
        }else{
        echo "<h1>connected successfully to mysql</h1>";
        }
    }

    public function showAll(){
        $sql = "SELECT * FROM users order by id desc";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result;
    }

    public function Save(string $first_name ,string $last_name ,string $department,string $country ,string $address ,string $gender ,string $email ,string $password ,string $destination){
        $sql = "INSERT INTO users (first_name,last_name,department,country,address,gender,email,password,profile_image) VALUES('$first_name','$last_name','$department','$country','$address','$gender','$email','$password','$destination')";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute();
    }

    public function login(string $email , string $password){
        $sql="SELECT * FROM users WHERE email='$email' AND password='$password'";
        $result = $this->connection->query($sql);
        return $result;
    }

    public function edit(string $first_name,string $last_name,string $department,string $country,string $address,string $gender ,string $email ,int $id){
        $sql = "UPDATE users SET first_name = '$first_name', last_name = '$last_name', department = '$department', country = '$country', address = '$address', gender = '$gender', email = '$email' WHERE id = $id";
        $this->connection->query($sql);
    }

    public function selectById(int $id){
        $sql = "SELECT * FROM users WHERE id = $id";
        $result = $this->connection->query($sql);
        $user = $result->fetch_assoc();
        return $user;
    }

    public function delete(int $id){
        $sql = "Delete from users where id={$id}";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute();
    }
}

?>