$(document).ready(function() {
  $('#alternador-normal').bind('click', function() {
    $('body').removeClass('estrecho');
    $('body').removeClass('largo');
  });
  $('#alternador-estrecho').bind('click', function() {
    $('body').addClass('estrecho');
    $('body').removeClass('largo');
  });
  $('#alternador-largo').bind('click', function() {
    $('body').removeClass('estrecho');
    $('body').addClass('largo');
  });
});