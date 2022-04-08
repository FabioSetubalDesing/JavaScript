//criando um novo elemento, para criar um novo elemento  é utilizado "createElementl("tagName","opçao") 
var paragrafo = document.createElement("p");
//para adiciona um texto para o novo elemento "p" é necessário  usar  o nome da variavel e "innerHTML" */
paragrafo.innerHTML = "novo parágrafo adicionado pelo javascript";
//para o elemento acima aparece na pagina html ele precisa ser inserido dentro de outro elemento(aninhado) 
   
//abaixo o elemento "body" é guardado dentro de uma variavel , o elemento "body" possui o ID = "Pai"
var Corpohtml = document.getElementById("Pai");
   
//abaixo o elemendo "body" serve de elemento "pai" para o novo elemento "paragrafo"
Corpohtml.appendChild(paragrafo);
   
/*abaixo vai esta ensinando a remove um elemento da pagina html ,
no caso oque sera removido é itens de uma lista de ingredientes*/

//para remove um elemento primeiro voce tem que acessar o pai desse alemento
var Lista = document.getElementById("lista");
   
//depois tem que acessar o elemento filho (que é o elemento a ser removido)
var Laranja = document.getElementById("item3");
   
//E por ultimo e so acessar o elemento pai, adicionado o removeChild(nome do elemento filho)
Lista.removeChild(Laranja);

/*

<!doctype html>
<html lang="pt-br">
<head>
<meta charset="utf-8"/>
 <title></title>
 
</head>
<body id = "Pai" >

<!--lista de ingredientes-->
<ul id="lista">
  <li id="item1">morango</li>
  <li id="item2">abacaxi</li>
<!--abaixo o item que sera removido pelo javascript-->
  <li id="item3">laranja</li>
</ul>

 <script src="oi.js"></script>
</body>
</html>

*/