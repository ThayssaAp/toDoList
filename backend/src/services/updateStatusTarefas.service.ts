import { TarefasModel } from "../models/tarefas.model";

interface IRequestUpdateTarefa {
    id: string;
    complete: boolean;
}
export class UpdateStatusTarefasService {
    async execute({ id, complete }: IRequestUpdateTarefa) {
        try {
            let tarefa: any = await TarefasModel.findByPk(id);
            if (!tarefa) {
                return "not found";
            }

            if(complete === undefined){
                throw Error("invalid properties")
            }
             
            await TarefasModel.update({
                title: tarefa.title,
                description: tarefa.description,
                complete: complete 
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