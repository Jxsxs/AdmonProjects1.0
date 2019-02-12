<?php
include '../database/conn.php';
header("Content-Type: application/json;");
session_start();
if ($_SESSION["id_usuario"]) {

    $carpetas = array();
    $id_usuario = $_SESSION["id_usuario"];
    $queryCarpetas = "select * from carpetas where id_user=" . $id_usuario;
    $result_query = pg_query($conn, $queryCarpetas) or die("Error en la consulta");
    if (!$result_query) {
        return -1;
    } else {
       // echo 'id_user: ' . $id_usuario . '<br>';
        while ($carpeta = pg_fetch_assoc($result_query)) {
            $carpetas[] = $carpeta;
        }
    }
    echo json_encode($carpetas);
}


 ?>
