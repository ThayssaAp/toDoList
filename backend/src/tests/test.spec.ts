import {describe, expect, test} from "@jest/globals";
import { CriandoTarefasService } from "../services/criandoTarefas.service";

describe("Criar um usuario", ()=>{
    test("Espera-se poder criar um usuario", async ()=>{
        const service = new CriandoTarefasService();
        let tarefaTeste = {
            "titulo": "jest",
            "descricao": "testando criacao de tarefa"
        }
        const tarefa = await service.execute(tarefaTeste);
        expect(tarefa).toHaveProperty('id');
    });
});