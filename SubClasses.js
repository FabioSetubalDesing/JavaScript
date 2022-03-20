//criando uma Super Classe
class Animal{
    constructor(name){
        this.name=name
    }
    eat(){
        console.log(this.name + " está comendo");
    }
}

//Sub Classe
// extends serve para herda os recursos de uma class
class Cat extends Animal{

}
//criando um objeto cat com as funcoes do Animal
var cat = new Cat("Patricia");
cat.eat();