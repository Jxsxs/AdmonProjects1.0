<?php

include '../database/conn.php';
header("Content-Type: application/json;");

$id_pp = $_POST["id_pp"];
$datos_objetivos = array();
$datos_alcances = array();
$datos_restricciones = array();
//========QUERYS=================
$query_proyecto = "select nombre_proyecto from plan_proyecto where id_pp =" . $id_pp;
$query_objetivos = "select desc_objetivo from objetivos where id_pp_fk = " . $id_pp;
$query_alcances = "select desc_alcances from alcances where id_pp_fk = " . $id_pp;
$query_restricciones = "select desc_restriccion from restricciones where id_pp_fk = " . $id_pp;
//==========================================

$result_query_proyecto = pg_query($conn, $query_proyecto) or die ("Error en la consulta del proyecto");
$result_query_objetivos = pg_query($conn, $query_objetivos) or die ("Error en la consulta a los objetivos");
$result_query_alcances = pg_query($conn, $query_alcances) or die("Error en la consulta a los alcances");
$result_query_res = pg_query($conn, $query_restricciones) or die ("Error en la consulta a las restricciones");

$titulo_proyecto = pg_fetch_assoc($result_query_proyecto);
if (!$result_query_proyecto) {
    return -1;
} else {
  while ($objetivo = pg_fetch_assoc($result_query_objetivos)) {
    $datos_objetivos[] = $objetivo;
  }
  while($alcance = pg_fetch_assoc($result_query_alcances)){
    $datos_alcances[] = $alcance;
  }
  while($restriccion = pg_fetch_assoc($result_query_res)){
    $datos_restricciones[] = $restriccion;
  }
  echo json_encode(Array(
      "titulo_proyecto"=>$titulo_proyecto["nombre_proyecto"],
      "objetivos"=>$datos_objetivos,
      "alcances"=>$datos_alcances,
      "restricciones"=>$datos_restricciones
    ));
}

?>
