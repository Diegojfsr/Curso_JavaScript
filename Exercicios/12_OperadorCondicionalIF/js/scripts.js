
// Operadores Condicionais: IF

// usando o true
console.log("Antes do if");
if(true) {
    console.log("Testando o if");
}
console.log("Depois do if");

// usando o false
console.log("Antes do if");
if(false) {
    console.log("Testando o if");
}
console.log("Depois do if");



var idade = 19;
if(idade>18){
    console.log("Pode fazer a carteira de habilitação")
}

var idade = 16;
var idadeMinima = 18;
if(idade>idadeMinima){
    console.log("Pode fazer a carteira de habilitação")
}
if(idade<idadeMinima){
    console.log("Ainda não pode fazer a carteira de habilitação")
}