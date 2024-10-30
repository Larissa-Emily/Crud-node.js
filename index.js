const express = require("express");

const server = express();
const port = 5001;

server.use(express.json()); // constrói uma "cadeia" que é executada na ordem em que é requisitada

const programacao = [
  "FullStack Master",
  "Desenvolvimento de Games",
  "Front-End",
  "Back-end",
];

// Retorno de alguma informação atraves do index

server.get("/programacao/:index", (req, res) => {
  const { index } = req.params;

  return res.json(programacao[index]);
});

// Retorna a lista toda
server.get("/programacao", (req, res) => {
  return res.json(programacao);
});

// Cria um novo item

server.post("/programacao", (req, res) => {
  const { name } = req.body;
  programacao.push(name);

  return res.json(programacao);
});

// Atualizar

server.put("/programacao/:index", (req, res) => {
  {
    const { index } = req.params;
    const { name } = req.body;

    programacao[index] = name;
    return res.json(programacao);
  }
});

// Deletar algum item

server.delete("/programacao/:index", (req, res) => {
  {
    const { index } = req.params;

    programacao.splice(index, 1);

    return res.json({ message: "O curso foi deletado" });
  }
});

server.listen(port, () => {
  console.log("Servidor rodando na porta:", port);
});
