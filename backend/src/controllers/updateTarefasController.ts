import { Request, Response } from "express";
import { UpdateTarefasService } from "../services/updateTarefas.service";

export class UpdateTarefasController {
    async handle(req: Request, res: Response){
        try {
            const { id } = req.params;
            const { titulo, descricao } = req.body;
            const service = new UpdateTarefasService();
            const newTarefa = await service.execute({id, titulo, descricao});
            if(typeof newTarefa === 'string'){
                return res.json({messageError: newTarefa})
            }
            return res.json({tarefa_atualizada:newTarefa });
        } catch (error) {
            return res.json({messageError: error.message})
        }
    }
}