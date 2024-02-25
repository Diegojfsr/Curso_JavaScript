
// Criando Objetos com métodos

let pessoa = {
    nome: "Mateus",
    idade: 29,
    falar: function(){ // metodo falar
        console.log("Olá,tudo bem?");
    },
    soma: function(a, b){ //metodo somar
        return a + b;
    }
};
console.log(pessoa.nome);
pessoa.falar(); // chama o metodo falar

var soma = pessoa.soma(2, 2);
console.log(soma); // chama o metodo soma




