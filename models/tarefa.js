const mongoose = require ('mongoose');

const tarefaSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    descrição: {type: String },
    prioridade: {type: String, required: true},
    status: {type: String, required: true},
    prazo: {type: Date, required: true},
    daraCriação: {type: Date, default: Date.now}
})

const MusicaModel = mongoose.model('tarefas', tarefaSchema);

module.exports = TarefaModel;
