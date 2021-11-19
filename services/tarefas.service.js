const TarefasModel = require('./../models/tarefa');

class tarefasService {
    //buscar a lista completa de tarefas
    findAll = async () => await TarefasModel.find();

    //buscar tarefa especifica pelo id
    findById = async (id) => {
        return await TarefasModel.findById(id)
    };

    //receber uma nova tarefa e salvar no BD
    creat = async (tarefa)  => {
        return await TarefasModel.create(tarefa)
    };

    //receber o id de uma tarefa para atualizar no BD
    edit = async (id, tarefa) => {
        return await TarefasModel.updateOne({ _id: id}, tarefa)
    };

    //receber um id e exluir a tarefa do BD
    delete = async (id) => {
        return await TarefasModel.deleteOne({ _id: id})
    }

}

module.exports = tarefasService;