//Função usada no botao1
function salvar(){
    document.getElementById("Salvar").innerHTML = " Progresso salvo ";
}
//Função usada no botao2
function excluir(){
    document.getElementById("Salvar").innerHTML = " Progresso excluido";
}
//Função usada no botao3
function limpa(){
    document.getElementById("Salvar").innerHTML = " ";
}

//PARTE DO COMMENTARIO

//COMENTARIO1
//função usada no bnt1
function registrar1(){
//Acessando o input(entrada) do usuario1 (acessar dentro de uma função de preferencia)
 var usuario1 = document.getElementById("modTexto1").value;
//atualizando a pagina web
 document.getElementById("menssagem").innerHTML = "YOU " + usuario1;
}

function registrar2(){
var usuario2 = document.getElementById("modTexto2").value;

document.getElementById("menssagem2").innerHTML = "Olá " + usuario2;
}

/* HTML deste JavaScript
 
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8"/>
<!--chama arquivo css externo-->
<link rel="stylesheet" type="text/css" href="" media="screen" />
<title>HTML5 – Estrutura básica</title>
<Style>
#butao1{
    position:absolute;
    top: 37%;
    left: 39%;
    color: red;
    width: 300px;
}
#butao2{
    position:absolute;
    top: 41%;
    left: 39%;
    color: red;
    width: 300px;
}
#butao3{
    position:absolute;
    top: 45%;
    left: 39%;
    color: red;
    width: 300px;
}
#Salvar{
    position:absolute;
    top: 50%;
    left: 45%;
    font-size: large;
}
#modelo2{
    position:absolute;
    top: 0%;
    left: 75%;
}
#modTexto1{
    position:absolute;
    top: 70%;
    left: 0.5%;
}
#modTexto2{
    position:absolute;
    top: 70%;
    left: 75%;
}
#bnt1{
    position:absolute;
    top: 74%;
    left: 0.5%;
}
#bnl1{
    position:absolute;
    top: 74%;
    left: 5%;
}
#bnt2{
    position:absolute;
    top: 79%;
    left: 75%;
}
#bnl2{
    position:absolute;
    top: 79%;
    left: 80%;
}
#menssagem2{
    position:absolute;
    top: 5%;
    left: 75%;
}

</Style>

</head>
<body>

<button id="butao1" onclick="salvar()">Salvar Progresso</button>
<p id="Salvar"></p>

<button id="butao2" onclick="excluir()">Excluir Progresso</button>
<p id="Salvar"></p>

<button id="butao3" onclick="limpa()">Limpar</button>
<p id="Salvar"></p>

<!--Modelos de comentarios-->
<h3>Modelo de comentario 1</h3>

<p id="menssagem"></p>
<button id="bnt1" onclick="registrar1()">Enviar</button>
<form>
<input id="modTexto1" type="text" placeholder="Faça um comentário">
<input id="bnl1" type="reset">
</form>

<h3 id="modelo2">Modelo de comentario 2</h3>
<p id="menssagem2"></p>
<button id="bnt2" onclick="registrar2()">Enviar</button>
<form>
<textarea id="modTexto2" rows="3" cols="25" placeholder="Faça um comentário"></textarea>
<input type="reset" id="bnl2" value="Limpar">
</form>
 
<!--chama arquivo javascript externo , tem sempre que ficar no final da pagina-->
<script type="text/javascript" src="interacao_elementos.js"></script> 
</body>
</html>

*/