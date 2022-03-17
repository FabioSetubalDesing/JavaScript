//crinado uma Class para objetos
class Animal{
    //criando  um construtor para a informação dos objetos
    //no constructor e possivel passar parametros
    constructor(nome,habitate,peso){
        //this e usado para se referir ao objeto que ta sendo criado
        this.nome = nome;
        this.habitate = habitate;
        this.peso = peso;
        //pode ser criar um objeto sem que seja nescessario um parametro
        //pode ser criar um objeto com um valor declarado string ou numeros
        //(pode se usar valores boleanos)
        this.asas = "Não tem Asas";     
    }
//criado uma função dentro da class nao prescisa da palavra chave(fuction)
    comida(comer){
        console.log("carne non non");
    }
//criando uma função que usa if e else
    comida2(comer){
        //criando if
        if(comer === "capim"){
            console.log("Capim non non");
        }
        //criando else
        else{
            console.log("discarto");
        }
    }    


}
//criando objetos e atribuindo valores aos parametros da classe
var anima1 = new Animal("Leão","Savana",120);
var animal2 = new Animal("Vaca","Fazenda","250kl");

//mostra no console da web os resultados
console.log(anima1);
//chamando funçao da classe Animal para a variavel animal1 
anima1.comida();

console.log(animal2);
//chamando funcão e passando valor para o parametro
animal2.comida2("capim");