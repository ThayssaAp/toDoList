import { Request, Response } from "express";
import { UpdateStatusTarefasService } from "../services/updateStatusTarefas.service";

export class UpdateStatusTarefasController {
    async handle(req: Request, res: Response){
        try {
            const { id } = req.params;
            const { complete } = req.body;
            const service = new UpdateStatusTarefasService();
            const newTarefa = await service.execute({id, complete});
            if(typeof newTarefa === 'string'){
                return res.status(404).json({messageError: newTarefa})
            }
            return res.json({
                message: 'Tarefa atualizada com sucesso!',
                tarefa_atualizada:newTarefa });
        } catch (error) {
            return res.json({messageError: error.message})
        }
    }
}