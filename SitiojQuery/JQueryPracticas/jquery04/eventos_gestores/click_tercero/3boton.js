$(document).ready(function() {
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
});

