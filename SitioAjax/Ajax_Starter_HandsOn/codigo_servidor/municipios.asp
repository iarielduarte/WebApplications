<%
Dim i 'variavel do la�o
Dim nom, uf, comprimento 'variavel do nome, uf e comprimento
Dim municipiosXML 'Objeto que representa o arquivo
Dim municipios 'representa os elementos do arquivo
%>

<%

nom = Request("nome") 'obtem o parametro nome
uf = Request("uf") 'obtem o parametro uf

Set municipiosXML = Server.CreateObject("Microsoft.XMLDOM") 'Cria o objeto Microsoft.XMLDOM
municipiosXML.setProperty "ServerHTTPRequest", true 'Define propriedade do objeto
xmlPath = "municipios.xml" 'Define o nome do arquivo xml
municipiosXML.async = False 'Define caracteristica do download do documento
municipiosXML.load(Server.MapPath(xmlPath)) 'Carrega o arquivo

Set municipios = municipiosXML.documentElement 'Carrega os elementos do arquivo xml
Response.Clear 'Limpa a resposta
Response.ContentType="text/xml" 'Define o conte�do da resposta
Response.write ("<?xml version='1.0' encoding='ISO-8859-1' standalone='yes'?>") 'Adiciona o cabe�alho xml a resposta
Response.write ("<resultado>") 'Inicia a constru��o do elemento resultado
'Percorre todos os elementos contidos no arquivo
For i = 1 To (municipios.childNodes.length -1)
	'Testa o comprimento do par�metro nome
	IF (Len(nom) > Len(municipios.childNodes(i).childNodes(0).Text)) Then
		comprimento = Len(municipios.childNodes(i).childNodes(0).Text) 
	Else
		comprimento = Len(nom)
	End If
	'Testa a UF
	IF (Len(uf) = 0 or ucase(municipios.childNodes(i).childNodes(2).Text) = ucase(uf)) Then
		'Testa o nome do munic�pio, se for similar adiciona a resposta
		IF (Len(nom) = 0 or ucase( Left(municipios.childNodes(i).childNodes(0).Text ,comprimento)) = ucase(nom)) Then
			Response.write("<municipio>" & municipios.childNodes(i).childNodes(0).Text & "</municipio>")
		End If
	End If
Next
'Fecha o elemento de resposta
Response.write("</resultado>")
%>
