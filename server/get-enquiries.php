<?php
    header('Access-Control-Allow-Origin: *'); 
    $enquiriesList = file_get_contents('../web/src/components/json/enquiries.json');
    header('Content-Type: application/json');
    echo ($enquiriesList);
?>