//exemplo de soma com função arrow

/*let somar = (a, b) => {
    return a + b
};*/

let somar = (a, b) => (a + b); //assim tb funciona, usando ()'s

console.log(somar(1, 3));

var dobrar = n => n*n;

console.log(dobrar(5));

/* arrow function como callback*/

let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = numeros.map(n => n*2); //a função MAP percorre um array

console.log(numerosDobrados);

/*let saudacao = (nome, idade) => {
    let mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos`;
    return mensagem;
};*/

console.log(saudacao("Weverton", "39"));

function teste(){
    return ;
}

console.log("Retornando função teste: " + teste())


function novaSaudacao(nome){
    return (`Olá, ${nome}!`);
}

console.log(novaSaudacao("Thiago"));
console.log(novaSaudacao("Cláudio"));


//let soma1 = (a,b) => {return a+b;} // exemplo com arrow function

/*
function soma (a, b){
    return a + b; 
}
console.log(soma(1,35))*/

function soma(a, b) {
    return a + b;
}
console.log(soma(1, 2, 3, 4, 5, 6))


function saudacao(){
    let mensagem = "Olá, mundo!"
    return mensagem;
}
console.log(saudacao());