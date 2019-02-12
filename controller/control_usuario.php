<?php
include "../database/conn.php";
session_start();
if ($_SESSION["id_usuario"]) {
  $id_usuario = $_SESSION["id_usuario"];
  $query_nombre_usuario = "select nombre from usuarios where id_user = " . $id_usuario;
  $result_query_nombre = pg_query($conn,$query_nombre_usuario) or die ("No se realizo la consulta");
  $nombre_usuario = pg_fetch_assoc($result_query_nombre);
  echo $nombre_usuario["nombre"];
}


 ?>
