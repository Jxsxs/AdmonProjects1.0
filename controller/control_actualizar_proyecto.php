<?php
include '../database/conn.php';

// $nombre_objetivos_anterior = $_POST["nombre_objetivos_anterior"];
// $nombre_alcances_anterior = $_POST["nombre_alcances_anterior"];
// $nombre_restricciones_anterior = $_POST["nombre_restricciones_anterior"];
$nombre_proyecto_anterior = $_POST["nombre_proyecto_anterior"];

$titulo_proyecto = $_POST["titulo_proyecto"];
$objetivos = $_POST["objetivos"];
// var_dump($objetivos);
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

$nueva_cuenta_objetivos = 0;
$nueva_cuenta_alcances = 0;
$nueva_cuenta_restricciones = 0;

$query_proyecto = "update plan_proyecto set id_carpeta = ". $id_carpeta .", nombre_proyecto = '". $titulo_proyecto ."' where id_pp = " . $id_pp["id_pp"];
if (!pg_query($conn, $query_proyecto)) {
  echo "no se pudo actualizar el proyecto";
}else{
  // ===================================================
  // ====================ACTUALIZAR OBJETIVOS====================
  // if (count($objetivos_anteriores) <= count($objetivos)) {
  //   $nueva_cuenta_objetivos = count($objetivos) - count($objetivos_anteriores);
  //   if ($nueva_cuenta_objetivos == 0) {
  //     for ($i=0; $i < count($objetivos_anteriores) ; $i++) {
  //       $query_actualiza_objetivos = "update objetivos set desc_objetivo = '" . $objetivos[$i] . "' where desc_objetivo='" . $objetivos_anteriores[$i] . "'";
  //       if (!pg_query($conn, $query_actualiza_objetivos)) {
  //         echo "No se pudo actualizar el objetivo";
  //       }
  //     }
  //     echo "Objetivos actualizados";
  //   }else{
  //     if ($nueva_cuenta_objetivos > 0) {
  //       for ($i=0; $i < count($objetivos_anteriores) ; $i++) {
  //         $query_actualiza_objetivos = "update objetivos set desc_objetivo = '" . $objetivos[$i] . "' where desc_objetivo='" . $objetivos_anteriores[$i] . "'";
  //         if (!pg_query($conn, $query_actualiza_objetivos)) {
  //           echo "No se pudo actualizar el objetivo";
  //         }
  //       }
  //       for ($i=count($objetivos_anteriores); $i < count($objetivos) ; $i++) {
  //         $query_nuevos_objetivos = "insert into objetivos (desc_objetivo,id_pp_fk) values ('". $objetivos[$i] ."', ". $id_pp["id_pp"] .")";
  //         if (!pg_query($conn, $query_nuevos_objetivos)) {
  //           echo "No se agregaron los nuevos objetivos";
  //         }
  //       }
  //       echo "Objetivos actualizados";
  //     }
  //   }
  // }
  // else{
  //   $diff_objetivos_eliminar = array_diff($objetivos_anteriores, $objetivos);
  //   foreach ($diff_objetivos_eliminar as $objetivo_eliminar) {
  //     $query_elimina_objetivo = "delete from objetivos where desc_objetivo = '" . $objetivo_eliminar . "'";
  //     if (!pg_query($query_elimina_objetivo)) {
  //       echo "No se elimino el objetivo: " . $objetivo_eliminar;
  //       break;
  //     }else{
  //         echo "Objetivos actualizados";
  //     }
  //   }
  // }
  // =========================================================
  // ====================ACTUALIZAR ALCANCES====================

  if (count($alcances_anteriores) <= count($alcances)) {
    $nueva_cuenta_alcances = count($alcances) - count($alcances_anteriores);
    if ($nueva_cuenta_alcances == 0) {
      for ($i=0; $i < count($alcances_anteriores) ; $i++) {
        $query_actualiza_alcances = "update alcances set desc_alcances = '" . $alcances[$i] . "' where desc_alcances='" . $alcances_anteriores[$i] . "'";
        if (!pg_query($conn, $query_actualiza_alcances)) {
          echo "No se pudo actualizar el alcance";
        }
      }
      echo "alcances actualizados";
    }else{
      if ($nueva_cuenta_alcances > 0) {
        for ($i=0; $i < count($alcances_anteriores) ; $i++) {
          $query_actualiza_alcances = "update alcances set desc_alcances = '" . $alcances[$i] . "' where desc_alcances='" . $alcances_anteriores[$i] . "'";
          if (!pg_query($conn, $query_actualiza_alcances)) {
            echo "No se pudo actualizar el alcance";
            break;
          }
        }
        for ($i=count($alcances_anteriores); $i < count($alcances) ; $i++) {
          $query_nuevos_alcances = "insert into alcances (desc_alcances,id_pp_fk) values ('". $alcances[$i] ."', ". $id_pp["id_pp"] .")";
          if (!pg_query($conn, $query_nuevos_alcances)) {
            echo "No se agregaron los nuevos alcances";
          }
        }
        echo "alcances actualizados";
      }
    }
  }else{
    // $nueva_cuenta_alcances = count($alcances_anteriores) - count($alcances);
    // for ($i=0; $i < count($alcances) ; $i++) {
    //   $query_actualiza_alcances = "update alcances set desc_alcances = '" . $alcances[$i] . "' where desc_alcances='" . $alcances_anteriores[$i] . "'";
    //   if (!pg_query($conn, $query_actualiza_alcances)) {
    //     echo "No se pudo actualizar el alcance";
    //     break;
    //   }else{
    //     if (strcmp($alcances[$i],'') == 0) {
    //       echo "Se elimina";
    //     }
    //   }
    // }
    // $diff_alcances_eliminar = array_diff($alcances_anteriores, $alcances);
    // foreach ($diff_alcances_eliminar as $alcance_eliminar) {
    //   echo $alcance_eliminar . "\n";
      // $query_elimina_alcance = "delete from alcances where desc_alcances = '" . $alcance_eliminar . "'";
      // if (!pg_query($query_elimina_alcance)) {
      //   echo "No se elimino el alcance: " . $alcance_eliminar;
      //   break;
      // }else{
      //     echo "alcances actualizados";
      // }
    // }
  }
  // =========================================================
  // ====================ACTUALIZAR RESTRICCIONES====================


  // =========================================================
}
