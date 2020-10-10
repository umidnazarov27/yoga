<?php 

$json = file('php://input');

if (file_put_contents("data.json", $json, FILE_APPEND))
    echo "Success";
else
    echo "fail";

if (file_put_contents("data.json", "\r\n", FILE_APPEND))
    echo "Success";
else
    echo "fail";