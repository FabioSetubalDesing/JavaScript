//accesando a o elemento "h1" atraves do ID
//innerHTML é para recura o texto do "h1"
document.getElementById("titulo").innerHTML = "Olá Mundo modificado pelo JavaScript";

//voce tbm pode usar variaveis para interagir com elementos HTML
var mudar_P1 ="paragrafo mudado com variavel";
document.getElementById("p1").innerHTML = mudar_P1;
//pode se usar numeros como valor
document.getElementById("p2").innerHTML = 123;
//pode altera nomes de elementos como "Button" por exemplo
document.getElementById("btn1").innerHTML = "butao  alterado pelo javascript";

//voce tbm pode usar funcoes para alterar o elemento HTML
function lista1(){
    document.getElementById("l1").innerHTML = "coffe modificado pela função";
}

lista1();

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

    <h1 id="titulo">Olá mundo!</h1>

    <p id="p1">Paragrafo 1</p>
    <p id="p2">Paragrafo 1</p>

    <button id="btn1">Click em MIM!!!</button>
    
    <ul>
        <li id="l1">Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
    </ul>

<!--chama arquivo javascript externo , tem sempre que ficar no final da pagina-->
<script type="text/javascript" src="interagindoHTML.js"></script> 
</body>
</html>

*/ 