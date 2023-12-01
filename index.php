<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type,
//         Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

$userName = $data->useName;
$email = $data->email;
$password = $data->password;

$con = mysqli_connect("localhost", "root", "", "miniblog");

$sql = "insert into employee(userName, email, password) values('$userName', '$email', '$password')";

$response = array();

// $result = mysqli_query($con, $sql);
if($result){
    $response['data']=array(
        'status'=>'valid'
    );
    echo json_encode($response);
} else {
    $response['data']=array(
        'status'=>'invalid'
    );
    echo json_encode($response);
};
?>