
// Operador lógico OR (||)

var idade = 12;
var nome = "João";

if(nome == "João" || idade > 14){
    console.log("Pode entrar na aula.");
}else{
    console.log("Não pode entrar.");
}

if(nome == "João" && 15 > 20 || 10 == 10){
    console.log("Testando");
}


if(nome == "João" || 15 > 20 && 10 == 10){
    console.log("Entrou");
}else{
    console.log("Não entrou")
}



