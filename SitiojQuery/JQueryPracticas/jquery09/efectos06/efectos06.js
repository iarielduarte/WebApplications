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

/*$(document).ready(function() {
  $('p:eq(1)').hide();
  $('span.mas').click(function() {
    $('p:eq(1)').show('slow');
    $(this).hide();
  });
});*/

/*$(document).ready(function() {
  $('div.etiqueta').click(function() {
    $('div.boton')
      .animate({left: 650}, 'slow')
      .animate({height: 38}, 'slow');
  });
});*/

/*$(document).ready(function() {
  $('div.etiqueta').click(function() {
    $('div.boton')
      .fadeTo('slow',0.5)
      .animate({left: 650}, 'slow')
      .fadeTo('slow',1.0)
      .slideUp('slow')
	  .slideDown ('slow');
  });
});*/

/*$(document).ready(function() {
  $('div.etiqueta').click(function() {
    $('div.boton')
      .fadeTo('slow',0.5)
      .animate({left: 650}, 'slow')
      .fadeTo('slow',1.0)
      .css('backgroundColor','#f00');
  });
});*/

/*$(document).ready(function() {
  $('div.etiqueta').click(function() {
    $('div.boton')
    .fadeTo('slow',0.5)
    .animate({left: 650}, 'slow')
    .fadeTo('slow',1.0);
    $('div.boton').css('backgroundColor','#f00');
  });
});*/

$(document).ready(function() {
  $('div.etiqueta').click(function() {
    $('div.boton')
    .fadeTo('slow',0.5)
    .animate({left: 650}, 'slow')
    .fadeTo('slow',1.0, function() {
	  $(this).css('backgroundColor','#f00');
	  });
  });
});


/*$(document).ready(function() {
  $('div.etiqueta').click(function() {
    $('div.boton').animate({left: 650, height: 38}, 'slow');
  });
});*/

/*$(document).ready(function() {
  $('div.etiqueta').click(function() {
    //obtener todos los anchos...
    var paraWidth = $('div.discurso p').width();
    var $boton = $('div.boton');
    var botonWidth = $boton.width();
    var paddingRight = $boton.css('paddingRight');
    var paddingLeft = $boton.css('paddingLeft');
    var borderRightWidth = $boton.css('borderRightWidth');
    var borderLeftWidth = $boton.css('borderLeftWidth');

    // calcular el ancho total...
    var totalBotonWidth = parseInt(
            botonWidth, 10) + parseInt(paddingRight, 10) + parseInt(
            paddingLeft, 10) + parseInt(borderRightWidth, 10) +
            parseInt(borderLeftWidth,10);
    var ladoDerecho = paraWidth - totalBotonWidth;
    $boton.animate({left: ladoDerecho, height: 38}, 'slow');
  });
});*/

$(document).ready(function() {
  $('p:eq(1)').hide();
  $('span.mas').click(function() {
    $('p:eq(1)'). animate({height: 'show', width: 'show',
                                           opacity: 'show'}, 'slow');
    $(this).hide();
  });
});

/*$(document).ready(function() {
  $('p:eq(3)').css('backgroundColor', '#fcf').hide();
  $('p:eq(2)').css('backgroundColor', '#cff').click(function() {
    $(this).slideUp('slow').next().slideDown('slow');
  });
});*/

/*$(document).ready(function() {
  $('p:eq(3)')
    .css('backgroundColor', '#fcf')
    .hide();
  $('p:eq(2)')
    .css('backgroundColor', '#cff')
    .click(function() {
      $(this).next().slideDown('slow',function() {
      // slideUp() here will start after the slideDown has ended
      });
    });
});*/

$(document).ready(function() {
  $('p:eq(3)')
    .css('backgroundColor', '#fcf')
    .hide();
  $('p:eq(2)')
    .css('backgroundColor', '#cff')
    .click(function() {
      var $thisPara = $(this);
        $thisPara.next().slideDown('slow',function() {
        $thisPara.slideUp('slow');
      });
    });
});

$(document).ready(function() {
  $('div.boton').click(function() {
    var $discurso = $('div.discurso');
    var currentSize = $discurso.css('fontSize');
    var num = parseFloat(currentSize, 10);
    var unit = currentSize.slice(-2);
    if (this.id == 'aumenta') {
      num *= 1.4;
    } else if (this.id == 'reduce') {
      num /= 1.4;
    }
    $discurso.css('fontSize', num + unit);
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