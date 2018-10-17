<?php

$host = "localhost";
$user = "postgres";
$pass = "star2018";
$dbname = "AdmonProjects";

$conn = pg_connect("host=$host user=$user password=$pass dbname=$dbname");
// if(!$conn)
//        echo "<p><i>No me conecte</i></p>";
//    else
//        echo "<p><i>Me conecte</i></p>";
?>