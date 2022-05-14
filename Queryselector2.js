//PARA PROPRIEDADES DO CSS QUE TEM VARIAS PALAVRAS É NECESSARIO ESCREVE EM CAMELCASE
//EXEMPLO DE CAMELCASE -> border-radius para borderRadius

function mudarcor(){
//acessando um elemento html -> P atraves do ID
let paragrafo1 = document.querySelector("#p1");
//acessando a propriedade cor do paragrafo
paragrafo1.style.color = "#00ff00";
//acessando background do paragrafo
paragrafo1.style.backgroundColor = "#ff00ff";

}

function mudarcordiv(){
//acessando um elemento html -> DIV atraves do ID
let div1 = document.querySelector("#div1");
//acessando o atributo background da div 
div1.style.backgroundColor = "#0000ff";

}

function mudarcordiv(){
//acessando um elemento html -> DIV atraves do ID
let div1 = document.querySelector("#div1");
//acessando o atributo background da div 
div1.style.backgroundColor = "#0000ff";
    }

function mudarcordiv2(){
//acessando um elemento html -> DIV atraves do ID
let div2 = document.querySelector("#div2");
//acessando o atributo borde-radius da div 
div2.style.borderRadius= "50px";
    }

function imagem(){
//acessando elemento -> IMG
let foto = document.querySelector("img");
foto.style.border = "5px solid red";
}

function tudo(){
//acessando div atraves do id
let div3 = document.querySelector("#div3");
//alterando seu background
div3.style.backgroundColor = "rgb(182, 230, 38)";

//acessando paragrafo da div atraves do id
let paragrafo2 = document.querySelector("#p2");
//alterando tamanho do paragrafo
paragrafo2.style.fontSize = "20px";
//alterando cor do paragrafo
paragrafo2.style.color= "red";
//alterando background do paragrafo
paragrafo2.style.backgroundColor="green";

//acessando o elemento img dentro da div atraves do id
let imagem = document.querySelector("#img2");
//aplicando uma borda para imagem
imagem.style.border = "5px solid lightBlue";
//arredondando a borda da imagem
imagem.style.borderRadius = "50px";
//aplicando uma posição absoluta para imagem
imagem.style.position = "relative";
//abaixo vai estar usando o left e o top para mover a imagem dentro da div
imagem.style.left = "143px";
imagem.style.top = "70px";
}

/*

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8"/>
<!--chama arquivo css externo-->
<link rel="stylesheet" type="text/css" href="" media="screen" />
<title>HTML5 – Estrutura básica</title>

<style>
.botao{
    height: 40px;
    width: 140px;
    background-color: rgb(146, 147, 150);
    color: rgb(0, 0, 0);
}

#div1{
    width: 200px;
    height: 200px;
    background: red;
}
#div2{
    width: 200px;
    height: 200px;
    background: green;
}
#div3{
    width: 500px;
    height: 400px;
    background: blue;
}
#p1{
    font-size: large;
    color: rgb(64, 21, 220);
    position: absolute;
}

</style>

</head>
<body>
<button class= "botao" onclick="mudarcor()">click em mim!</button>
<p id="p1">oi eu sou um paragrafo</p>
<br><br><br><br><br>

<button class= "botao" onclick="mudarcordiv()">click em mim!</button>
<div id="div1"></div>

<button class= "botao" onclick="mudarcordiv2()">click em mim!</button>
<div id="div2"></div>

<button class= "botao" onclick="imagem()">click em mim!</button><br>
<img src="https://profmigueljunior.files.wordpress.com/2012/10/pequenas-coisas.jpg" alt="">
<br><br><br><br>

<button class= "botao" onclick="tudo()">click em mim!</button><br>
<div id="div3">
<p id="p2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
 Autem temporibus fugit nesciunt expedita reprehenderit dolorum blanditiis quis optio veritatis labore dolore officia,
 magni quam quasi, unde voluptas ad dolor officiis?</p>

<img id="img2" src="https://pm1.narvii.com/6982/f7b5f375b1fa10510eb2f216996e767f133b1963r1-200-200v2_hq.jpg" alt="">

</div>

<!--chama arquivo javascript externo , tem sempre que ficar no final da pagina-->
<script type="text/javascript" src="Queryselector2.js"></script> 
</body>
</html>

*/