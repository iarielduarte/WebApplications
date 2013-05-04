<?php

$conexion = sqlite_open('chat.db');
$consulta = "SELECT * FROM mensajes ORDER BY utc DESC LIMIT 5;";
$resultado = sqlite_query($conexion,$consulta);
while($fila = sqlite_fetch_array($resultado)){
							
								echo $fila['utc'];
								echo ' - ';
								echo $fila['autor'];
								echo ' - ';
								
								echo $fila['mensaje'];
								echo "<br>";

							
						}
sqlite_close($conexion);
?>
