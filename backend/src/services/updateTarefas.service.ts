import { db } from "../connection/connect";
import { TarefasModel } from "../models/tarefas.model";

interface IRequestUpdateTarefa{
    id: string;
    titulo: string;
    descricao: string;
}
export class UpdateTarefasService {
    async execute({id, titulo, descricao}: IRequestUpdateTarefa){
        const tarefa = await TarefasModel.findByPk(id);
        Object.assign(tarefa,{
            id: id,
            titulo: titulo,
            descricao: descricao 
        })
        await 
        console.log(tarefa)
        return tarefa;
    }
}