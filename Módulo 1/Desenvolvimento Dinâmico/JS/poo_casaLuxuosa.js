

class Casa{
    
    constructor(cor, numQuartos, temGaragem){
        // propriedades privadas utilizando convenção de undescore _
        this._cor = cor;
        this._numQuartos = numQuartos;
        this._temGaragem = temGaragem;
    }

    //Métodos getters and setters para acessar e modificar as propriedades da instância
    get cor(){
        return this._cor;
    }

    set cor(novaCor){
        this._cor = novaCor;
    }

    get numQuartos(){
        return this._numQuartos;
    }

    set numQuartos(novoNumQuartos){
        this._numQuartos = novoNumQuartos;
    }

    get temGaragem(){
        return this._temGaragem;
    }

    set temGaragem(novoTemGaragem){
        this._temGaragem = novoTemGaragem;
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
}

// Classe DERIVADA "Casa Luxuosa" que HERDA de "Casa"
class CasaLuxuosa extends Casa{
    constructor(cor, numQuartos, temGaragem, temPiscina){
        //chama o construtor da classe base (Casa)
        super(cor, numQuartos, temGaragem);

        //propriedade adicional específica da classe derivada
        this._temPiscina = temPiscina;
    }
    //getters and setters para a nova propriedade
    get temPiscina(){
        return this._temPiscina;
    }

    set temPiscina(novaTemPiscina){
        this._temPiscina = novaTemPiscina;
    }

    descrever(){
        let descricao = super.descrever(); //chama o método da classe base
        if (this._temPiscina){
            descricao += "Também tem uma piscina!";
        } else{
            descricao += "Não tem piscina..."
        }
        return descricao;
    }
}

// Criação de objetos (instâncias das classes)
const minhaCasa = new Casa("azul", 3, true);
const casaLuxuosa = new CasaLuxuosa("branca", 4, true, true);

console.log(minhaCasa.descrever());
console.log(casaLuxuosa.descrever());



/*
Encapsulamento em Orientação a Objetos


O encapsulamento é o controle de acesso a dados, agrupando atributos e métodos em uma única unidade. 
A prática recomendada é usar propriedades privadas e métodos get e set para garantir que alterações sejam controladas e seguras.
*/

1c
2c 
3c 
4b 
