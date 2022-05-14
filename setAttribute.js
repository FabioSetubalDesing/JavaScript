//so da para altera propriedades que estjam dentro das tags 

function P() {
//armazenando a tag -> P 
let p = document.querySelector("#p1");
//alterando a propriedade do style dentro da tag -> P
//primeiro coloque o nome da propriedade entre aspas e depos de uma virgula, abra aspas novamente
// e por fim altere ou adicione alguma propiedade
let atributosp1 = p.setAttribute("style","background-color:gray; color:blue; font-size:30px; text-align:center;");
    }

function IMG(){
//amarzenando a tag -> img
let img = document.querySelector("img");
//alterando SRC da tag -> img
let mudarImagem = img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gFSVKL-zPiHvo3L2dYofptUPAeTYSW8B8Q&usqp=CAU");

}

function Link(){
//armazenando a tag -> A 
let A = document.querySelector("a");
//alterando o HREF da tag -> A (tem que alterar primeiro o href e depois o conteudo)
let mudarLink = A.setAttribute("href","https://www.google.com");
//modificando o conteudo dentro da tag
A.innerHTML = "Google";

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

<button onclick="P()">click em mim!</button>
<p id="p1" style="Color: red;
 text-align: center;
 background-color:gray;">sou o primeiro paragrafo</p> 
 
<button onclick="IMG()">click em mim!</button><br><br>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6yAtKg5frxI8vUkGCuDmNqjprpT9_M214A&usqp=CAU" alt="">
<br><br>

<button onclick="Link()">click em mim!</button><br><br>
<a href="https://www.youtube.com" target="_blank" style="font-size:50px ;">Youtube</a>


<!--chama arquivo javascript externo , tem sempre que ficar no final da pagina-->
<script type="text/javascript" src="setAttribute.js"></script> 
</body>
</html>

*/