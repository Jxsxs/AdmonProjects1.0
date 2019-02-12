<?php
include '../database/conn.php';

header("Content-Type: application/json;");

$titulo_proyecto = $_POST["titulo_proyecto"];
$objetivos = $_POST["objetivos"];
$alcances = $_POST["alcances"];
$restricciones = $_POST["restricciones"];
$id_carpeta = $_POST["id_carpeta"];

$query_proyecto = "insert into plan_proyecto(id_carpeta, nombre_proyecto) values (".$id_carpeta.", '".$titulo_proyecto."')";

if (!pg_query($conn, $query_proyecto)) {
  echo "no se pudo agregar el proyecto";
}else{
  $query_pp = "select id_pp from plan_proyecto where nombre_proyecto='" . $titulo_proyecto ."'";
  $result_query_pp = pg_query($conn, $query_pp) or die("Error en la consulta");
  $id_pp = pg_fetch_assoc($result_query_pp);
  // echo $objetivos[0];
  for ($i=0; $i < count($objetivos); $i++) {
    $query_objetivos = "insert into objetivos (id_pp_fk, desc_objetivo) values(".$id_pp["id_pp"].", '".$objetivos[$i]."')";
    if (!pg_query($conn, $query_objetivos)) {
      echo "No se pudo agregar el objetivo";
    }
  }
  for ($i=0; $i <count($alcances) ; $i++) {
    $query_alcances = "insert into alcances (id_pp_fk, desc_alcances) values(".$id_pp["id_pp"].", '".$alcances[$i]."')";
    if (!pg_query($conn, $query_alcances)) {
      echo "No se pudo agregar el alcance";
    }
  }
  for ($i=0; $i < count($restricciones); $i++) {
    $query_restricciones = "insert into restricciones (id_pp_fk, desc_restriccion) values(".$id_pp["id_pp"].", '".$restricciones[$i]."')";
    if (!pg_query($conn, $query_restricciones)) {
      echo "No se pudo agregar la restriccion";
    }
  }

  //aqui van los alcances (Prcticamente igual que en los objetivos.. vamonos a dormir .-.zzz)
  echo "Se guardo el proyecto";
}
