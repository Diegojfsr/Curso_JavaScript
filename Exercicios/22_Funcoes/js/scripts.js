
// Funções (function)


function primeiraFuncao(){
    console.log("Hello World das funções.");
}

primeiraFuncao();



function dizerNome(nome){
    console.log("O nome é: " + nome);
}
dizerNome("Mateus");
dizerNome("Pedro");
dizerNome("Davi");


var nomeBancoDados = "João";
dizerNome(nomeBancoDados);

function soma(a, b){
    var soma = a + b;
    return soma;
}

var somaUm = soma(2 ,5);
console.log(somaUm);

var somaDois = soma(5 ,5);
console.log(somaDois);

console.log(soma(4, 5));

