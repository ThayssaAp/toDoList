import { Request, Response } from "express";
import { CriandoTarefasService } from "../services/criandoTarefas.service";

export class CriandoTarefasController {
    async handle(req: Request, res: Response){
        try {
            const { titulo, descricao } = req.body;
            const service = new CriandoTarefasService();
            const newTarefa = await service.execute({titulo, descricao});
            console.log(typeof newTarefa);
            if(typeof newTarefa === 'string'){
                return res.status(400).json({message: newTarefa});
            }
            return res.status(201).json({tarefa: newTarefa});
        } catch (error) {
            return res.status(400).json({message: "erro no controller"});
        }
    }
}