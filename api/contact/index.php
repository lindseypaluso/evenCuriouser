<?php
include_once('classes/sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if ( empty($_POST["name"]) && empty($_POST["email"]) ) {
    echo json_encode(
        [
            "sent" => false,
            "message" => $SendMessageEmptyerrorMessage
        ]
    );
    exit();
}

if ($_POST)
    {

        http_response_code(200);
        $subject = "Email from: " . $_POST["name"];
        // $to = "evencuriouser@gmail.com";
        $from = $_POST["email"];

        $message = $_POST["message"];

        $sendEmail = new Sender($adminEmail, $from, $subject, $message);
        $sendEmail -> send();

    } else {
        echo json_encode(
            [
                "sent" => false,
                "message" => $SendMessageFailederrorMessage
            ]
        );
    }    