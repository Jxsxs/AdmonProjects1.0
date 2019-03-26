<?php
include '../database/conn.php';

// $nombre_objetivos_anterior = $_POST["nombre_objetivos_anterior"];
// $nombre_alcances_anterior = $_POST["nombre_alcances_anterior"];
// $nombre_restricciones_anterior = $_POST["nombre_restricciones_anterior"];
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

$query_consulta_objetivos = "select desc_objetivo FROM objetivos WHERE id_pp_fk =".$id_pp["id_pp"];
$query_consulta_alcances = "select desc_alcances FROM alcances WHERE id_pp_fk =".$id_pp["id_pp"];
$query_consulta_restricciones = "select desc_restriccion FROM restricciones WHERE id_pp_fk =".$id_pp["id_pp"];

$result_consulta_obj = pg_query($conn, $query_consulta_objetivos);
$result_consulta_alc = pg_query($conn, $query_consulta_alcances);
$result_consulta_res = pg_query($conn, $query_consulta_restricciones);

//se tienen los datos anteriormente guardados en la base de datos y se procede a compararlos con los datos que se quieren actualizar
// =============GUARDAMOS EL RESULTADO DE LA CONSULTA EN DIFERENTES ARRAYS =======================
$objetivos_anteriores = null;
$alcances_anteriores = null;
$restricciones_anteriores = null;

while($obj = pg_fetch_assoc($result_consulta_obj)) {
  $objetivos_anteriores[] = $obj["desc_objetivo"];
}
while($alc = pg_fetch_array($result_consulta_alc)){
  $alcances_anteriores[] = $alc["desc_alcances"];
}
while($res = pg_fetch_array($result_consulta_res)){
  $restricciones_anteriores[] = $res["desc_restriccion"];
}
// ===================================================
// ===================================================
// ===================================================
// ===================================================

$nueva_cuenta_objetivos = 0;
if (count($objetivos_anteriores) <= count($objetivos)) {
  $query_proyecto = "update plan_proyecto set id_carpeta = ". $id_carpeta .", nombre_proyecto = '". $titulo_proyecto ."' where id_pp = " . $id_pp["id_pp"];
  if (!pg_query($conn, $query_proyecto)) {
    echo "no se pudo actualizar el proyecto";
  }else{
    $nueva_cuenta_objetivos = count($objetivos) - count($objetivos_anteriores);
    // echo count($objetivos) ." -- ". (count($objetivos_anteriores));
    // var_dump($objetivos_anteriores);
    // var_dump($objetivos);
    if ($nueva_cuenta_objetivos == 0) {
      for ($i=0; $i < count($objetivos_anteriores) ; $i++) {
        $query_actualiza_objetivos = "update objetivos set desc_objetivo = '" . $objetivos[$i] . "' where desc_objetivo='" . $objetivos_anteriores[$i] . "'";
        if (!pg_query($conn, $query_actualiza_objetivos)) {
          echo "No se pudo actualizar el objetivo";
        }
      }
      echo "Objetivos actualizados";
    }else{
      if ($nueva_cuenta_objetivos > 0) {
        for ($i=0; $i < count($objetivos_anteriores) ; $i++) {
          $query_actualiza_objetivos = "update objetivos set desc_objetivo = '" . $objetivos[$i] . "' where desc_objetivo='" . $objetivos_anteriores[$i] . "'";
          if (!pg_query($conn, $query_actualiza_objetivos)) {
            echo "No se pudo actualizar el objetivo";
          }
        }
        for ($i=count($objetivos_anteriores); $i < count($objetivos) ; $i++) {
          $query_nuevos_objetivos = "insert into objetivos (desc_objetivo,id_pp_fk) values ('". $objetivos[$i] ."', ". $id_pp["id_pp"] .")";
          if (!pg_query($conn, $query_nuevos_objetivos)) {
            echo "No se agregaron los nuevos objetivos";
          }
        }
        echo "Objetivos actualizados";
      }
    }
  }
}else{
  $nueva_cuenta_objetivos = count($objetivos_anteriores) - count($objetivos);
  echo "Nueva cuenta objetivos: " . $nueva_cuenta_objetivos;
  // echo "No se puede proceder";
}

// for ($i=0; $i < count(); $i++) {
//   // code...
// }
//
//
// $query_proyecto = "update plan_proyecto set id_carpeta = ". $id_carpeta .", nombre_proyecto = '". $titulo_proyecto ."' where id_pp = " . $id_pp["id_pp"];
//
//
// if (!pg_query($conn, $query_proyecto)) {
//   echo "no se pudo actualizar el proyecto";
// }else{
//   // ===========OBJETIVOS==============
//   if (count($nombre_objetivos_anterior)>0) {
//     $numero_objetivos_anterior = count($nombre_objetivos_anterior);
//     $numero_objetivos = count($objetivos);
//     $restaObjetivos = ($numero_objetivos - $numero_objetivos_anterior);
//     echo $numero_objetivos . " - " . $numero_objetivos_anterior . " = " . $restaObjetivos;
//   }

  //
  // for ($i=0; $i < count($nombre_objetivos_anterior); $i++) {
  //   $query_objetivos = "update objetivos set desc_objetivo = '". $objetivos[$i] ."' where desc_objetivo = '". $nombre_objetivos_anterior[$i] ."'";
    // if (!pg_query($conn, $query_objetivos)) {
    //   echo "No se pudo actualizar el objetivo";
    // }
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

// }
