<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "angular";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
header("Access-Control-Allow-Origin:*");
header("Acess-Control-Allow-Methods:PUT,GET,POST");
header("Access-Control-Allow-Headers:Origin,X-Requested-With,Content-Type,Accept");
$postdata=file_get_contents("php://input");
$request= json_decode($postdata);
$name=mysqli_real_escape_string($conn,trim($request->data->name));
$email=mysqli_real_escape_string($conn,trim($request->data->email));
$psw=mysqli_real_escape_string($conn,trim($request->data->psw));


$sql = "INSERT INTO tbl_register (name,email,password)
VALUES ('name', 'email','psw')";

if (mysqli_query($conn,$sql)) {
    http_response_code(201);
    $student=[
        'name' =>$name,
        'email'=>'$email',
        'password'=>'$password',
        'id' =>mysqli_insert_id($conn)
    ];
    echo json_encode(['data'=>$student]);
} else {
    http_response_code(422);
}
?>