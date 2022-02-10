<?php
header('Access-Control-Allow-Origin: *');
require "DataBase.php";
$db = new DataBase();

if (isset($_GET['login']) && isset($_GET['theme'])) {
    if ($db->dbConnect()) {
        if ($db->editUserTheme("user",$_GET['login'], $_GET['theme'])) {
            echo "1";
        } else echo "0";
    } else echo "-1";
} else echo "-2";

?>