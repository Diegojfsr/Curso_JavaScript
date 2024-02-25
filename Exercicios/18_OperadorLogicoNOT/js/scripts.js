
// Operador lógico NOT (!)


// inverte a saida de true pra false
if(!true){
    console.log("Pasou1");
}

// inverte a saida de false pra true
if(!false){
    console.log("Pasou2");
}


var nome = "Mateus"
if(nome == "Mateus"){
    console.log("OK1");
}

var nome = "Mateus"
if(!nome == "Mateus"){
    console.log("OK2");
}else{
    console.log("Erro1");
}

var nome = "Mateus"
if(!(nome == "Mateus")){
    console.log("OK3");
}else{
    console.log("Erro2");
}

var nome = "Mateus"
if(!(nome == "João")){
    console.log("OK4");
}else{
    console.log("Erro");
}


