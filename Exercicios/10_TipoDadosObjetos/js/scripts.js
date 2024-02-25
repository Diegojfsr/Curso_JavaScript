
// Tipos de dados do tipo Objeto.


var obj = {
    nome: "Mateus",
    idade: 29,
    profissao: "Programador",
    estaTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);


console.log("O meu nome é:" + " " + obj.nome);

// Mudar propriedades do Objeto - Atribuição
obj.nome = "Pedro";
console.log(obj);
console.log(obj.nome);

// Criar novas propriedades dentro do objeto
obj.graduacao = true;
console.log(obj);



