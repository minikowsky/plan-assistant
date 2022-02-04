<?php
header('Access-Control-Allow-Origin: *');
require "DataBase.php";
$db = new DataBase();

if (isset($_GET['login'])) {
    if ($db->dbConnect()) {
        if ($db->deleteUser("user", $_GET['login'])) {
            echo "1";
        } else echo "0";
    } else echo "-1";
} else echo "-2";

?>