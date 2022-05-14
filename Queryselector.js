//acessando um elemento html -> h1
function mudarh1() {
let paragrafo = document.querySelector("h1");
//trocando o texto do h1 apos ser clicado pelo botao
paragrafo.innerHTML = "teste deu certo";
}

//acessando um elemento html -> IMG
function foto() {
let imagem = document.querySelector("img");
//trocando a imagem apos ser clicada pelo botao
imagem.src = "https://portalgerais.com/wp-content/uploads/2014/11/o-que-te-faz-feliz.jpg";
}

//acessando o secundo elemento -> h1 pelo ID
function mudarh1ID(){
let titulo = document.querySelector("#id_h1");
//trocando o texto apos ser clicado pelo botao
titulo.innerHTML = "teste deu certo 2";
}

//acessando um elemento html -> IMG atraves da classe
function foto2() {
let imagem = document.querySelector(".imag2");
//trocando a imagem apos ser clicada pelo botao
imagem.src = "http://www.unisalesiano.com.br/pastoral/wp-content/uploads/2021/10/Ev-06.jpg";
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

<button onclick="mudarh1()">click em mim</button>
<h1>eu sou um H1</h1>

<button onclick="foto()">click em mim</button> <br>
<img src="https://sejaleve.com/wp-content/uploads/2018/02/pequenas-alegrias-diarias.png" alt=""><br> <br> <br>

<button onclick="mudarh1ID()">click em mim</button>
<h1 id="id_h1">eu sou o h1 com id</h1>

<button onclick="foto2()">click em mim</button> <br>
<img class="imag2" src="https://www.ajufergs.org.br/blog/wp-content/uploads/2017/04/ganho_conquista.jpg" alt=""><br> <br> <br>

<!--chama arquivo javascript externo , tem sempre que ficar no final da pagina-->
<script type="text/javascript" src="Queryselector.js"></script> 
</body>
</html>

*/