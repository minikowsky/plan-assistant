<?php
header('Access-Control-Allow-Origin: *');
require "DataBase.php";
$db = new DataBase();

if (isset($_GET['id']) && isset($_GET['name']) && isset($_GET['day']) && isset($_GET['start_time']) && isset($_GET['end_time']) && isset($_GET['note']) && isset($_GET['login']) && isset($_GET['color'])) {
    if ($db->dbConnect()) {
        if ($db->addSubject("subject",$_GET['id'], $_GET['name'], $_GET['day'], $_GET['start_time'], $_GET['end_time'], $_GET['note'], $_GET['login'], $_GET['color'])) {
            echo "1";
        } else echo "0";
    } else echo "-1";
} else echo "-2";

?>