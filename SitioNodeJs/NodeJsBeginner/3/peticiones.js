/*Autor : Ariel Duarte
  Version: 1.0.1
  Description: Administrador de peticiones a las paginas
  Date :29/06/2013
*/

/*This function is to pagina de inicio */  
function inicio()
{
	console.log("Pagina de Inicio");
	return "Inicio";
}

/*This function is to pagina 1 */  
function pagina1()
{
	console.log("Pagina de Pagina 1");
	return "Pagina 1";
}

/*This function is to pagina 2 */  
function pagina2()
{
	console.log("Pagina de Pagina 2");
	return "Pagina 2";
}

/*This function is to favicon.ico wrong */  
function favicon()
{
	console.log("Se ha petido el favicon");
	return "";
}

/*Create module to inicio, pagina1, pagina2 */
exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;