package com.enem.analyze.enemanalyze.service;

import com.enem.analyze.enemanalyze.models.DesempenhoEnem;
import com.enem.analyze.enemanalyze.repository.DesempenhoEnemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DesempenhoEnemService {

    @Autowired
    private DesempenhoEnemRepository desempenhoRepository;

    // Criar ou Atualizar
    public DesempenhoEnem salvarDesempenho(DesempenhoEnem desempenho, double TOTAL_QUESTOES_MATEMATICA, Object acertosLinguagens, double TOTAL_QUESTOES_LINGUAGENS, Object acertosHumanas, double TOTAL_QUESTOES_HUMANAS, double TOTAL_QUESTOES_NATUREZA) {
        // Calculando a média antes de salvar
        double mediaTotal;
        mediaTotal = Double.parseDouble(String.valueOf(desempenho.calcularMediaTotal(TOTAL_QUESTOES_LINGUAGENS, TOTAL_QUESTOES_HUMANAS, TOTAL_QUESTOES_NATUREZA)));
        System.out.println("Média Total do Aluno " + desempenho.getNomeAluno() + ": " + mediaTotal);

        // Salva o desempenho no banco
        return desempenhoRepository.save(desempenho);
    }

    // Buscar Todos
    public List<DesempenhoEnem> listarDesempenhos() {
        return desempenhoRepository.findAll();
    }

    // Buscar por ID
    public Optional<DesempenhoEnem> buscarDesempenhoPorId(String id) {
        return desempenhoRepository.findById(id);
    }

    // Excluir
    public void excluirDesempenho(String id) {
        desempenhoRepository.deleteById(id);
    }
}
