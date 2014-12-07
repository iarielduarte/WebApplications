/*Autor : Ariel Duarte
  Version: 1.0.1
  Description: Ejemplo de creación de un Servidor con nodejs
  Date : 29/06/2013
*/
var servidor = require('http');

/*This function is to create server with node */  
function arrancaServidor(requiere, respuesta)
{
	console.log("Alguien se ha conectado..");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("<h1>El servidor NodeJs funciona correctamente</h1>");
	respuesta.end();
}

servidor.createServer(arrancaServidor).listen(8888);