var x;
x=$(document);
x.ready(function() {
    var x;
	x = $("#hola");
	x.click(cambioColor);
});

function cambioColor(){
	var x;
	x = $("#hola");
	x.css("color","#FFF");
	x.css("background-color","#09F");
	x.css("font-size","24px");
	x.css("font-weigh","bold");
	x.css("color","#00F");
	x.css("border","1px solid black");
}