const mongoose = require ('mongoose');

const tarefaSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    descricao: {type: String },
    prioridade: {type: String, required: true},
    status: {type: String, required: true},
    prazo: {type: Date, required: true},
   })

const TarefaModel = mongoose.model('tarefas', tarefaSchema);

module.exports = TarefaModel;
