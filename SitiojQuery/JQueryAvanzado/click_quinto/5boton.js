/*$(document).ready(function() {
  $('#alternador-normal').bind('click', function() {
    $('body').removeClass('estrecho');
    $('body').removeClass('largo');
    $('#alternador .boton').removeClass('selected');
    $(this).addClass('selected');
  });
  $('#alternador-estrecho').bind('click', function() {
    $('body').addClass('estrecho');
    $('body').removeClass('largo');
    $('#alternador .boton').removeClass('selected');
    $(this).addClass('selected');
  });
  $('#alternador-largo').bind('click', function() {
    $('body').removeClass('estrecho');
    $('body').addClass('largo');
    $('#alternador .boton').removeClass('selected');
    $(this).addClass('selected');
  });
});*/



/*$(document).ready(function() {
  $('#alternador-normal').bind('click', function() {
    $('body').removeClass('estrecho').removeClass('largo');
  });
  $('#alternador-estrecho').bind('click', function() {
    $('body').addClass('estrecho').removeClass('largo');
  });
  $('#alternador-largo').bind('click', function() {
    $('body').removeClass('estrecho').addClass('largo');
  });

  $('#alternador .boton').bind('click', function() {
    $('#alternador .boton').removeClass('selected');
    $(this).addClass('selected');
  });
});*/



/*$(document).ready(function() {
  $('#alternador-normal').bind('click', function() {
    $('body').removeClass();
  });
  $('#alternador-estrecho').bind('click', function() {
    $('body').removeClass().addClass('estrecho');
  });
  $('#alternador-largo').bind('click', function() {
    $('body').removeClass().addClass('largo');
  });

  $('#alternador .boton').bind('click', function() {
    $('#alternador .boton').removeClass('selected');
    $(this).addClass('selected');
  });
});*/



/*$(document).ready(function() {
  $('#alternador .boton').bind('click', function() {
    $('body').removeClass();
    if (this.id == 'alternador-estrecho') {
      $('body').addClass('estrecho');
    }
    else if (this.id == 'alternador-largo') {
      $('body').addClass('largo');
    }
    $('#alternador .boton').removeClass('selected');
    $(this).addClass('selected');
  });
});*/



$(document).ready(function() {
  $('#alternador .boton').click(function() {
    $('body').removeClass();
    if (this.id == 'alternador-estrecho') {
      $('body').addClass('estrecho');
    }
    else if (this.id == 'alternador-largo') {
      $('body').addClass('largo');
    }
    $('#alternador .boton').removeClass('selected');
    $(this).addClass('selected');
  });
});

/*$(document).ready(function() {
  $('#alternador h3').toggle(function() {
    $('#alternador .boton').addClass('ocultar');
  }, function() {
    $('#alternador .boton').removeClass('ocultar');
  });
});*/



$(document).ready(function() {
  $('#alternador h3').click(function() {
    $('#alternador .boton').toggleClass('ocultar');
  });
});
