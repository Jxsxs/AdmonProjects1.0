<?php

include '../database/conn.php';
header("Content-Type: application/json;");

$queryComplejidad = "select * from complejidad";
$result_query = pg_query($conn, $queryComplejidad) or die("Error en la consulta");
$complejidad = array();
if (!$result_query) {
    return -1;
} else {
    while ($comple = pg_fetch_assoc($result_query)) {
          $complejidad[] = $comple;
    }
}

echo json_encode(
  Array(
    'complejidad' => $complejidad
    )
);

 ?>
