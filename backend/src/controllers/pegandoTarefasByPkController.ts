import { Request, Response } from "express";
import { PegandoTarefaByPkService } from "../services/pegandoTarefaByPk.service";

export class PegandoTarefasByPkController {
    async handle(req: Request, res: Response){
        try {
            const { id } = req.params;
            const service = new PegandoTarefaByPkService();
            const tarefa = await service.execute(id);
            return res.json({tarefa: tarefa});
        } catch (error) {
            return res.json({message: error.message})
        }
    }
}