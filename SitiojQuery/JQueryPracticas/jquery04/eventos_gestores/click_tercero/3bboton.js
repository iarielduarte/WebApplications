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