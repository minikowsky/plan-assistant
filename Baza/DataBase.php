<?php
require "DataBaseConfig.php";

class DataBase
{
    public $connect;
    public $data;
    private $sql;
    protected $servername;
    protected $username;
    protected $password;
    protected $databasename;

    public function __construct()
    {
        $this->connect = null;
        $this->data = null;
        $this->sql = null;
        $dbc = new DataBaseConfig();
        $this->servername = $dbc->servername;
        $this->username = $dbc->username;
        $this->password = $dbc->password;
        $this->databasename = $dbc->databasename;
    }

    function dbConnect()
    {
        $this->connect = mysqli_connect($this->servername, $this->username, $this->password, $this->databasename);
        return $this->connect;
    }

    function logIn($table, $login, $password)
    {
        $this->sql = "select * from " . $table . " where login = '$login'";

        $result = mysqli_query($this->connect, $this->sql);
        $row = mysqli_fetch_assoc($result);
		
		$solutions = array();

        if (mysqli_num_rows($result) != 0) {
            $dblogin = $row['login'];
            $dbpassword = $row['password'];
            if ($dblogin == $login && $password == $dbpassword) {
                $solutions[] = $row;
            }
        }
		
        return $solutions;
    }

    function signUp($table, $login, $password)
    {
        $this->sql =
            "INSERT INTO " . $table . " (login, password) VALUES ('$login','$password')";

        if (mysqli_query($this->connect, $this->sql)) {
            return true;
        } else return false;
    }
	
	function deleteUser($table, $login)
    {
        $this->sql =
            "DELETE FROM " . $table . " where login = '$login'";

        if (mysqli_query($this->connect, $this->sql)) {
            return true;
        } else return false;
    }
	
	function editUserTheme($table, $login, $theme){
		
		$this->sql = "UPDATE " . $table . " SET theme = '$theme' where login = '$login'";
		 
		 if (mysqli_query($this->connect, $this->sql)) {
            return true;
        } else return false;
	}
	
	function addSubject($table, $id, $name, $day, $start_time, $end_time, $note, $login, $color)
	{
		$this->sql =
            "INSERT INTO " . $table . " (id,name, day, start_time, end_time, note, login, color) VALUES 
			('$id','$name', '$day', '$start_time', '$end_time', '$note', '$login', '$color')";
			
		if (mysqli_query($this->connect, $this->sql)) {
            return true;
        } else return false;
	}
	
	function deleteSubject($table, $id)
    {
        $this->sql =
            "DELETE FROM " . $table . " where id = '$id'";

        if (mysqli_query($this->connect, $this->sql)) {
            return true;
        } else return false;
    }
	
	function userSubjects($table, $login)
	{
		$this->sql = "select * from " . $table . " where login = '$login'";
		
		$result = mysqli_query($this->connect, $this->sql);
		
		$solutions = array();
		
		if ($result) {	
			while ($row = mysqli_fetch_assoc($result)) {
				$solutions[] = $row;
			}	
        }
		return $solutions;
	}

    function getSubject($table, $login, $id)
	{
		$this->sql = "select * from " . $table . " where login = '$login' and id = '$id'";
		
		$result = mysqli_query($this->connect, $this->sql);
		
		$solutions = array();
		
		if ($result) {	
			while ($row = mysqli_fetch_assoc($result)) {
				$solutions[] = $row;
			}	
        }
		return $solutions;
	}
	
	function editSubject($table, $id, $name, $day, $start_time, $end_time, $note, $color){
		
		$this->sql = "UPDATE " . $table . " SET name = '$name', day= '$day', start_time='$start_time', end_time='$end_time',
		 note='$note', color='$color' where id = '$id'";
		 
		 if (mysqli_query($this->connect, $this->sql)) {
            return true;
        } else return false;
	}
}

?>
