/*$(document).ready(function() {
  $('#aumenta').click(function() {
    var $discurso = $('div.discurso');
    var currentSize = $discurso.css('fontSize');
    var num = parseFloat(currentSize, 10);
    var unit = currentSize.slice(-2);
    num *= 1.4;
    $discurso.css('fontSize', num + unit);
  });
});*/

/*$(document).ready(function() {
  $('p:eq(1)').hide();
});*/

$(document).ready(function() {
  $('p:eq(1)').hide();
  $('span.mas').click(function() {
    $('p:eq(1)').show();
    $(this).hide();
  });
});

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

// Hacer aparecer a los elementos pulsables cuando el puntero est� sobre ellos.
$(document).ready(function() {
  $('div.boton, div.etiqueta, span.mas').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});