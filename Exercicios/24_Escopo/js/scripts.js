
// Escopo em JS (scope)

//scope global
var x = 1;
var y = 2;
console.log(x, y);

//scope local da funcao
function teste(){
    var z = 0;
    console.log(z);
    console.log(x); // variavel global pode ser chamada dentro do escopo local.
}
teste();
//console.log(z); // variavel local não pode ser chamada dentro do escopo global

function testando(){
    var z = 5;
    console.log(z);
}
testando(); // variaveis locais nao se misturam entre si.

// bloco de repeticao pertence ao scope global
if(true){
    var p = 1;
    var b = x;
}
console.log(p, b);

