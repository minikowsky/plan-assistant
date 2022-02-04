<?php
header('Access-Control-Allow-Origin: *');
require "DataBase.php";
$db = new DataBase();

if (isset($_GET['login']) && isset($_GET['password'])) {
    if ($db->dbConnect()) {
        if ($db->signUp("user", $_GET['login'], $_GET['password'])) {
            echo "1";
        } else echo "0";
    } else echo "-1";
} else echo "-2";

?>