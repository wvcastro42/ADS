let frutas = "Maçã, Limão, Uva, Cereja, Abacate, Melão, Banana, Pera, Morango";

let f = frutas.split(", ");

for (let i = 0; i < f.length; i++){
    console.log("\n",f[i], "o indice é", i);
}

let exemplo = "Estude na Descomplica";
console.log("Sem o método .replace(): ", exemplo);

exemplo = exemplo.replace("na Descomplica", "na Faculdade FATEC");
console.log("Com o método .replace(): ", exemplo);


let stringTrim = "    Teste   ";
console.log("Exemplo do método .trim():", stringTrim.trim());

let concatString1 = "Desenvolvimento";
let concatString2 = "Dinâmico";
console.log(concatString1.concat(concatString2));