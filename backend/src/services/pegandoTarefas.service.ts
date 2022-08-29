import { TarefasModel } from "../models/tarefas.model";

export class PegandoTarefasService {
    async execute(){
        try {
            const tarefas = await TarefasModel.findAll();
            return tarefas;
        } catch (error) {
            return error.message;
        }
       
    }
}