package com.enem.analyze.enemanalyze.controller;

import com.enem.analyze.enemanalyze.models.DesempenhoEnem;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/desempenho")
public class DesempenhoController {


    private Object TOTAL_QUESTOES_NATUREZA;

    @PostMapping("/calcular")
    public DesempenhoEnem calcularDesempenho(@RequestBody DesempenhoEnem desempenho, double TOTAL_QUESTOES_MATEMATICA, double TOTAL_QUESTOES_LINGUAGENS, double TOTAL_QUESTOES_HUMANAS, double TOTAL_QUESTOES_NATUREZA) {
        Object acertosMatematica = new Object();
        Object acertosLinguagens = new Object();
        Object acertosHumanas = new Object();
        Object acertosNatureza = new Object();
        return desempenho;
    }
}
