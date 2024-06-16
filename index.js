const express = require("express");
const mongoose = require("mongoose");
const rotaFilme = require("./routes/filme.route.js");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/Filmes", rotaFilme)

app.get("/", (req, res) => {
    res.send("Hello from Node.JS");
})

mongoose
  .connect(
    "mongodb+srv://CleberdeAlmeida:sySrYZ83SulgEZEw@filmes.mojk6by.mongodb.net/?retryWrites=true&w=majority&appName=Filmes"
  )
  .then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch(() => {
    console.log("Falha na conexão ao banco de dados!");
  });