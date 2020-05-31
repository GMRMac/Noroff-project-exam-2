<?php
    header('Access-Control-Allow-Origin: *'); 
    $contactList = file_get_contents('../web/src/components/json/contact.json');
    header('Content-Type: application/json');
    echo ($contactList);
?>