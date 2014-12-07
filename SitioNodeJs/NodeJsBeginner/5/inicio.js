/*Autor : Ariel Duarte
  Version: 1.0.1 [NodeJs]
  Description: arrancara el servidor
  Date :29/06/2013
*/
var servidor = require("./servidor");
var redireccion = require("./redireccionar");
var peticiones = require("./peticiones");

var manejador = {};
manejador['/']=peticiones.inicio;
manejador['/pagina1']=peticiones.pagina1;
manejador['/pagina2']=peticiones.pagina2;
manejador['/favicon.ico']=peticiones.favicon;

servidor.iniciar(redireccion.redireccionador,manejador);