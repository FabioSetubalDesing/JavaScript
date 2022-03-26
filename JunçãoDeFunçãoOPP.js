//criando objeto orientado
class Carro{

constructor(){}

//criando funções 
//nao é nescessario a chave "function" basta passar o nome abri/fechar parenteses"()" e chaves"{}"
Ligar(){
    console.log("você ligou o Carro");
}

dirigir(){
    console.log("você está dirigindo..");
}

estacionar(){
    console.log("você estacionou o carro");
}

desligar(){
    console.log("você desligou o carro");
}

//No paremetro a seguri vai jnutar todas as funções em um lugar só
juntarTodasFuncao(){
//dentro do bloco de comando está chamando todas as funções por ordem
this.Ligar();
this.dirigir();
this.estacionar();
this.desligar();
}


}
//criando um objeto
var  carro1 = new Carro();
//chamando objeto com todas as funçoes
carro1.juntarTodasFuncao();