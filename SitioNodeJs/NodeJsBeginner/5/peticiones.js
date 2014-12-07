/*Autor : Ariel Duarte
  Version: 1.0.1
  Description: Administrador de peticiones a las paginas
  Date :29/06/2013
*/

/*This function is to pagina de inicio */  
function inicio(respuesta)
{
	console.log("Ha entrado en la pagina de Inicio");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("Esta es la pagina de inicio");
	respuesta.end();
	
}

/*This function is to pagina 1 */  
function pagina1(respuesta)
{
	console.log("Pagina de Pagina 1");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("Esta es la pagina 1");
	respuesta.end();
}

/*This function is to pagina 2 */  
function pagina2(respuesta)
{
	console.log("Pagina de Pagina 2");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("Esta es la pagina 2");
	respuesta.end();
}

/*This function is to favicon.ico wrong */  
function favicon(respuesta)
{
	console.log("Se ha petido el favicon");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("");
	respuesta.end();
}

/*Create module to inicio, pagina1, pagina2 */
exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;