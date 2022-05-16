function h3(){
//armazzenando todos os elementos -> h3 usando querySelectorAll
    let h3 = document.querySelectorAll("h3");

//armazenando a tag -> P com id mostra0
    let mostra = document.querySelector("#mostra0");
//adicionando o segundo texto h3 para tag -> P com id mostra0
    mostra.innerText = "foi recuperado o-> " + h3[1].innerHTML;
}

function h3class(){
//armazenando apenas os h3 com class urgente
//para recupera as class tem que coloca o ponto e o nome da class
    let h3 = document.querySelectorAll(".urgente");

//armazenado a tag -> P com id mostra0
    let mostra = document.querySelector("#mostra0");
//vai mostra o numero de itens com a class urgente
    mostra.innerText = "existem apenas "+ h3.length + " h3 com class";
}

function Duasclass(){
//armazenando a tag -> li que contem a class tech e filme
//para selecionar 2 class é so colocar uma virgula entre elas
    let techEfilme = document.querySelectorAll(".tech, .filme");

//armazenando a tag -> P com o id mostra1
    let mostra1 = document.querySelector("#mostra1");
//mostra o numero dos itens que contem as classes tech e filme
    mostra1.innerText = "as classes tech e filme contem " + techEfilme.length + " itens no total";

}

function todos(){
//armarzenando as tags e classes
//(pode amarzena tags ,classes e IDs)
    let elementos = document.querySelectorAll(".tech, .urgente, .filme, #mostra0");

//amarzena a tag -> P com id mostra2
    let mostra2 = document.querySelector("#mostra2");
    mostra2.innerText = elementos.length;
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
<button onclick="h3()">interaja com Todos os elementos h3</button>
<button onclick="h3class()">interaja  so com os h3 com class</button>
<h3 class="urgente">eu sou o 1 h3</h3>
<h3>eu sou o 2 h3</h3>
<h3 class="urgente">eu sou o 3 h3</h3>
<p id="mostra0"></p>


<button onclick="Duasclass()">click em mim!</button>
<ul>
    <li class="tech">pen drive</li>
    <li class="filme">one piece</li>
    <li class="filme">dragon ball</li>
    <li>luffy</li>
    <li>goku</li>
    <li>hiddan</li>
    <li class="tech">teclado</li>
    <li class="filme">o homem que desafiou o diabo</li>
    <li class="tech">memoria RAM</li>
</ul>
<p id="mostra1"></p>

<button onclick="todos()">click para ver a quantantidade de todos os elementos!</button>
<p id="mostra2"></p>


<!--chama arquivo javascript externo , tem sempre que ficar no final da pagina-->
<script type="text/javascript" src="PegandoVariosElementos.js"></script> 
</body>
</html>

*/
