const express = require("express");
const TarefasController = require("./../controllers/tarefas.controller");
const TarefasControllerFunc = require("./../controllers/tarefas.func.controller");

const tarefasController = new TarefasController();

const router = express.Router();

router.get("/", TarefasController.getTarefas);

router.get('/listar', TarefasControllerFunc.getAll);

router.get("/:id", tarefasController.getTarefaById);

router.post("/add", tarefasController.createTarefa);

router.put("/:id", tarefasController.deleteTarefa);

module.exports = router;