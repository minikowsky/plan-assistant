<?php
header('Access-Control-Allow-Origin: *');
require "DataBase.php";
$db = new DataBase();

if (isset($_GET['login'])) {
    if ($db->dbConnect()) {
		echo json_encode($db->userSubjects("subject", $_GET['login']));
    } else echo "-1";
} else echo "-2";

?>