import { db } from "../connection/connect";
import { TarefasModel } from "../models/tarefas.model";

interface IRequestUpdateTarefa {
    id: string;
    titulo: string;
    descricao: string;
}
export class UpdateTarefasService {
    async execute({ id, titulo, descricao }: IRequestUpdateTarefa) {
        try {
            const tarefa = await TarefasModel.findByPk(id);
            if (!tarefa) {
                return "not found";
            }
            Object.assign(tarefa, {
                id: id,
                titulo: titulo,
                descricao: descricao
            });
            console.log("update: ",tarefa);
            return tarefa;
        } catch (error) {
            return error.message;
        }

    }
}