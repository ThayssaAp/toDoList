import { TarefasModel } from "../models/tarefas.model";

interface IRequestUpdateTarefa {
    id: string;
    title?: string;
    description?: string;
    complete?: boolean;
}
export class UpdateTarefasService {
    async execute({ id, title, description, complete }: IRequestUpdateTarefa) {
        try {
            let tarefa: any = await TarefasModel.findByPk(id);
            if (!tarefa) {
                return "not found";
            }

            if(title === undefined && description === undefined && complete === undefined){
                throw Error("invalid properties")
            }
             
            await TarefasModel.update({
                title: title || tarefa.title,
                description: description || tarefa.description,
                complete: complete || tarefa.complete
            }, {
                where: {
                    id: id
                }
            })
            const tarefaAtualizada = await TarefasModel.findByPk(id);
            return tarefaAtualizada;
        } catch (error) {
            return error.message;
        }

   }
}