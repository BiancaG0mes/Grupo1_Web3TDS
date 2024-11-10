class DesempenhoEnem {
    constructor(nomeAluno, acertosMatematica, acertosLinguagens, acertosHumanas, acertosNatureza) {
        this.nomeAluno = nomeAluno;
        this.acertosMatematica = acertosMatematica;
        this.acertosLinguagens = acertosLinguagens;
        this.acertosHumanas = acertosHumanas;
        this.acertosNatureza = acertosNatureza;

        // Total de questões de cada área
        this.TOTAL_QUESTOES_MATEMATICA = 45;
        this.TOTAL_QUESTOES_LINGUAGENS = 45;
        this.TOTAL_QUESTOES_HUMANAS = 45;
        this.TOTAL_QUESTOES_NATUREZA = 45;
    }

    // Método para calcular a nota com base nos acertos
    calcularNotaMatematica() {
        return (this.acertosMatematica / this.TOTAL_QUESTOES_MATEMATICA * 1000).toFixed(4);
    }

    calcularNotaLinguagens() {
        return (this.acertosLinguagens / this.TOTAL_QUESTOES_LINGUAGENS * 1000).toFixed(4);
    }

    calcularNotaHumanas() {
        return (this.acertosHumanas / this.TOTAL_QUESTOES_HUMANAS * 1000).toFixed(4);
    }

    calcularNotaNatureza() {
        return (this.acertosNatureza / this.TOTAL_QUESTOES_NATUREZA * 1000).toFixed(4);
    }

    // Método para calcular a média total
    calcularMediaTotal() {
        const somaNotas = parseFloat(this.calcularNotaMatematica()) +
            parseFloat(this.calcularNotaLinguagens()) +
            parseFloat(this.calcularNotaHumanas()) +
            parseFloat(this.calcularNotaNatureza());
        return (somaNotas / 4).toFixed(4);
    }

    // Método para imprimir todas as médias no console
    imprimirMedias() {
        console.log(`Aluno: ${this.nomeAluno}`);
        console.log(`Média em Matemática: ${this.calcularNotaMatematica()}`);
        console.log(`Média em Linguagens: ${this.calcularNotaLinguagens()}`);
        console.log(`Média em Humanas: ${this.calcularNotaHumanas()}`);
        console.log(`Média em Natureza: ${this.calcularNotaNatureza()}`);
        console.log(`Média Total: ${this.calcularMediaTotal()}`);
        console.log("----------------------------------------");
    }
}

// Função principal
function main() {
    const nomeAluno = prompt("Digite o nome do aluno:");
    const acertosMatematica = parseInt(prompt("Digite o número de acertos em Matemática:"));
    const acertosLinguagens = parseInt(prompt("Digite o número de acertos em Linguagens:"));
    const acertosHumanas = parseInt(prompt("Digite o número de acertos em Humanas:"));
    const acertosNatureza = parseInt(prompt("Digite o número de acertos em Natureza:"));

    const desempenho = new DesempenhoEnem(nomeAluno, acertosMatematica, acertosLinguagens, acertosHumanas, acertosNatureza);
    desempenho.imprimirMedias();
}

// Executa a função principal
main();
