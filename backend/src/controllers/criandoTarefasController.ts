import { Request, Response } from "express";
import { CriandoTarefasService } from "../services/criandoTarefas.service";

export class CriandoTarefasController {
    async handle(req: Request, res: Response){
        try {
            const { title, description, complete } = req.body;
            const service = new CriandoTarefasService();
            const newTarefa = await service.execute({title, description});
            if(typeof newTarefa === 'string'){
                return res.status(400).json({messageError: newTarefa});
            }
            return res.status(201).json({
                message: 'Tarefa criada com sucesso!',
                tarefa: newTarefa});
        } catch (error) {
            return res.status(400).json({messageError: error.message});
        }
    }
}