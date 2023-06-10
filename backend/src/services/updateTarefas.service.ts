import { TarefasModel } from "../models/tarefas.model";

interface IRequestUpdateTarefa {
    id: string;
    title: string;
    description: string;
}
export class UpdateTarefasService {
    async execute({ id, title, description }: IRequestUpdateTarefa) {
        try {
            let tarefa: any = await TarefasModel.findByPk(id);
            if (!tarefa) {
                return "not found";
            }

            if(title === undefined && description === undefined){
                throw Error("invalid properties")
            }

            await TarefasModel.update({
                title: title || tarefa.title,
                description: description || tarefa.description
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