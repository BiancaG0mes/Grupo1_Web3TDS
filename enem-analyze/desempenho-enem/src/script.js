document.addEventListener('DOMContentLoaded', function() {
    const formDesempenho = document.getElementById('formDesempenho');

    // Constantes para o total de questões de cada área
    const TOTAL_QUESTOES = 45;

    // Função para calcular a nota baseada nos acertos e no total de questões
    function calcularNota(acertos) {
        return ((acertos / TOTAL_QUESTOES) * 1000).toFixed(4); // 4 casas decimais
    }

    // Função para calcular a média total
    function calcularMediaTotal(notas) {
        const somaNotas = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
        return (somaNotas / notas.length).toFixed(4); // 4 casas decimais
    }

    // Evento de submissão do formulário
    formDesempenho.addEventListener('submit', function(event) {
        event.preventDefault();

        // Captura os valores de acertos de cada campo
        const acertosLinguagens = parseInt(document.getElementById('acertosLinguagens').value, 10);
        const acertosCienciasHumanas = parseInt(document.getElementById('acertosCienciasHumanas').value, 10);
        const acertosMatematica = parseInt(document.getElementById('acertosMatematica').value, 10);
        const acertosCienciasNatureza = parseInt(document.getElementById('acertosCienciasNatureza').value, 10);

        // Calcula as notas para cada área
        const notaLinguagens = calcularNota(acertosLinguagens);
        const notaCienciasHumanas = calcularNota(acertosCienciasHumanas);
        const notaMatematica = calcularNota(acertosMatematica);
        const notaCienciasNatureza = calcularNota(acertosCienciasNatureza);

        // Calcula a média total
        const mediaTotal = calcularMediaTotal([notaLinguagens, notaCienciasHumanas, notaMatematica, notaCienciasNatureza]);

        // Exibe os resultados nos elementos de índice
        document.getElementById('mediaLinguagens').textContent = notaLinguagens;
        document.getElementById('mediaCienciasHumanas').textContent = notaCienciasHumanas;
        document.getElementById('mediaMatematica').textContent = notaMatematica;
        document.getElementById('mediaCienciasNatureza').textContent = notaCienciasNatureza;
        document.getElementById('mediaTotal').textContent = mediaTotal;
    });
});
