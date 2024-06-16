const Filme = require("../models/filme.model.js");

const mostrarFilmes = async (req,res) =>{
    try{
        const filmes = await Filme.find();
        res.status(200).json(filmes)
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
};

const mostrarFilme = async (req,res) => {
    try{
        const { id } = req.params;
        const filmes = await filme.findById(id);
        res.status(200).json(filme)
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

const cadastrarFilme = async (req,res) => {
    try{
        const filmes = await Filme.create(req.body);
        res.status(200).json(filmes)
        
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

const atualizarFilme = async (req,res) => {
    try{
        const { id } = req.params;
        const filmes = await Filme.findByIdAndUpdate(id,req.body);
        
        const filmeAtualizado = await Filme.findById(id);
        res.status(200).json(filmeAtualizado);
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

const excluirFilme = async (req,res) => {
    try{
        const { id } = req.params;
        await Filme.findByIdAndDelete(id,req.body);
        res.status(200).json({ message: "Filme excluído com sucesso" });
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    mostrarFilmes,
    mostrarFilme,
    cadastrarFilme,
    atualizarFilme,
    excluirFilme,
};

