// Documento JavaScript
$(document).ready(function() {
$('tr:odd').addClass('odd');
$('tr:even').addClass('even');
$('td:contains("Enrique")').addClass('destacado');
});

$(document).ready(function() {
 $('th').parent().addClass('cabecera-tabla');
 $('tr:not([th]):even').addClass('even');
 $('tr:not([th]):odd').addClass('odd');
 $('td:contains("Enrique")').next().addClass('destacado');
 $('td:contains("Enrique")').siblings().addClass('destacado');
 $('td:contains("Enrique")').parent().find('td:gt(0)').addClass('destacado');
 $('td:contains("Enrique")').parent().find('td').not(':contains("Enrique")').addClass('destacado');
   $('td:contains("Enrique")') //Obtiene cada celda que contiene Enrique
   .parent()                   //Obtiene su padre
   .find('td:eq(1)')           //Encuentra dentro del padre la segunda celda
   .addClass('destacado')      //Añade la Clase destacado a esa celda
   .end()                      //Finaliza el find()anterior para poder realizar otro volviendo al padre
   .find('td:eq(2)')           //Encuentra dentro del padre la tercera celda
   .addClass('destacado');     //Añade la clase "destacado" a esa celda
   
 
 
});


