//criando uma Super Classe
class Animal{
    constructor(name,sons){
        this.name=name
        this.sons=sons
    }
    eat(){
        console.log(this.name + " está comendo");
        console.log("SOM DE " + this.name +" "+ this.sons);
    }
}
//Sub Classe
// extends serve para herda os recursos de uma class
class Cat extends Animal{
}
//criando um objeto cat e chamndo as funcoes do Animal
var cat = new Cat("Patricia", "Meow Meow Meow");
cat.eat();
