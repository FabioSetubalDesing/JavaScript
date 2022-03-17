//criando um objeto
var pessoa1 = {
    //criando propridades para o objeto
    //quando for atribuir uma nova propriedade usar a "virgula"
    nome:"fabio",
    idade:21,
    altura:1.80,
    trabalho:"Dev"
    
}

console.log(pessoa1);

var pessoa2 = {
    nome:"valor que vai ser alterado pela função",
    //Em uma propriedade pode se usar uma função 
    //nâo prescisa dar nome para função
    MudarValor:function(){
    //pode se acessar a propriedade do  objeto usando o this
    //o this so pode ser usado dentro da função
    this.nome = "Fabio JR";
    //iserir console.log para mostra novo valor 
    console.log(this.nome)    
    }
}

//chamar função do objeto
pessoa2.MudarValor();
