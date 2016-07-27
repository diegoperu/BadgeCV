<?php

$url="https://www.badgecraft.eu/api/v1/projects";




    $ch = curl_init();
    $headers = array(
    'charset=utf-8',
    'Content-Type: application/json',
	'auth-token: '. $_GET["auth"] .''
    );
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Timeout in seconds
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);

    $resp = curl_exec($ch);
	curl_close($ch);
    echo $resp;

?>