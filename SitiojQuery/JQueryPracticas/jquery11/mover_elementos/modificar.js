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


//NUEVO CÓDIGO PARA EL VIDEOTUTORIAL 11

/*$(document).ready(function() {
  $('span.notapie').insertBefore('#pie');
});*/

$(document).ready(function() {
  $('<ol id="notas"></ol>').insertAfter('div.capitulo');
  $('span.notapie').each(function(index) {
    $(this)
      .before('<a href="#nota-pie-' + (index+1) + '" id="contexto-' + (index+1) + '" class="contexto"><sup>' + (index+1) + '</sup></a>')
      .appendTo('#notas')
      .append( '&nbsp;(<a href="#contexto-' + (index+1) + '">contexto</a>)' )
	  .wrap('<li id="nota-pie-' + (index+1) + '"></li>');
  });
});

































