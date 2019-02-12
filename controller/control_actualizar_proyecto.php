<?php
include '../database/conn.php';

$nombre_objetivos_anterior = $_POST["nombre_objetivos_anterior"];
$nombre_alcances_anterior = $_POST["nombre_alcances_anterior"];
$nombre_restricciones_anterior = $_POST["nombre_restricciones_anterior"];
$nombre_proyecto_anterior = $_POST["nombre_proyecto_anterior"];

$titulo_proyecto = $_POST["titulo_proyecto"];
$objetivos = $_POST["objetivos"];
// echo "anterior: " . count($nombre_objetivos_anterior) . " actual: " . count($objetivos);
$alcances = $_POST["alcances"];
$restricciones = $_POST["restricciones"];
$id_carpeta = $_POST["id_carpeta"];

$query_pp = "select id_pp from plan_proyecto where nombre_proyecto='" . $nombre_proyecto_anterior ."'";
$result_query_pp = pg_query($conn, $query_pp) or die("Error en la consulta");
$id_pp = pg_fetch_assoc($result_query_pp);

$query_proyecto = "update plan_proyecto set id_carpeta = ". $id_carpeta .", nombre_proyecto = '". $titulo_proyecto ."' where id_pp = " . $id_pp["id_pp"];

if (!pg_query($conn, $query_proyecto)) {
  echo "no se pudo actualizar el proyecto";
}else{
  // ===========OBJETIVOS==============
  if (count($nombre_objetivos_anterior)>0) {
    $numero_objetivos_anterior = count($nombre_objetivos_anterior);
    $numero_objetivos = count($objetivos);
    $restaObjetivos = ($numero_objetivos - $numero_objetivos_anterior);
    echo $numero_objetivos . " - " . $numero_objetivos_anterior . " = " . $restaObjetivos;
  }

  //
  // for ($i=0; $i < count($nombre_objetivos_anterior); $i++) {
  //   $query_objetivos = "update objetivos set desc_objetivo = '". $objetivos[$i] ."' where desc_objetivo = '". $nombre_objetivos_anterior[$i] ."'";
  //   if (!pg_query($conn, $query_objetivos)) {
  //     echo "No se pudo actualizar el objetivo";
  //   }
  // }
  // if ($restaObjetivos > 0) {
  //   for ($i=1; $i <= $restaObjetivos; $i++) {
  //     $query_insertar_objetivos = "insert into objetivos (id_pp_fk,desc_objetivo) values (". $id_pp["id_pp"] .",'". $objetivos[$i] ."')";
  //     if (!pg_query($conn, $query_insertar_objetivos)) {
  //       echo "No se guardo el nuevo objetivo";
  //     }
  //   }
  // }
  // for ($i=0; $i <count($alcances) ; $i++) {
  //   $query_alcances = "update alcances set desc_alcances = '". $alcances[$i] ."' where id_pp_fk = ".$id_pp["id_pp"];
  //   if (!pg_query($conn, $query_alcances)) {
  //     echo "No se pudo actualizar el alcance";
  //   }
  // }
  // for ($i=0; $i < count($restricciones); $i++) {
  //   $query_restricciones = "update restricciones set desc_restriccion = '". $restricciones[$i] ."' where id_pp_fk = ".$id_pp["id_pp"];
  //   if (!pg_query($conn, $query_restricciones)) {
  //     echo "No se pudo actualizar la restriccion";
  //   }
  // }

  //aqui van los alcances (Prcticamente igual que en los objetivos.. vamonos a dormir .-.zzz)
  // echo "Se actualizo el proyecto";

}
