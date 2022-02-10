<?php
header('Access-Control-Allow-Origin: *');
require "DataBase.php";
$db = new DataBase();

if (isset($_GET['login']) && isset($_GET['id'])) {
    if ($db->dbConnect()) {
		echo json_encode($db->getSubject("subject", $_GET['login'],$_GET['id']));
    } else echo "-1";
} else echo "-2";

?>