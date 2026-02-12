// Operadores lógicos em JS

//Operador E lógico (&&)
const a = true;
const b = false;

const resultE1 = a && b; //false
const resultE2 = a && true; //true

console.log(`true && false: ${resultE1}`); //saída: false
console.log(`true && true: ${resultE2}`); //saída: true


//Operador OU lógico (||)
const resultOu1 = a || b; //true
const resultOu2 = a || false;

console.log(`\ntrue || false: ${resultOu1}`); //saída: false
console.log(`false || false: ${resultOu2}`); //saída: false

//Operador NÃO lógico (!)
const resultNao1 = !a;
const resultNao2 = !b;

console.log(`\n!true: ${resultNao1}`); //saída: false
console.log(`!false: ${resultNao2}`); //saída: true

// combinação de operadores lógicos
const resultComb1 = (a || b) && !b; //true
const resultComb2 = !(a && b) || a; //true

console.log(`\n(true || false) && !false: ${resultComb1}`) //saída: true
console.log(`!(true || false) || true: ${resultComb2}`) //saída: true

