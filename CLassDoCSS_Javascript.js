function negrito(){
//armazenado a tag -> P com class italico
    let negrito = document.querySelector("p");
//para adicionar uma class do CSS é classList.add
    negrito.classList.add("negrito");
}

function italico(){
//armazenado a tag -> P com class italico
    let remove = document.querySelector("p");
//removendo a classe negrito no css
    remove.classList.remove("negrito");
}

function ItaliceBold(){
//armazenando a tag -> P com class italico
    let addRemove = document.querySelector("p");
//adicionando e removendo a class negrito
    addRemove.classList.toggle("negrito");
}

function TwoClass(){
//armazenando a tag -> P com class italico
    let TwoClass = document.querySelector("p");
//adicionandop duas class a tag-> P 
    TwoClass.classList.add("fundo","underline");
}

function remove(){
//armazenando a tag -> P com class italico
    let RemoveClass = document.querySelector("p");
//removendo varias classes da tag ->
    RemoveClass.classList.remove("fundo","underline","negrito")   

}

/*  CSS

body{
    text-align: center;
}

button{
    margin: 30px;
    padding: 3px 12px;
    border-radius: 20px;
    font-weight: bold;
    border: 0px solid;
    outline: none;
    background-color: aquamarine;
    color: #4D4D87;
}

.italico{
    font-style: italic;
    font-size: large;
}

.negrito{
    font-weight: bold;
    font-size: large;
}
.fundo{
    background-color: yellow;
}
.underline{
    text-decoration: underline;
}

*/

/*  HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8"/>
<!--chama arquivo css externo-->
<link rel="stylesheet" type="text/css" href="style.css" media="screen" />
<title>HTML5 – Estrutura básica</title>
</head>
<body>

<button onclick="negrito()">coloca em negrito</button>
<button onclick="italico()">coloca em italico</button>
<button onclick="ItaliceBold()">italico e negrito</button>
<button onclick="TwoClass()">Adicionando duas classes</button>
<button onclick="remove()">REMOVE TODAS AS FORMATAÇÕE</button>

<p class="italico">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Fugit, ullam eligendi voluptate fugiat animi, suscipit porro
ratione ut eos quidem asperiores, molestiae ab a consequatur.
Cum autem cumque nulla necessitatibus!</p>

<!--chama arquivo javascript externo , tem sempre que ficar no final da pagina-->
<script type="text/javascript" src="script.js"></script> 
</body>
</html>

*/