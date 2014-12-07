/*Autor : Ariel Duarte
  Version: 1.0.1
  Description: redireccionador de url
  Date :29/06/2013
*/

/*This function is to redirect */  
function redireccionador(manejador, ruta)
{
	console.log("Redireccionando esta ruta "+ruta);
	if (typeof manejador[ruta] === 'function') {
		return manejador[ruta]();
	} else {
		console.log("No existe una funcion para esa ruta"+ruta);
	};
	
}
/*Create module to redireccionador*/
exports.redireccionador = redireccionador;