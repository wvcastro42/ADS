// Definição da Classe "Casa"

class Casa{
    //constructor define as propriedades da classe
    constructor(cor, numQuartos, temGaragem){
        this.cor = cor;
        this.numQuartos = numQuartos;
        this.temGaragem = temGaragem;
    }

    //método para descrever a casa
    descrever(){
        let descricao = `Esta casa é de cor ${this.cor}, tem ${this.numQuartos} quartos...`;
        if (this.temGaragem){
            descricao += `e tem uma garagem.`;
        } else {
            descricao += `e não tem uma garagem.`
        }
        return descricao;
    }
}


//Criando objeto (instancia da Classe Casa)
const minhaCasa = new Casa("verde", 2, true);
const suaCasa = new Casa("azul", 2, false);

// manipulando objetos e exibição das descrições
console.log(minhaCasa.descrever());
console.log(suaCasa.descrever());