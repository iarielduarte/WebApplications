$(document).ready(function() {
  $('div.boton').click(function() {
    var $discurso = $('div.discurso');
    var currentSize = $discurso.css('fontSize');
    var num = parseFloat(currentSize, 10);
    var unidad = currentSize.slice(-2);
    if (this.id == 'aumenta') {
      num *= 1.4;
    } else if (this.id == 'reduce') {
      num /= 1.4;
    }
    $discurso.css('fontSize', num + unidad);
  });
});

// Hacer aparecer a los elementos pulsables cuando el puntero esté sobre ellos.
$(document).ready(function() {
  $('h2, div.boton, div.etiqueta, span.mas, p:eq(2)').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});


/*$(document).ready(function() {
  $('#aumenta').click(function() {
	var $discurso = $('div.discurso');
	var currentSize = $discurso.css('fontSize');
	var num = parseFloat(currentSize, 10);
	var unidad = currentSize.slice(-2);
	num *= 1.4;
	$discurso.css('fontSize', num + unidad);    
  });
});

$(document).ready(function() {
  $('#reduce').click(function() {
	var $discurso = $('div.discurso');
	var currentSize = $discurso.css('fontSize');
	var num = parseFloat(currentSize, 10);
	var unidad = currentSize.slice(-2);
	num /= 1.4;
	$discurso.css('fontSize', num + unidad);    
  });
});*/










