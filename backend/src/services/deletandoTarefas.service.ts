import { ParamsDictionary } from "express-serve-static-core";
import { db } from "../connection/connect";
import { TarefasModel } from "../models/tarefas.model";

export class DeletandoTarefasService {
    async execute(id: string){
        try {
            const tarefa = TarefasModel.findByPk(id);
            if(!tarefa){
                return "not found!";
            }
            
            await TarefasModel.destroy({
                where: {
                    id: id
                }
            });
            return ;
        } catch (error) {
            return error.message;
        }
       
    }
}