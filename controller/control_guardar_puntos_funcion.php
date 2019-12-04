<?php

include '../database/conn.php';
// header("Content-Type: application/json;");

session_start();
$id_pp = $_SESSION['id_pp'];

$funcion = $_POST['funcion'];
$nombre_punto_funcion = $_POST['nombre_punto_funcion'];
$descripcion_punto_funcion = $_POST['descripcion_punto_funcion'];
$complejidad = $_POST['complejidad'];

$query_guardar_puntos_funcion = "insert into puntos_funcion (nombre_puntos_funcion, descripcion_puntos_funcion, id_clasificacion, id_complejidad,id_pp) values('". $nombre_punto_funcion . "','" . $descripcion_punto_funcion . "'," . $funcion . "," .$complejidad . "," .  $id_pp['id_pp'] . ")";
// echo $query_guardar_puntos_funcion;
if (!pg_query($conn,$query_guardar_puntos_funcion)) {
  echo "No se pudo guardar el punto de funcion";
}else{
  echo "punto de funcion guardado";
}

// echo json_encode(Array(
//     'funcion'=>$funcion,
//     'nombre_punto_funcion'=>$nombre_punto_funcion,
//     'descripcion_punto_funcion'=> $descripcion_punto_funcion,
//     'complejidad'=>$complejidad,
//     'id_pp' => $id_pp
//   )
// );

 ?>
