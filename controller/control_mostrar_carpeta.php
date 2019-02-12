<?php

include '../database/conn.php';
header("Content-Type: application/json;");
session_start();
if ($_SESSION["id_usuario"]) {
//   if (isset($_POST["pasa"])) {
    $carpetas = array();
    $datos_proyecto = array();
    $datos_objetivos = null;
    $datos_alcances = null;
    $datos_res = null;

    $id_usuario = $_SESSION["id_usuario"];
    $queryCarpetas = "select * from carpetas where id_user=" . $id_usuario;
    $result_query = pg_query($conn, $queryCarpetas) or die("Error en la consulta");
    if (!$result_query) {
        return -1;
    } else {
       // echo 'id_user: ' . $id_usuario . '<br>';
        while ($carpeta = pg_fetch_assoc($result_query)) {
            $carpetas[] = $carpeta;
            $queryProyectos = "select * from plan_proyecto where id_carpeta=" . $carpeta['id_carpeta'];
            $result_query_proyectos = pg_query($conn, $queryProyectos) or die("Error en la consulta");
            if (!$result_query_proyectos) {
                return -1;
            } else {
                while ($proyecto = pg_fetch_assoc($result_query_proyectos)) {
                    $id_proyecto = $proyecto["id_pp"];
                    $datos_proyecto[] = $proyecto;
                    // ==================OBJETIVOS=======================
                    // Consulta que saca la descripcion de un objetivo de un proyecto especifico
                    // pasandole su id
                    $query_objetivos = 'select plan_proyecto.id_pp, objetivos.desc_objetivo from objetivos join plan_proyecto on objetivos.id_pp_fk = plan_proyecto.id_pp where plan_proyecto.id_pp=' . $id_proyecto;
                    $result_query_objetivos = pg_query($conn, $query_objetivos);
                    while ($objetivos = pg_fetch_assoc($result_query_objetivos)) {
                        $datos_objetivos[] = $objetivos;
                    }

                    // ===========================ALCANCES============================
                    $query_alcances = "select plan_proyecto.id_pp, alcances.desc_alcances from alcances join plan_proyecto on alcances.id_pp_fk = plan_proyecto.id_pp where plan_proyecto.id_pp=" . $id_proyecto;
                    $result_query_alcances = pg_query($conn, $query_alcances);
                    while ($alcances = pg_fetch_assoc($result_query_alcances)) {
                      $datos_alcances[] = $alcances;
                    }
                    // ========================RESTRICCIONES============================
                    $query_restricciones = "select plan_proyecto.id_pp, restricciones.desc_restriccion from restricciones join plan_proyecto on restricciones.id_pp_fk = plan_proyecto.id_pp where plan_proyecto.id_pp=".$id_proyecto;
                    $result_query_res = pg_query($conn,$query_restricciones);
                    while ($restricciones = pg_fetch_assoc($result_query_res)) {
                      $datos_res[] = $restricciones;
                     }
                     // ===================================================================
                }
            }
        }
        echo json_encode(Array(
          'datos_carpetas' => $carpetas,
          'datos_proyecto' => $datos_proyecto,
          'datos_objetivos' => $datos_objetivos,
          'datos_alcances' => $datos_alcances,
          'datos_res' => $datos_res
        ));
    }
}
