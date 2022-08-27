import { Router } from "express";
import { CriandoTarefasController } from "../controllers/criandoTarefasController";
import { PegandoTarefasController } from "../controllers/pegandoTarefasController";
import { UpdateTarefasController } from "../controllers/updateTarefasController";
import { PegandoTarefasService } from "../services/pegandoTarefas.service";

const routerTarefas = Router();
const criandoTarefa = new CriandoTarefasController();
const pegandoTarefas = new PegandoTarefasController();
const updateTarefa = new UpdateTarefasController();

routerTarefas.post('/tarefas', criandoTarefa.handle);
routerTarefas.get('/tarefas', pegandoTarefas.handle);
routerTarefas.put('/tarefas/:id', updateTarefa.handle);
routerTarefas.delete('/tarefas/:id', )
export { routerTarefas }