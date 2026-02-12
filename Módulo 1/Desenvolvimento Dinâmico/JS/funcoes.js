/* Funções em JavaScript */
function soma(a, b) {
    
    return ("Teste - " + (a + b));
}

let resultado = soma(13, 29);

console.log("A soma é: " + resultado);


function chama_outra_funcao(funcao,valor1, valor2) { // uma função chamando outra
    console.log("\n");
    return funcao(valor1, valor2);
}

console.log(chama_outra_funcao(soma, 13, 13));