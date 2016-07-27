<?php

$curl = curl_init();
$data = array("username" => "username", "password" => "password");                                                                       
$data_string = json_encode($data);  

curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'https://www.badgecraft.eu/api/v1/auth/password',
    CURLOPT_USERAGENT => 'POLIMI Badge',
    CURLOPT_CUSTOMREQUEST => 'POST',
	CURLOPT_POSTFIELDS => $data_string,
    CURLOPT_HTTPHEADER => array(                                                                          
    'Content-Type: application/json',                                                                                
    'Content-Length: ' . strlen($data_string))
));
// Send the request & save response to $resp
$resp = curl_exec($curl);
// Close request to clear up some resources
curl_close($curl);
//echo var_dump($resp);
echo $resp;

?>