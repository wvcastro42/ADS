//Função que simula uma operação assíncrona de verificação do status de uma casa
function verificarStatusDaCasa(casa){
    return new Promise((resolve, reject) =>{
        //simulando uma operação assíncrona que leva 2 segundos para ser concluída
        setTimeout(() => {
            const sucesso = Math.random() > 0.5; //simulando sucesso ou falha de forma aleatória
            if (sucesso) {
                resolve(`A casa localizada em ${casa.endereco} está em boas condições!`);
            } else {
                reject(`A casa localizada em ${casa.endereco} precisa de reparos.`);
            }
        }, 2000);
    });
}

//Classe "casa"
class Casa{
    constructor(endereco, cor, numQuartos, temGaragem){
        this.endereco = endereco;
        this.cor = cor;
        this.numQuartos = numQuartos;
        this.temGaragem = temGaragem;
    }

    descrever(){
        let descricao = `Esta casa é de cor ${this.cor}, tem ${this.numQuartos} quartos...`;
        if (this.temGaragem){
            descricao += `e tem uma garagem.`;
        } else {
            descricao += `e não tem uma garagem.`
        }
        return descricao;
    }

    verificarStatus(){

        verificarStatusDaCasa(this)
            .then((resultado) => {
                console.log(resultado); //resultado positivo
            })
            .catch((erro) =>{
                console.error(erro);
            });
    }
}

const minhaCasa = new Casa("rua wladimir h, 90", 134, "azul", 6, true); //criação de uma casa
console.log(minhaCasa.descrever());
minhaCasa.verificarStatus();


// const minhaCasaFalha = new Casa("", 4, "roxo", 1, false); //criação de uma casa
// console.log(minhaCasaFalha.descrever());
// minhaCasaFalha.verificarStatus();