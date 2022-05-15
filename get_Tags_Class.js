function lista(){
//armazenando e recuperando a lista das tags -> li
//com getElementsByTagName podemos obter uma coleçao de tags com o mesmo nome
let lista = document.getElementsByTagName("li");

//recuperando a tag -> P com id mostra
let resultado = document.querySelector("#mostra");
//adicionando o tamanho da lista para tag-> P com id mostra
resultado.innerHTML = "Essa lista contem " + lista.length + " itens!";

//recuperando a tag -> P com id mostra1
let resultado1 = document.querySelector("#mostra1");
//adicionando o nome do elemento [1] da lista para tag-> P com id mostra1
resultado1.innerText = lista[1].innerHTML + " é o elemento 1 da lista";

}

function lista2(){
//recuperando lista pela class
let lista2 = document.getElementsByClassName("urgente");
//recuperando a tag -> P com id mostra2
let resultado = document.querySelector("#mostra2");
//contando os elementos que possui a class urgente para tag->P com id mostra2
resultado.innerHTML = "foi contado apenas os itens que contem a class urgente-> " + lista2.length;

//armazenando a tag -> P com id mostra3
let resultado1 = document.querySelector("#mostra3");
//neste caso a maça[0] e o abacaxi[1] ele so conta os itens da class urgente
resultado1.innerText = lista2[1].innerHTML;
}

/*

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8"/>
<!--chama arquivo css externo-->
<link rel="stylesheet" type="text/css" href="" media="screen" />
<title>HTML5 – Estrutura básica</title>
</head>
<body>

<button onclick="lista()">MOSTRA A QUANTIDADE DE ITENS</button>
<ul>
    <li style="font-size: 30PX;">laranja</li>
    <li style="font-size: 30PX;">preto</li>
    <li style="font-size: 30PX;">rosa</li>
</ul>

<p id="mostra" style="font-size: 30PX;"></p>
<p id="mostra1" style="font-size: 30PX;"></p>

<button onclick="lista2()">MOSTRA A QUANTIDADE DE ITENS</button>
<ol>
    <li class="urgente" style="font-size: 30PX;">maça</li>
    <li style="font-size: 30PX;">pera</li>
    <li class="urgente"  style="font-size: 30PX;">abacaxi</li>
</ol>
<p id="mostra2" style="font-size: 30PX;"></p>
<p id="mostra3" style="font-size: 30PX;"></p>

<!--chama arquivo javascript externo , tem sempre que ficar no final da pagina-->
<script type="text/javascript" src="get_Tags_Class.js"></script> 
</body>
</html>

*/