//Criando uma Função
function PegarTotal (a,b){
    //rertona o valor de "a" e "b"para Função
    return a + b;
}
//criando variaveis
var n1 = 2;
var n2 = 3;
var total = PegarTotal(n1,n2);
//chamando  a variavel "total"
console.log(total);

//Criando Objeto orientado
var Cat = {
//Metodo com propriedade
fome: true,
cor: "Amarelo",

//Função
comer: function(){
//Criando uma função
Cat.fome = false;    
}


}

//chamando a função do "Cat" para atualizar Cat.fome "fome"
Cat.comer();
//Chamando metodo "fome" de "Cat"
console.log(Cat.fome);

//Criando um objeto orientado
var Carro = {
//Metodo com propriedade
milhagem: 12000,

//Função
Dirigir: function(milhas){
//O metodo "milhagem" vai armazena e somar a "milhas"
    Carro.milhagem += milhas;
}
}

//Chamando a Função dirigir e adicionando mais 100 de milhagem
Carro.Dirigir(100)
//Chamando metodo "milhagem" de "Carro"
console.log(Carro.milhagem);


//Cirando Objeto Oriendado
var Cofrinho = {
//Metodo com propriedade
valor: 0,

//Função 
AddCofrinho: function(contar){
//Pode ser usar tanto o "this.metodo" quanto o "Cofrinho.metodo" para se referi ao metodo
    this.valor = this.valor + contar;
}
}

//chamando funçao de Cofinho e atribuindo um valor ao metodo"valor
Cofrinho.AddCofrinho(100);
//chamando metodo "valor" de "Cofrinho"
console.log(Cofrinho.valor);