<?php

include '../database/conn.php';
$nombreCarpeta = "";
if ($_SESSION["id_usuario"]) {
    $id_usuario = $_SESSION["id_usuario"];
    if (isset($_POST["btnGuardarCarpeta"])) {
        $nombreCarpeta = $_POST["txtNombreCarpeta"];
        $query_valida = "select nombre_carpeta from carpetas where nombre_carpeta = '{$nombreCarpeta}'";
        $result_query = pg_query($conn, $query_valida) or die("Error en la consulta");
        if (!$result_query) {
            return -1;
        } else {
            $carpeta = pg_fetch_array($result_query);
            if ($carpeta == null) {
                $query_registro = "insert into carpetas (nombre_carpeta,id_user) values ('{$nombreCarpeta}','{$id_usuario}')";
                $result_insert = pg_query($conn, $query_registro);
                if (!$result_query) {
                    return -1;
                } 
            } else {
                $nombreCarpeta = $nombreCarpeta . "-cp";
                $query_registro = "insert into carpetas (nombre_carpeta,id_user) values ('{$nombreCarpeta}','{$id_usuario}')";
                $result_insert = pg_query($conn, $query_registro);
            }
        }
    }
} else {
    echo 'no hay nada en la variable';
}
