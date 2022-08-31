import {describe, expect, test} from "@jest/globals";
import { CriandoTarefasService } from "../services/criandoTarefas.service";
import { DeletandoTarefasService } from "../services/deletandoTarefas.service";
import { PegandoTarefaByPkService } from "../services/pegandoTarefaByPk.service";
import { PegandoTarefasService } from "../services/pegandoTarefas.service";

describe("Criar uma tarefa", ()=>{
    test("Espera-se poder criar uma tarefa", async ()=>{
        const service = new CriandoTarefasService();
        let tarefaTeste = {
            "titulo": "jest",
            "descricao": "testando criacao de tarefa"
        }
        const result = await service.execute(tarefaTeste);
        expect(result).toHaveProperty('id');
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
    test("Espera-se poder deletar uma tarefa", async ()=>{   
        const serviceDeletando = new DeletandoTarefasService();  
        const result = await serviceDeletando.execute(tarefa.id);
        expect(result).toHaveProperty('id');
    })
});

describe("Pegar tarefas", ()=>{
    test("Espera-se retornar todas as tarefas", async ()=>{
       const servicePegandoTarefa = new PegandoTarefasService();
       const result = await servicePegandoTarefa.execute();
       expect(result).not.toHaveProperty('message');
    })
});

describe("Pegar tarefa por id", ()=>{
    let tarefa: TarefasModelGlobal;
    beforeAll(async ()=>{
        const serviceCriando = new CriandoTarefasService();
        const tarefaCriada: TarefasModelGlobal = await serviceCriando.execute({
            titulo: "teste jest delete", 
            descricao: "testando o servico delete pelo jest"
        });
        tarefa = tarefaCriada;
    });
    test("Espera-se uma tarefa", async ()=>{
        const servicePegandoTarefa = new PegandoTarefaByPkService();
        const result = await servicePegandoTarefa.execute(tarefa.id);
        expect(result).toHaveProperty('id');
    })
});