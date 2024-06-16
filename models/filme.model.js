const mongoose = require ("mongoose")

const FilmeSchema = mongoose.Schema(
    {
        titulo: {
            type: String,
            required: [true, "Por favor coloque um nome para seu filme"]
        },
        diretor:{
            type: String,
            required:true
        },
        lancamento:{
            type:String,
            required:true
        },
        sinopse:{
            type:String,
            required: true
        },
        img_url:{
            type:String,
            required:true
        }
    }
);

const Filme = mongoose.model("Filme", FilmeSchema);

module.exports = Filme;