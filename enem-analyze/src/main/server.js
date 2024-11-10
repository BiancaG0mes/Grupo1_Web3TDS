
const express = require("express");
const { PrismaClient } = require("@prisma/client");

// Inicializa o Prisma Client e o Express
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Função para calcular a nota com base na TRI
function calcularNotaTri(acertos, area) {
  const dificuldade = { linguagens: 0.8, matematica: 1, humanas: 0.7, natureza: 0.9 };
  const maximoNota = 1000;
  return Math.round(acertos * dificuldade[area] * (maximoNota / 45));
}

// Rota para criar/atualizar um desempenho
app.post("/desempenho", async (req, res) => {
  const { estudante, linguagens, matematica, humanas, natureza } = req.body;

  const notaLinguagens = calcularNotaTri(linguagens, "linguagens");
  const notaMatematica = calcularNotaTri(matematica, "matematica");
  const notaHumanas = calcularNotaTri(humanas, "humanas");
  const notaNatureza = calcularNotaTri(natureza, "natureza");

  const mediaNota = (notaLinguagens + notaMatematica + notaHumanas + notaNatureza) / 4;

  try {
    const desempenho = await prisma.desempenhoEnem.create({
      data: {
        estudante,
        linguagens: notaLinguagens,
        matematica: notaMatematica,
        humanas: notaHumanas,
        natureza: notaNatureza,
        mediaNota,
      },
    });
    res.status(201).json(desempenho);
  } catch (error) {
    res.status(500).json({ error: "Erro ao salvar desempenho" });
  }
});

// Rota para listar todos os desempenhos
app.get("/desempenho", async (req, res) => {
  try {
    const desempenhos = await prisma.desempenhoEnem.findMany();
    res.json(desempenhos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar desempenhos" });
  }
});

// Rota para buscar desempenho por ID
app.get("/desempenho/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const desempenho = await prisma.desempenhoEnem.findUnique({
      where: { id },
    });
    if (desempenho) {
      res.json(desempenho);
    } else {
      res.status(404).json({ error: "Desempenho não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar desempenho" });
  }
});

// Rota para excluir desempenho
app.delete("/desempenho/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.desempenhoEnem.delete({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir desempenho" });
  }
});

// Configuração do servidor
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
