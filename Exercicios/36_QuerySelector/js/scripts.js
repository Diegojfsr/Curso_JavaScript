

// querySelector e querySelectorAll
var itensClasse = document.getElementsByClassName("item");
console.log(itensClasse);


// querySelectorAll - pega varios elementos
var itensQuery = document.querySelectorAll("#lista2 li");
console.log(itensQuery);

var itensQuery2 = document.querySelectorAll("#lista .item");
console.log(itensQuery2);

//querySelector - pega um elemento
var lista = document.querySelector("#lista");
console.log(lista);

var primeiraLista = document.querySelector("ul");
console.log(primeiraLista);

var span = document.querySelector("#paragrafo span");
console.log(span);
var span = document.querySelectorAll("#paragrafo span")[0];
console.log(span);



