
// let e const

let x = 5; // let pode ser alterada.... é o mesmo que var x = 5 no escopo global
x = 12;
console.log(x);

if(true){
    let x = 20; //funciona como escopo local.
    console.log(x);
}
console.log(x);

const y = 10; // const nao pode ser alterada
//y = 12;
console.log("const " + y);

if(true){
    const y = 50; //funciona como escopo local.
    console.log("const if " + y);
}
console.log(y);

if(20 > 10){
    const y = 100; //funciona como escopo local.
    console.log("const if 20>10: " + y);
}

for (let x = 0; x < 10; x++){
    console.log(x);
}