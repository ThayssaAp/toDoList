import { TarefasModel } from "../models/tarefas.model";
import { v4 as uuid } from "uuid";
import { db } from "../connection/connect";

interface IRequestCriandoTarefas {
  title: string | null;
  description: string | null;
}

export class CriandoTarefasService {
  async execute({ title, description }: IRequestCriandoTarefas) {
    try {
      TarefasModel;
      await db.sync();
      if ((title && description) === undefined || (title && description) === null || (title && description) === '') {
        return 'Invalid title or description!';
      }
      const tarefa: any = await TarefasModel.create({ id: uuid(), title, description });
      return tarefa;
    } catch (error) {
      return error.message;
    }
  }
}