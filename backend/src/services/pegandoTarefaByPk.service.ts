import { TarefasModel } from "../models/tarefas.model";


export class PegandoTarefaByPkService {
    async execute(id: string){
        try {
            const tarefa = await TarefasModel.findByPk(id);
            if(!tarefa){
               return "not found"
            }
            return tarefa;
        } catch (error) {
            return error.message;
        }
      

    }
}