<?php
if (($_request["numero"])) {
  $numero = $_POST["numero"];
  echo "<script>console.log(" . $numero . ");</script>";
}else{
  echo "<script>console.log(Esta vacio);</script>;";
}

?>
