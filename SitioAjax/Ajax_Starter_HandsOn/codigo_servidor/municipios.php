<?php

// Procura pelo parâmetro enviado via POST ou GET chamado 'nome'
$nom = $_POST['nome'] == null ? $_GET['nome'] : $_POST['nome'];

// Procura pelo parâmetro enviado via POST ou GET chamado 'uf'
$uf = $_POST['uf'] == null ? $_GET['uf'] : $_POST['uf'];

//Carrega o arquivo municipios.xml que representa nosso banco de dados
$municipios_xml = simplexml_load_file('municipios.xml');

// define o tipo de conteúdo que será retornado pelo servidor (resposta)
header('Content-Type: text/xml');

// Adiciona a resposta o cabeçalho xml, aqui é iniciada a montagem do arquivo xml
echo '<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>';

// Elemento raiz
echo '<resultado>';

// de acordo com os parâmetros monta o xml
foreach($municipios_xml->municipio as $mun)
{
	if($uf == null || strcasecmp($uf, $mun->sigla) == 0)
	{
		$comprimento = (strlen($nom) > strlen($mun->nome)) ? strlen($mun->nome) : strlen($nom);		
		//faz os testes e verifica se o parâmetro é similar ao nome do munícipio
		if($nom == null || substr_compare($mun->nome, $nom, 0, $comprimento, true) == 0)
		{
			//Adiciona o município a variável resultado, que será o corpo do elemento raiz <resultado>
			$resultado = $resultado.'<municipio>'.$mun->nome.'</municipio>';
		}
	}
}

//Adiciona o resultado a resposta
echo $resultado;
// fecha o elemento raiz
echo '</resultado>';
//final da resposta do servidor
?>