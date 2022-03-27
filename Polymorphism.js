/* Polymorphis é quando objetos tem a mesma chamada de metodo,
mas com comportamentos diferentes */

//criando uma classe de objetos
class Cor {
//criando uma funçao
    cores(){
        console.log("cor")
    }
}

//criando objeto
var vermelho1 = new Cor();
//Abaixo o objeto vermelho1 esta chamando a função "cores" normalmente
vermelho1.cores();
//Abaixo o objeto veemelho1 esta chamando a função "cores" alterando a sua função
vermelho1.cores = function(){
    console.log("vermelho");
}
// chamando a função "cores" com sua função ja alterada
vermelho1.cores();

//abaixo foi criada uma classe com os metodos de "Cor" e suas funcoes
class Soma2Cor extends Cor{
//pegando a função "cores" da Class Pai "Cor" e alterando 
    cores(){
        console.log("vermelho + azul = violeta");
    }
}

//criando objeto 
var VermAzul = new Soma2Cor();
//chamando a função de "cores" alterada pela classe "Soma2Cor"
VermAzul.cores();