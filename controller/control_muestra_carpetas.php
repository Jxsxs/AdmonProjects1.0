<?php

include '../database/conn.php';

if ($_SESSION["id_usuario"]) {
    $id_usuario = $_SESSION["id_usuario"];
    $queryCarpetas = "select id_carpeta, nombre_carpeta from carpetas where id_user={$id_usuario}";
    $result_query = pg_query($conn, $queryCarpetas) or die("Error en la consulta");
    if (!$result_query) {
        return -1;
    } else {
       // echo 'id_user: ' . $id_usuario . '<br>';
        $carpeta = pg_fetch_array($result_query);
        while ($carpeta) {
//            echo 'id_carpeta ' . $carpeta['id_carpeta'];
            echo "<a href='#{$carpeta['nombre_carpeta']}Submenu' data-toggle='collapse' aria-expanded='false' class='dropdown-toggle'>";
            echo '<i class="fas fa-folder-open"></i>';
            echo $carpeta['nombre_carpeta'];
            echo '</a>';

            echo "<ul class='collapse list-unstyled' id='{$carpeta['nombre_carpeta']}Submenu'>";
            $queryProyectos = "select id_pp, nombre_proyecto from plan_proyecto where id_carpeta={$carpeta['id_carpeta']}";
            $result_query_proyectos = pg_query($conn, $queryProyectos) or die("Error en la consulta");
            if (!$result_query_proyectos) {
                return -1;
            } else {
                while ($proyecto = pg_fetch_array($result_query_proyectos)) {
                    $id_proyecto = $proyecto["id_pp"];
                    $nombre_proyecto = $proyecto['nombre_proyecto'];
                    $nuevoNombre = '"' . $nombre_proyecto . '"';

                    $query_total_objetivos = 'select COUNT(plan_proyecto.id_pp) as objetivos from plan_proyecto join objetivos on objetivos.id_pp_fk = plan_proyecto.id_pp where plan_proyecto.id_pp=' . $id_proyecto;
                    $query_objetivos = 'select objetivos.desc_objetivo from objetivos join plan_proyecto on objetivos.id_pp_fk = plan_proyecto.id_pp where plan_proyecto.id_pp=' . $id_proyecto;

                    $result_query_objetivos = pg_query($conn, $query_total_objetivos);
                    $result_query_objetivos = pg_query($conn, $query_objetivos);
                    $objetivos_numero = pg_fetch_all($result_query_objetivos);
                    $total_objetivos = $objetivos_numero[0];

                    $desc_objetivos [] = array();
                    $cont = 0;
                    while ($objetivos = pg_fetch_array($result_query_objetivos)) {
                        $desc_objetivos[$cont] = $objetivos[0];
                        // echo $desc_objetivos[$cont]. "<br>";
                        $cont += 1;
                    }

                    echo "<li>";
                    echo    "<a href='javascript:verDatosProyecto(" . $id_proyecto . "," . $nuevoNombre . "," . $cont .  "," . json_encode($desc_objetivos) . ")'>";
                    echo      "{$nombre_proyecto}
                            </a>
                          </li>";
                    unset($desc_objetivos);
                }
            }
            echo '</ul>';
            $carpeta = pg_fetch_array($result_query);
        }
//        if ($usuario != null) {
//            header("Location: vista_index.php");
//            echo "Bienvenido " . $usuario[0];
//        } else {
//            echo "No se encuentra registrado";
//        }
    }
} else {
    echo 'no hay nada en la variable';
}

function cargaCarpetas() {
    
}
