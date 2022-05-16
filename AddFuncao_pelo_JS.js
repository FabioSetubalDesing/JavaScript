//armazenando a tag -> P com id P1
var paragrafo1 = document.querySelector("#P1");
//armazenando o button com a ID Botao0 
var botao = document.querySelector("#Botao0");
//adicionando evento onclik para Botao e função public
botao.onclick = public;
//criado uma função para  adiciona um texxto para paragrafo1
function public(){
    paragrafo1.innerText="foi publicado";
}
//armazenando a tag -> button com ID Botao1
var botao1 = document.querySelector("#Botao1");
//adicionando um evento para botao1
botao1.onclick = Aparencia;
//função para botao1
function Aparencia(){
    botao.style.fontWeight = "bold";
    botao.style.backgroundColor = "green";
}

/* HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8"/>
<!--chama arquivo css externo-->
<link rel="stylesheet" type="text/css" href="" media="screen" />
<title>HTML5 – Estrutura básica</title>

</head>
<body>

<button id="Botao0">Publique</button>
<button id="Botao1">Altere a aparencia do botao</button>
<p id="P1"></p>

<!--chama arquivo javascript externo , tem sempre que ficar no final da pagina-->
<script type="text/javascript" src="script.js"></script> 
</body>
</html>

*/





