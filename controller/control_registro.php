<?php

include "../database/conn.php";

if (isset($_POST["btnRegistro"])) {
    $nombre = $_POST["txtNombreRegistro"];
    $email = $_POST["txtEmailRegistro"];
    $pass = $_POST["txtPassRegistro"];
    $confPass = $_POST["txtPassConfRegistro"];
    if ($pass == $confPass) {
        $query_valida = "select correo from usuarios where correo='{$email}'";
        $result_query = pg_query($conn, $query_valida) or die("Error en la consulta");
        if (!$result_query) {
            return -1;
        } else {
            $usuario = pg_fetch_array($result_query);
            if ($usuario == null) {
                $query_registro = "insert into usuarios (correo,pass,tipo,nombre) values ('{$email}','{$pass}','0','{$nombre}')";
                $result_insert = pg_query($conn, $query_registro);
                if (!$result_query) {
                    return -1;
                } else {
                    echo "se agrego con exito";
                }
            } else {
                echo "El usuario ya esta registrado";
            }
        }
    } else {
        echo "las contrasenas no coinciden";
    }
}
?>