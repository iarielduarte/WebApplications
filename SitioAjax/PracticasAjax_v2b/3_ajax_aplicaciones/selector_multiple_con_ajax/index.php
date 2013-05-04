<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Seleccion Multiple con Ajax</title>
<script type="text/javascript">
	
	function showselect(str){
		var xmlhttp;
		if(str.length==0){
			document.getElementById("txtHint").innerHTML="";
			return;
		}
		
		//En el caso de que usemos una version desactualizada IExplorer
		if(window.XMLHttpRequest){
			xmlhttp = new XMLHttpRequest();
		}else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		/*Se comprueba el estado de la conexion con el objeto onreadystatechange*/
		xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4 && xmlhttp.status==200){
				/*Obtener la respues del Servidor*/
				document.getElementById("cliente").innerHTML=xmlhttp.responseText;
			}
		}
		/*Apertura y envio de peticion */
		 xmlhttp.open("GET","db.php?c="+str,true);
		xmlhttp.send();
	}  
	
</script>
</head>

<body>
<h1>Ejemplo de Seleccion Multiple con AJAX</h1>

<form action="">
	<select name="customers" onChange="showselect(this.value)">
    	<?php include "populartipos.php" ?>
    </select>
</form>
<div id="cliente">
	<select name="2">
    </select>
    
</div>
</body>
</html>
