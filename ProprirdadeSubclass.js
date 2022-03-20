//criando SuperClass
class humano{
    constructor(espada){
        this.arma = espada,
        this.vida = 100
    }
}

//criando SubClass
class Mago extends humano{
//constuctor
    constructor(cajado){
//usando o  metodo "super" chama o constructor da SuperClass
//metodo "super" tem que ser a primeira coisa criado no constructor 
        super(cajado),
//Abaixo do metodo "super" voce pode cria propriedades exclusivas
        this.vida = 150
        
    }
    atack(poder){
        console.log("swiipn " + poder + " dano");
    }
}

//criando objetos
var mago1 = new Mago("poder de fogo");
console.log(mago1);
//chamando fução de Mago
mago1.atack(25);
