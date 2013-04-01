





$(document).ready(function() {
 $('div.capitulo a[@href*=wikipedia]').each(function(index) {
   var $thisLink = $(this);												 
   $thisLink.attr({
	 'rel': 'external',
	 'id': 'enlacewiki-' + index,
	 'title': 'aprende más sobre ' + $thisLink.text() + ' en la Wikipedia'
	 
	  });
  });
});




















/*$(document).ready(function() {
  $('div.capitulo a[@href*=wikipedia]').each(function(index) {
    var $thisLink = $(this);
    $thisLink.attr({
      'rel': 'external',
      'id': 'wikilink-' + index,
      'title': 'aprende más sobre ' + $thisLink.text() + ' en la Wikipedia'
    });
  });
});*/



$(document).ready(function() {
$('<a href="#arriba">volver arriba</a>').insertAfter('div.capitulo p:gt(3)');
$('<a id="arriba" name="arriba"></a>').prependTo('body');
});
























/*$(document).ready(function() {
  $('<a href="#arriba">volver arriba</a>');
  $('<a id="arriba"></a>');
});*/






















/*$(document).ready(function() {
  $('<a href="#top">volver arriba</a>').insertAfter('div.capitulo p');
  $('<a id="top" name="top"></a>').prependTo('body');
});*/


/*$(document).ready(function() {
$('div.capitulo a').attr({'rel': 'external'});
						   });*/





/*$(document).ready(function() {
 $('div.capitulo a').each(function(index) { 
   $(this).attr({
	 'rel': 'external',
	 'id': 'enlacewiki-' + index
	  });
  });
});*/













































