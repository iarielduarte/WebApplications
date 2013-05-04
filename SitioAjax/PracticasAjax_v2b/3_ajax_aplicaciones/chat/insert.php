<?php

$conexion = sqlite_open('chat.db');
$consulta ="INSERT INTO mensajes VALUES ('".date('U')."','jocarsa','".$_GET['mensaje']."');";

$resultado = sqlite_exec($conexion,$consulta);
sqlite_close($conexion);

echo '<meta http-equiv="REFRESH" content="0;url=index.php">';

?>
