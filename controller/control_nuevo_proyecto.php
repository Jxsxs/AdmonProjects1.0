<?php
// echo "Este dato viene de php" . $_POST["dato"];
// header('Content-Type: application/json');
// $numero = $_POST["dato"];
// $arreglo = array(
//   "suma"=>$numero+2;
// );
// json_encode($arreglo);
$resultado = $_POST["numero1"] + $_POST["numero2"] + 2;
echo $resultado;
?>
