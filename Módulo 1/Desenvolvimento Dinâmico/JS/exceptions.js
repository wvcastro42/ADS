//Classe base "imovel"
class Imovel {
    constructor(endereco, tamanho) {
        this.endereco = endereco;
        this.tamanho = tamanho;
    }

    descrever(){
        throw new Error("Este método deve ser implementado por uma subclasse");
    }

    // Método para validação de dados (encapsulamento de exceções)
    validar(){
        if (!this.endereco || !this.tamanho) {
            throw new Error("Dados inválidos para o imóvel...");
            
        }
    }
}

// Classe derivada "Casa" que herda de "imovel"
class Casa extends Imovel{
    constructor(endereco, tamanho, cor, numQuartos, temGaragem){
        super(endereco, tamanho);
        this._cor = cor;
        this._numQuartos = numQuartos;
        this._temGaragem = temGaragem;
    }

    descrever(){
        try {
            this.validar();

            let descricao = `Casa localizada em ${this.endereco},
            de cor ${this._cor}, com ${this._numQuartos} quartos,
            de tamanho ${this.tamanho} m2`;

            descricao += this._temGaragem ? " e possui garagem." : " e não possui garagem.";

            return descricao;
        } catch (error) {
            throw new Error(`Erro ao descrever a casa. ${error.message}`);
            
        }
    }
}

function descreverImovel(imovel){
    try {
        console.log(imovel.descrever());
    } catch (error) {
        console.log(error.message);
    }
}

//Criação de objetos - instâncias das classes
const minhaCasa = new Casa("Rua W, n.90", 123, "verde", 4, true);
descreverImovel(minhaCasa);