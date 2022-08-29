import { Request, Response } from "express";
import { DeletandoTarefasService } from "../services/deletandoTarefas.service";
import { PegandoTarefaByPkService } from "../services/pegandoTarefaByPk.service";
import { PegandoTarefasService } from "../services/pegandoTarefas.service";


export class DeletandoTarefasController {
    async handle(req: Request, res: Response){
        try {
            const { id } = req.params;
            const service = new DeletandoTarefasService();
            const serviceGetTarefa = new PegandoTarefaByPkService();
            const tarefaDeletada = await serviceGetTarefa.execute(id)
            await service.execute(id);
            return res.json({
                message: "Tarefa deleta com sucesso",
                tarefaDeletada: tarefaDeletada
            });
        } catch (error) {
            return res.json({message: error.message});
        }
    }
}