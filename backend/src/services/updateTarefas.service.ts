import { TarefasModel } from "../models/tarefas.model";

interface IRequestUpdateTarefa {
    id: string;
    titulo: string;
    descricao: string;
}
export class UpdateTarefasService {
    async execute({ id, titulo, descricao }: IRequestUpdateTarefa) {
        try {
            let tarefa: any = await TarefasModel.findByPk(id);
            if (!tarefa) {
                return "not found";
            }

            if(titulo === undefined && descricao === undefined){
                throw Error("invalid properties")
            }

            await TarefasModel.update({
                titulo: titulo || tarefa.titulo,
                descricao: descricao || tarefa.descricao
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