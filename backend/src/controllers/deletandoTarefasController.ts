import { Request, Response } from "express";
import { DeletandoTarefasService } from "../services/deletandoTarefas.service";

export class DeletandoTarefasController {
    async handle(req: Request, res: Response){
        try {
            const { id } = req.params;
            const service = new DeletandoTarefasService();
            const tarefa = await service.execute(id);
            if(typeof tarefa === 'string'){
                return res.status(404).json({messageError: tarefa});
            }
            return res.json({
                message: "Tarefa deleta com sucesso",
                tarefaDeletada: tarefa
            });
        } catch (error) {
            return res.json({messageError: error.message});
        }
    }
}