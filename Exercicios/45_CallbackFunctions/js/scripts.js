

// Callback functions


// metodo  console.log
function soma1(a, b){
    var op = a + b;
    console.log(op);
}

function multiplicacao1(a, b){
    var op = a + b;
    console.log(op);
}
soma1(2,2);
multiplicacao1(2, 4);



// metodo callback

function exibir(num){
    console.log("A operação resultou em: " + num);
}

function soma(a, b, callback) {
    var op = a * b;
    callback(op);
}

function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
}

soma(2,2, exibir);
multiplicacao(2, 4, exibir);

