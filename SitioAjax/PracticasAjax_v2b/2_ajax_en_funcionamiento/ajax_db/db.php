<?php

//echo $_GET['c'];
$conexion = sqlite_open('clientes.db');
			$consulta = "SELECT * FROM cliente;";
			$resultado = sqlite_query($conexion,$consulta);

			while($fila = sqlite_fetch_array($resultado)){
							if($fila['nombre'] == $_GET['c']){
								echo $fila['nombre'];
								echo ' - ';
								echo $fila['direccion'];
								echo ' - ';
								
								echo $fila['telefono'];
								echo ' - ';
								echo $fila['codigopostal'];
								echo ' - ';
								echo $fila['ciudad'];
								echo ' - ';	
								echo $fila['pais'];
								echo ' - ';
							}
						}

sqlite_close($conexion);
?>
