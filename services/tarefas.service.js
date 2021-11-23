const TarefaModel = require('./../models/tarefa');

class tarefasService {
    //buscar a lista completa de tarefas
    findAll = async () => await TarefaModel.find();

    //buscar tarefa especifica pelo id
    findById = async (id) => {
        return await TarefaModel.findById(id);
    }

    //receber uma nova tarefa e salvar no BD
    create = async (tarefa)  => {
        return await TarefaModel.create(tarefa);
    }

    //receber o id de uma tarefa para atualizar no BD
    edit = async (id, tarefa) => {
        return await TarefaModel.updateOne({ _id: id}, tarefa);
    }

    //receber um id e exluir a tarefa do BD
    delete = async (id) => {
        return await TarefaModel.deleteOne({ _id: id});
    }

}

module.exports = tarefasService;