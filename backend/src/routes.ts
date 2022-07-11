import express from 'express';
import listaController from './controllers/listaController';
const routes = express.Router();

routes.get('/tarefas', listaController.buscarTodos);
routes.get('/tarefas/:id', listaController.buscarPorId);
routes.post('/tarefas', listaController.criarTarefa);
routes.delete('/tarefas/:id', listaController.deletarTarefa);
routes.put('/tarefas/:id', listaController.editarTarefa);

export default routes ;