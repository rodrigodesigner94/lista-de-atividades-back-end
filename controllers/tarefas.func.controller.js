const TarefasService = require('./../services/tarefas.service');

const tarefasService = new TarefasService;

exports.getAll = async (req, res) => {
    const tarefas = await tarefasService.findAll();
    res.send(tarefas);
}
exports.getById = async(res, req) => {
    const tarefas = await tarefasService.findById(req.params.id);
    res.send(tarefas);
}