// JavaScript Document
function recibeFoco(elemento){
	elemento.className='enfoco';
	var lista = elemento.parentNode;
	var ayuda = document.getElementById("ayuda");
	
	//Elimianr los duplicados
	if(ayuda != undefined){
		ayuda.parentNode.removeChild(	ayuda    );
	}
	
	lista.innerHTML += "<p class='ayuda' id='ayuda'>Ingrese los datos no se permitira valores nulos</p>";
}

function pierdeFoco(elemento){
	elemento.className='';
}