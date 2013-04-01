
$(document).ready(function() {
  $('#letra-a .boton').click(function() {
    $('#diccionario').load('a.html');
	alert('Cargado');
  });
});


/*$(document).ready(function() {
  $('#letra-b .boton').click(function() {
    $.getJSON('b.json', function(data) {
		$('#diccionario').empty();						 
		$.each(data, function(indiceEntrada, entrada) {	
		var html = '<div class="entrada">';
        html += '<h3 class="termino">' + entrada['termino'] + '</h3>';
        html += '<div class="parte">' + entrada['parte'] + '</div>';
        html += '<div class="definicion">';
        html += entrada['definicion'];
		html += '</div>';
        html += '</div>';
        $('#diccionario').append($(html));
      });
								 
       });
	});
});*/

$(document).ready(function() {
  $('#letra-b .boton').click(function() {
    $.getJSON('b.json', function(data) {
      $('#diccionario').empty();
      $.each(data, function(indiceEntrada, entrada) {
        var html = '<div class="entrada">';
        html += '<h3 class="termino">' + entrada['termino'] + '</h3>';
        html += '<div class="parte">' + entrada['parte'] + '</div>';
        html += '<div class="definicion">';
        html += entrada['definicion'];
        if (entrada['cita']) {
          html += '<div class="cita">';
          $.each(entrada['cita'], function(indiceLinea, linea) {
            html += '<div class="cita-linea">' + linea + '</div>';
          });
          if (entrada['autor']) {
            html += '<div class="cita-autor">' + entrada['autor'] +
                                                           '</div>';
          }
          html += '</div>';
        }
        html += '</div>';
        html += '</div>';
        $('#diccionario').append($(html));
      });
    });
  });
});




$(document).ready(function() {
  $('#letra-c .boton').click(function() {
    $.getScript('c.js');
  });
});






















