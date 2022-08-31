import {describe, expect, test} from "@jest/globals";
import { CriandoTarefasService } from "../services/criandoTarefas.service";
import { DeletandoTarefasService } from "../services/deletandoTarefas.service";


describe("Criar uma tarefa", ()=>{
    test("Espera-se poder criar uma tarefa", async ()=>{
        const service = new CriandoTarefasService();
        let tarefaTeste = {
            "titulo": "jest",
            "descricao": "testando criacao de tarefa"
        }
        const tarefa = await service.execute(tarefaTeste);
        expect(tarefa).toHaveProperty('id');
    });
});

describe("Deletar uma tarefa", ()=>{
    let tarefa: TarefasModelGlobal;

    beforeAll(async ()=>{
        const serviceCriando = new CriandoTarefasService();
        const tarefaCriada: TarefasModelGlobal = await serviceCriando.execute({
            titulo: "teste jest delete", 
            descricao: "testando o servico delete pelo jest"
        });
        tarefa = tarefaCriada;
    })
    test("espera-se poder deletar uma tarefa", async ()=>{
        
        const serviceDeletando = new DeletandoTarefasService();  
        const result = await serviceDeletando.execute(tarefa.id);
        expect(result).toHaveProperty('id');
    })
})