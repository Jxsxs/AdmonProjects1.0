<?php

include '../database/conn.php';
header("Content-Type: application/json;");

$queryFunciones = "select * from clasificacion";
$result_query = pg_query($conn, $queryFunciones) or die("Error en la consulta");
$funciones = array();
if (!$result_query) {
    return -1;
} else {
    while ($funcion = pg_fetch_assoc($result_query)) {
          $funciones[] = $funcion;
    }
}

echo json_encode(
  Array(
    'funciones' => $funciones
    )
);

 ?>
