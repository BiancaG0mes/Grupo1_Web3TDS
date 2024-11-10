package com.enem.analyze.enemanalyze.models;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        DesempenhoEnem desempenho = new DesempenhoEnem();

        // Solicita o nome do aluno
        System.out.print("Digite o nome do aluno: ");
        desempenho.setNomeAluno(scanner.nextLine());

        // Solicita o número de acertos em cada área
        System.out.print("Digite o número de acertos em Matemática: ");
        desempenho.setAcertosMatematica(scanner.nextInt());

        System.out.print("Digite o número de acertos em Linguagens: ");
        desempenho.setAcertosLinguagens(scanner.nextInt());

        System.out.print("Digite o número de acertos em Humanas: ");
        desempenho.setAcertosHumanas(scanner.nextInt());

        System.out.print("Digite o número de acertos em Natureza: ");
        desempenho.setAcertosNatureza(scanner.nextInt());

        // Exibe as médias calculadas no console
        desempenho.imprimirMedias();

        // Fecha o scanner
        scanner.close();
}

}
