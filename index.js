const express = require('express');
const cors = require('cors');
const TarefasRouter = require('./routes/tarefas.routes');
const Conn = require('./conn/conn');

const port = 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/tarefas', TarefasRouter);

Conn();

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})