import { ParamsDictionary } from "express-serve-static-core";
import { db } from "../connection/connect";
import { TarefasModel } from "../models/tarefas.model";

export class DeletandoTarefasService {
    async execute(id: string){
        try {
            const tarefa = await TarefasModel.findByPk(id);
            if(!tarefa){
                return "not found!";
            }
            
            await TarefasModel.destroy({
                where: {
                    id: id
                }
            });
            return tarefa;
        } catch (error) {
            return error.message;
        }
       
    }
}