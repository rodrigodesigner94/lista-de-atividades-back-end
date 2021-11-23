const TarefasService = require('./../services/tarefas.service');
const tarefasService = new TarefasService;

//class para controlar os metodos
class TarefasController {
    //definir o que vai ser req e/ou res para poder ser gerenciado
    getTarefas = async (req, res) => {
        //irá buscar no BD e retornar no front
        const tarefas = await tarefasService.findAll();
        res.send(tarefas);
    }
    //função que uma unica tarefa pelo seu id
    getTarefaById = async (res, req) => {
        const tarefa = await tarefasService.findById(req.params.id);
        res.send(tarefa);
    }
    //função que cadastra no BD uma tarefa recebida pelo front
    createTarefa = async (req, res) => {
        const tarefa = req.body;
        // if(!req.body){
        //     return;
        // }
        await tarefasService.create(req.body)
        .then(() => {
            res.send({message: `Tarefa ${tarefa.nome} cadastrada com sucesso.`})
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({error: `Erro no servidor: ${err}`})
        })        
    }
    //função para atualizar informações da tarefa no BD atraves do id
    editTarefa = async (req, res) => {
        const idParam = req.params.id;
        const tarefaEdit = req.body;
        await tarefasService.edit(idParam, tarefaEdit)
        .then(() => {
            res.send({message: `Tarefa editada com sucesso.`})
        })
        .catch(err => {
            res.status(500).send({message: `Erro: ${err}`})
        })
    }
    //função para excluir tarefa recebendo seu id
    deleteTarefa = async (req, res) =>{
        const idParam = req.params.id;
        await tarefasService.delete(idParam)
        .then(() => {
            res.send({message: 'Tarefa excluída com sucesso.'})
        })
        .catch(err => {
            res.status(500).send({message: `Erro: ${err}`});
        })
    }
}

module.exports = TarefasController;