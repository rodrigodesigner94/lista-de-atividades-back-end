const express = require("express");
const TarefasController = require("./../controllers/tarefas.controller");


const tarefasController = new TarefasController();


const router = express.Router();

router.get("/", tarefasController.getTarefas);



router.get("/:id", tarefasController.getTarefaById);

router.post("/add", tarefasController.createTarefa);

router.delete("/:id", tarefasController.deleteTarefa);

router.put("/:id", tarefasController.editTarefa);

module.exports = router;