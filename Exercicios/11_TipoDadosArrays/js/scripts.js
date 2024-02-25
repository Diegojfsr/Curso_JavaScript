
// Tipos de dados do tipo Array.

// array => {} |  objeto => {}

var arr = [5, "Mateus", true, {teste: 1, teste: 2}];
console.log(arr); 
console.log(arr[1]);

var arr2 = [2, 3, 4, 5, 6];
console.log(arr2); 
console.log(arr2[1]);

arr[4] = 10; // insere o elemento 10 no indice 4 do array.
console.log(arr);

arr[0] = "Teste"; // subscreve um elemento no indice indicado
console.log(arr);

console.log(typeof arr);