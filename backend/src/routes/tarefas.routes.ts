import { Router } from "express";
import { CriandoTarefasController } from "../controllers/criandoTarefasController";
import { DeletandoTarefasController } from "../controllers/deletandoTarefasController";
import { PegandoTarefasController } from "../controllers/pegandoTarefasController";
import { UpdateTarefasController } from "../controllers/updateTarefasController";

const routerTarefas = Router();

const criandoTarefa = new CriandoTarefasController();
const pegandoTarefas = new PegandoTarefasController();
const updateTarefa = new UpdateTarefasController();
const deletandoTarefas = new DeletandoTarefasController();

routerTarefas.post('/tarefas', criandoTarefa.handle);
routerTarefas.get('/tarefas', pegandoTarefas.handle);
routerTarefas.put('/tarefas/:id', updateTarefa.handle);
routerTarefas.delete('/tarefas/:id', deletandoTarefas.handle);

export { routerTarefas }