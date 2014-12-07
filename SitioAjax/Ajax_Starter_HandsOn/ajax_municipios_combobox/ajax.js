/**
 * @author miguel
 */
var ajax_req;

function ajaxRequestBasica() {

        if (window.XMLHttpRequest) // Firefox, Safari, Opera, etc
		{ 
            ajax_req = new XMLHttpRequest();
        } else if (window.ActiveXObject) // Internet Explorer
		{ 
            try 
			{
                ajax_req = new ActiveXObject("Msxml2.XMLHTTP");//Versões mais novas
            } catch (e) 
			{
                try 
				{
                    ajax_req = new ActiveXObject("Microsoft.XMLHTTP");//Versão mais antiga
                } catch (e) 
				{
				}
            }
        }

        if (!ajax_req) {
            alert("Problemas com a requisição!");
            return false;
        }
        ajax_req.onreadystatechange = processarRequisicaoComboBox;//Quando  o atributo readyState for alterado invocar a funcao
        ajax_req.open('GET','municipios.php?uf='+document.getElementById("uf").options[document.getElementById("uf").selectedIndex].value, true);//Abre a conexão tipo, url e boolean indicando se é assíncrona
        ajax_req.send(null);//Informação a ser enviada junto, utilizado no POST
        document.getElementById("img").style.display="block";
}

function processarRequisicaoComboBox()
{
	var selMun = document.getElementById("municipios");					
	selMun.innerHTML = "";
	selMun.options[0] = new Option ("Carregando...", "Carregando...");
	if(ajax_req.readyState == 4)//Completo
	{
		if(ajax_req.status == 200)//OK
		{
			if(ajax_req.responseXML)
			{
				selMun.innerHTML = "";
				var resposta = ajax_req.responseXML.getElementsByTagName("municipio");
				for(var i = 0; i < resposta.length; i++)
				{
					var nome = resposta[i].firstChild.nodeValue;
					selMun.options[selMun.options.length] = new Option (nome, nome);
				}
			}
		}
	    document.getElementById("img").style.display="none";		
	}
}
