<?php

$conexion = sqlite_open('select.db');
$consulta = "SELECT * FROM tipos;";
$resultado = sqlite_query($conexion,$consulta);

while($fila = sqlite_fetch_array($resultado)){
echo "<option value='".$fila['tipo']."'>".$fila['tipo']."</option>";

			
							
						}
sqlite_close($conexion);
?>
