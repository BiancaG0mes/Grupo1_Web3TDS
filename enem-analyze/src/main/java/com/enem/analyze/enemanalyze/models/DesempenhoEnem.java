package com.enem.analyze.enemanalyze.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "desempenhos")
public class DesempenhoEnem {

    @Id
    private String id;
    private String nomeAluno;
    private int acertosMatematica;
    private int acertosLinguagens;
    private int acertosHumanas;
    private int acertosNatureza;

    // Total de questões de cada área (simplificado)
    private static final int TOTAL_QUESTOES_MATEMATICA = 45;
    private static final int TOTAL_QUESTOES_LINGUAGENS = 45;
    private static final int TOTAL_QUESTOES_HUMANAS = 45;
    private static final int TOTAL_QUESTOES_NATUREZA = 45;

    // Getters e Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNomeAluno() {
        return nomeAluno;
    }

    public void setNomeAluno(String nomeAluno) {
        this.nomeAluno = nomeAluno;
    }

    public int getAcertosMatematica() {
        return acertosMatematica;
    }

    public void setAcertosMatematica(int acertosMatematica) {
        this.acertosMatematica = acertosMatematica;
    }

    public int getAcertosLinguagens() {
        return acertosLinguagens;
    }

    public void setAcertosLinguagens(int acertosLinguagens) {
        this.acertosLinguagens = acertosLinguagens;
    }

    public int getAcertosHumanas() {
        return acertosHumanas;
    }

    public void setAcertosHumanas(int acertosHumanas) {
        this.acertosHumanas = acertosHumanas;
    }

    public int getAcertosNatureza() {
        return acertosNatureza;
    }

    public void setAcertosNatureza(int acertosNatureza) {
        this.acertosNatureza = acertosNatureza;
    }

    // Método para calcular a nota com base nos acertos
    public double calcularNotaMatematica() {
        return (double) acertosMatematica / TOTAL_QUESTOES_MATEMATICA * 1000;
    }

    public double calcularNotaLinguagens() {
        return (double) acertosLinguagens / TOTAL_QUESTOES_LINGUAGENS * 1000;
    }

    public double calcularNotaHumanas() {
        return (double) acertosHumanas / TOTAL_QUESTOES_HUMANAS * 1000;
    }

    public double calcularNotaNatureza() {
        return (double) acertosNatureza / TOTAL_QUESTOES_NATUREZA * 1000;
    }

    // Método para calcular a média total
    public double calcularMediaTotal(double TOTAL_QUESTOES_LINGUAGENS, double TOTAL_QUESTOES_HUMANAS, double TOTAL_QUESTOES_NATUREZA) {
        double somaNotas = calcularNotaMatematica() + calcularNotaLinguagens() +
                calcularNotaHumanas() + calcularNotaNatureza();
        return somaNotas / 4;
    }

    // Método para imprimir todas as médias no console
    public void imprimirMedias() {
        System.out.println("Aluno: " + nomeAluno);
        System.out.println("Média em Matemática: " + String.format("%.4f", calcularNotaMatematica()));
        System.out.println("Média em Linguagens: " + String.format("%.4f", calcularNotaLinguagens()));
        System.out.println("Média em Humanas: " + String.format("%.4f", calcularNotaHumanas()));
        System.out.println("Média em Natureza: " + String.format("%.4f", calcularNotaNatureza()));
        System.out.println("Média Total: " + String.format("%.4f", calcularMediaTotal(TOTAL_QUESTOES_LINGUAGENS, TOTAL_QUESTOES_HUMANAS, TOTAL_QUESTOES_NATUREZA)));
        System.out.println("----------------------------------------");
    }
}