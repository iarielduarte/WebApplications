/*Autor : Ariel Duarte
  Version: 1.0.1 [NodeJs]
  Description: Ejemplo de creación de un Servidor con nodejs
  Date : 29/06/2013
*/
var servidor = require("http");
var url = require("url");
var fs = require("fs");

/*This function is to start the server */  
function iniciar(redireccionar, manejador)
{
	/*This function is to create server with node */  
	function arrancaServidor(requiere, respuesta)
	{
		var ruta = url.parse(requiere.url).pathname;

		console.log("Alguien se ha conectado..");

		var contenido = redireccionar(manejador, ruta, respuesta);

		var registro = fs.createWriteStream('registro.txt', {'flags':'a'});
		registro.write(ruta + '\n');
		
		/*respuesta.writeHead(200,{"Content-Type":"text/html"});
		respuesta.write(contenido);
		respuesta.end();*/
	}
	servidor.createServer(arrancaServidor).listen(8888);
}

/*Create module to iniciar*/
exports.iniciar = iniciar;