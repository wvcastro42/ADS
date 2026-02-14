//aprender a andar de bicicleta, praticando até conseguir andar, pelo menos, até um minuto.

let tempoAndado = 0;
let caiu = false;

do {
    tempoAndado++;
    console.log("Andei de bicicleta por", tempoAndado, "minutos...");

    if (tempoAndado === 10) {
        caiu = true;
    }
} while (!caiu && tempoAndado < 10);