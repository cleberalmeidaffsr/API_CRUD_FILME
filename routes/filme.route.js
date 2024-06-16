const express = require("express");
const rota = express.Router();
const {mostrarFilmes, mostrarFilme, cadastrarFilme, atualizarFilme, excluirFilme} = require("../controllers/filme.controller.js")


//exibir todos os filmes
rota.get("/",mostrarFilmes);

//mostrar um filme especifico
rota.get("/:id",mostrarFilme);

//Cadastrar um filme
rota.post("/",cadastrarFilme);

//Atualizar um filme
rota.put("/:id",atualizarFilme);

//Excluir um filme
rota.delete("/:id",excluirFilme);


module.exports = rota;
