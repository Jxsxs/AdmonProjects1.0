<?php

include "../database/conn.php";
$email = "";
$pass = "";
if (isset($_POST["btnEnviar"])) {
    $email = $_POST["txtEmail"];
    $pass = $_POST["txtPass"];
    $query = "select id_user, correo from usuarios where correo='{$email}' and pass='{$pass}'";
    $result_query = pg_query($conn, $query) or die("Error en la consulta");
    if (!$result_query) {
        return -1;
    } else {
        $usuario = pg_fetch_array($result_query);
        $id_user = $usuario[0];
        if ($usuario != null) {
            session_start();
            $_SESSION["id_usuario"] = $id_user;
            header("Location: vista_index.php");
        } else {
            echo "No se encuentra registrado";
        }
    }

    // echo "Email: " . $email;
    // echo "Pass: " . $pass;
}
?>