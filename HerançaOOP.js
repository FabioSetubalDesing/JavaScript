//criando objeto orientado
var Carro = {
//metedo usando uma função   
motorL: function(){
    console.log("motor está ligado");
 }
}

//criando objeto orientado herdando os metodos
//"new object()" é usado para herda os metodos
var car1 = new Object(Carro);
//aqui "car1" está usando o metodo "motor" com sua função
car1.motorL();
//aqui "car1" está adicionando uma nova função 
car1.motorD = function(){
    console.log("motor desligado");
}
//aqui "car1" está chamando seu novo metodo "motorD" com sua função
car1.motorD();

//esse exemplo acima nao é muito ultilizado
//é mais comum o metodo abaixo usando classes

//criação de classe para herda metodos e propriedades
class Pessoas{
    constructor(nome,idade){
        this.nome = nome,
        this.idade = idade
    }
}

//criando objeto oriendado herdando a classe "Pessoas" com metodos e propriedades
// e passando valores aos seus  parametros
var pessoa1 = new Pessoas("Fabio",22);
//chamando objeto "pessoa1"
console.log(pessoa1);

//criando outra classe que herda os metodos e propridades da classe "Pessoas"
class Policial extends Pessoas{

    constructor(nome,idade,arma){
        super(arma)    
        this.nome = nome,
        this.idade = idade,
        this.arma = arma
        
    }
}

var policia1 = new Policial("miria",22,"pistola");

console.log(policia1);