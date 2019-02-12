<?php

include '../database/conn.php';
session_start();
$nombreCarpeta = "";
if ($_SESSION["id_usuario"]) {
    $id_usuario = $_SESSION["id_usuario"];
    $nombreCarpeta = $_POST["nombre_carpeta"];
    $query_valida = "select nombre_carpeta from carpetas where nombre_carpeta = '$nombreCarpeta'";
    $result_query = pg_query($conn, $query_valida) or die("Error en la consulta");
    if (!$result_query) {
        return -1;
    } else {
      $carpeta = pg_fetch_array($result_query);
      if ($carpeta == null) {
        $query_registro = "insert into carpetas (nombre_carpeta,id_user) values ('$nombreCarpeta','$id_usuario')";
        $result_insert = pg_query($conn, $query_registro);
        if (!$result_insert) {
            return -1;
        }else {
          echo "Se agrego la carpeta";
        }
      } else {
        // $nombreCarpeta = $nombreCarpeta . "-cp";
        // $query_registro = "insert into carpetas (nombre_carpeta,id_user) values ('$nombreCarpeta','$id_usuario')";
        // $result_insert = pg_query($conn, $query_registro);
        // if (!$result_insert) {
        //     return -1;
        // }else {
          echo "Ya existe la carpeta";
        // }
      }
    }
} else {
    echo 'no hay nada en la variable';
}
