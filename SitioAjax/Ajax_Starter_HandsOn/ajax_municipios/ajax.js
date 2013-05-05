var ajax_req;

function ajaxRequestBasic() {

        if (window.XMLHttpRequest) // Firefox, Safari, Opera, etc
		{ 
            ajax_req = new XMLHttpRequest();
        } else if (window.ActiveXObject) // Internet Explorer
		{ 
            try 
			{
                ajax_req = new ActiveXObject("Msxml2.XMLHTTP");//Versiones mas nuevas de IE
            } catch (e) 
			{
                try 
				{
                    ajax_req = new ActiveXObject("Microsoft.XMLHTTP");//Versiones mas antiguas de IE
                } catch (e) 
				{
				}
            }
        }

        if (!ajax_req) {
            alert("Problema con la petición al servidor");
            return false;
        }
        ajax_req.onreadystatechange = procesarPeticion;//Cuando el atributo readyState cambie llamara a la funcion 
        ajax_req.open('GET','municipios.php?nome='+document.getElementById("txtmunicipio").value+"&uf="+document.getElementById("txtuf").value, true);//Abre una conexio con (metodo 'GET' O 'POST', url, boolean indincando si es asincrono o no)
        ajax_req.send(null);//Envia la peticion
}

function procesarPeticion(){
	
	var salida = "";
	if(ajax_req.readyState==4){
		if(ajax_req.status==200){
			/*Obtener la respues del Servidor*/
			if(ajax_req.responseXML && ajax_req.responseXML.contentType == "text/xml"){
				var respuesta = ajax_req.responseXML.getElementsByTagName("municipio");
				salida += "<h3> Cantidad: "+respuesta.length+"</h3>";
				for(var i=0; i<respuesta.length; i++){
					salida += respuesta[i].textContent+"<br />";
				}
			}
		}
	}
	//alert("Estado R : "+ajax_req.readyState)
	document.getElementById("resultado").innerHTML = salida;
}