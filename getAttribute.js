//o getAttribute so funciona para as propriedades que estao dentro das tags 

//função declarda para pegar a propriedade do primeiro paragrafo
function atrp1() {
//armazenando o peimeiro pragrado na variavel p1 atravez do id
    let p1 = document.querySelector(
     "#p1");
//amarzenando todas as propriedades do style do primeiro paragrafo  
    let propriedadeP1 = p1.getAttribute("style");

//amarzenando a tag -> p com id propriedades
    let propriedades = document.querySelector("#propriedades");
//atribuindo as propriedades da tag -> P dentro da tag -> P com id propriedades 
    propriedades.innerText ="STYLE DO PARAGRAFO="+ "   "+ propriedadeP1;
}

function atrbtn1(){
//amarzenando a tag -> img 
    let img = document.querySelector("img");
//amerzenando a propriedade src da tag img
    let propriedadeimg = img.getAttribute("src");
    
//amarzenando a tag -> p com id propriedades
    let propriedades = document.querySelector("#propriedades");
//atribuindo as propriedades da tag -> img dentro da tag -> p 
    propriedades.innerText = "SRC DA IMAGEM" + "=  "+ propriedadeimg;
}

function atrrA1(){
//armazenando a tag -> A 
    let link = document.querySelector("a");
//amarzenando a propriedade  da tag -> A
    let propriedadeA = link.getAttribute("href");

//armazenando a tag -> p com o id propriedades
    let propriedades = document.querySelector("#propriedades");
//atribuindo as propriedades da tag -> A dentro da tag -> p 
    propriedades.innerText = "HREF DA TAG A="+ "   "+ propriedadeA;
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

<button onclick="atrp1()">click em mim!</button>
<p id="p1" style="Color: hsl(0, 100%, 50%);
 text-align: center;
 background-color:gray;">sou o primeiro paragrafo</p>
 <br>

<button onclick="atrbtn1()">click em mim!</button><br><br>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJ5xBM8KdMqFCxfqhNccf6OiO6DziBMhMIg&usqp=CAU" alt="">
<br><br><br>

<button onclick="atrrA1()">click em mim!</button><br>
<a href="https://www.youtube.com" target="_blank" style="font-size:50px;">youtube</a>

<br><br><br>
<p id="propriedades" style="font-size:100px;"></p>

<!--chama arquivo javascript externo , tem sempre que ficar no final da pagina-->
<script type="text/javascript" src="getAttribute.js"></script> 
</body>
</html>

*/