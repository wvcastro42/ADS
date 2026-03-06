//Trabalhando abstração
// Classe base será "Imóvel"

class Imovel{
    constructor(endereco, tamanho){
        this.endereco = endereco;
        this.tamanho = tamanho;
    }

    //Método abstrato para descrever o imóvel será implementado nas subclasses
    descrever(){
        throw new Error("Este método deve ser implementado por subclasses");
    }
}

// Classe derivada será a "Casa", que gerda de "Imóvel"
class Home extends Imovel {
    constructor(endereco, tamanho, cor, numeroQuartos, temGaratem) {
        super(endereco, tamanho);
        this.cor = cor;
        this.numeroQuartos = numeroQuartos;
        this.temGaratem = temGaratem;
    }

    //Implementação do método "descrever" para Casa
    descrever(){
        let descricao = `Casa localizada em ${this.endereco},
        de cor ${this.cor}, com ${this.numeroQuartos} quartos, de tamanhho ${this.tamanho} m2`;

        //operador ternário
        descricao += this.temGaratem ? " e possui garagem." : " e não possui garagem.";

        return descricao;
    }
}

// Classe derivada "Apartamento" que herda da classe "imóvel"
class Apartamento extends Imovel{
    constructor(endereco, tamanho, numeroDoAndar, possuiElevador){
        super(endereco, tamanho);
        this.numeroDoAndar = numeroDoAndar;
        this.possuiElevador = possuiElevador;
    }

    //Implementação do método descrever
    descrever(){
        let descricao = `Apartamento localizado em ${this.endereco},
        no ${this.numeroDoAndar}º andar, de tamanho ${this.tamanho}m2`;

        descricao += this.possuiElevador ? " e possui elevador" : " e não possui elevador.";

        return descricao;
    }
}

// Função para descrever imovel (polimorfismo)
function descreverImovel(imovel){
    console.log(imovel.descrever());
}

const minhaCasa = new Home("rua A, 123", 123, "azul", 3, true)
const meuApartamento = new Apartamento("Avenida SJ, 332", 85, 5, true);

//Manipulação dos objetos e exibição das descrições usando polimorfismo
descreverImovel(minhaCasa);
descreverImovel(meuApartamento);