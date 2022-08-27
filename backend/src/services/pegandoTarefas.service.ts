import { TarefasModel } from "../models/tarefas.model";

export class PegandoTarefasService {
    async execute(){
        const tarefas = await TarefasModel.findAll();
        console.log(tarefas)
        return tarefas;
    }
}