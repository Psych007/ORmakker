<?php
$email = $_POST['email']
$password = $_POST['password']
$Cpassword = $_POST['Cpassword']

<!-- data base connection -->
$conn = new mysqli('localhost','root','','test');
if($conn->connect_error){
    die('connection failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(email,password,Cpassword)values(?,?,?)");
    $stmt->bind_param("sss",$email,password,Cpassword);
    $stmt->execute();
    echo"registration sucessfully.."
    $stmt->close();
    $conn->close();
}
?>