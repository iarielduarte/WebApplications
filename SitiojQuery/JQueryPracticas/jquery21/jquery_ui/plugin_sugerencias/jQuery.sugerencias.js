(function($){
	$.fn.sugerencias = function(opciones) {
		
		var
		  defecto = {
		  	background: '#FC3',
			color: '#003',
			rounded: false
		  },
		  settings = $.extend({}, defecto, opciones);
		  
		  this.each(function() {
		  	var $this = $(this);
			var titulo = this.title;
			
			if($this.is('a') && $this.attr('title') != '') {
				this.title = '';
				$this.hover(function(e) {
					// ratón over
					$('<div id="sugerencias" />')
					  .appendTo('body')
					  .text(titulo)
					  .hide()
					  .css({
					  	backgroundColor: settings.background,
						color: settings.color,
						top: e.pageY + 10,
						left: e.pageX + 20
					  })
					  .fadeIn(1000);
					  
				  if(settings.rounded) {
				  	$('#sugerencias').addClass('rounded');
				  }
				}, function() {
					// ratón out
					$('#sugerencias').remove();
				});	
			}
			
			$this.mousemove(function(e) {
				$('#sugerencias').css({
					top: e.pageY + 10,
					left: e.pageX + 20
			     });
			});
			
		  });
		  // devolvemos el objeto jQuery para permitir su uso en cadena.
		  return this;
	}
})(jQuery);
