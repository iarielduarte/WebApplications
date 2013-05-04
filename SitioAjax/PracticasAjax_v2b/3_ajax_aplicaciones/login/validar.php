<?php

$conexion = sqlite_open('usuarios.db');
$consulta = "SELECT * FROM usuarios;";
$resultado = sqlite_query($conexion,$consulta);
while($fila = sqlite_fetch_array($resultado)){
	if($fila['usuario'] == $_GET['u']){
		echo '
			<div id="" style="width:180px;height:30px;background:red;border-radius:15px;position:absolute;-webkit-transform:translate(90px,-40px);opacity:0.5;z-index:-100;"></div>
		';
	}else{
		echo '
			<div id="" style="width:180px;height:30px;background:green;border-radius:15px;position:absolute;-webkit-transform:translate(90px,-40px);opacity:0.5;z-index:-100;"></div>
		';
	}
}


?>
