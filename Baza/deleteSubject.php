<?php
header('Access-Control-Allow-Origin: *');
require "DataBase.php";
$db = new DataBase();

if (isset($_GET['id'])) {
    if ($db->dbConnect()) {
        if ($db->deleteSubject("subject", $_GET['id'])) {
            echo "1";
        } else echo "0";
    } else echo "-1";
} else echo "-2";

?>