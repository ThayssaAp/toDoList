import { TarefasModel } from "../models/tarefas.model";
import { v4 as uuid } from "uuid";
import { db } from "../connection/connect";

interface IRequestCriandoTarefas {
  titulo: string | null;
  descricao: string | null;
}

export class CriandoTarefasService {
  async execute({ titulo, descricao }: IRequestCriandoTarefas) {
    try {
      TarefasModel;
      await db.sync();
      if ((titulo && descricao) === undefined || (titulo && descricao) === null || (titulo && descricao) === '') {
        return 'Invalid title or description!';
      }
      const tarefa: any = await TarefasModel.create({ id: uuid(), titulo, descricao });
      return tarefa;
    } catch (error) {
      return error.message;
    }
  }
}