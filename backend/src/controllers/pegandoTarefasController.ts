import { Request, Response } from "express";
import { PegandoTarefasService } from "../services/pegandoTarefas.service";

export class PegandoTarefasController {
    async handle(req: Request, res: Response){
        try {
            const { orderBy, paramsFilter } = req.body;
            const service = new PegandoTarefasService();
            const tarefas = await service.execute({ orderBy, paramsFilter });
            return res.status(201).json({tarefas: tarefas});
        } catch (error) {
            return res.status(400).json({messageError: error.message});
        }
    }
}