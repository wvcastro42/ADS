// maneiras de criar arrays

let array1 = [];
let array2 = new Array(); // usando constructor Array()

console.log("Array 1:", array1);
console.log("Array 2:", array2);


// adicionando elementos ao array
array1 = "teste1";
//array2 = "teste2";
array2.push('teste3', "oi");


console.log("Novo Array 1:", array1);
console.log("Novo Array 2:", array2);

array2.pop();
console.log("Novo Array 2:", array2);
