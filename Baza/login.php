<?php
header('Access-Control-Allow-Origin: *');
require "DataBase.php";
$db = new DataBase();

if (isset($_GET['login']) && isset($_GET['password'])) {
    if ($db->dbConnect()) {
		echo json_encode ($db->logIn("user", $_GET['login'], $_GET['password']));
    } else echo "-1";
} else echo "-2";

?>
