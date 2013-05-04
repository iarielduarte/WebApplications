<?php

echo '<select name="customers">';
$conexion = sqlite_open('select.db');
$consulta = "SELECT * FROM animalvegetalmineral;";
$resultado = sqlite_query($conexion,$consulta);
while($fila = sqlite_fetch_array($resultado)){	
		if($fila['tipo'] == $_GET['c']){
			echo "<option value='".$fila['elemento']."'>".$fila['elemento']."</option>";;
		}
	}
sqlite_close($conexion);
echo '</select>';
?>
