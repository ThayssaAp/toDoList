import { describe, expect, test } from "@jest/globals";
import { CriandoTarefasService } from "../services/criandoTarefas.service";
import { DeletandoTarefasService } from "../services/deletandoTarefas.service";
import { PegandoTarefaByPkService } from "../services/pegandoTarefaByPk.service";
import { PegandoTarefasService } from "../services/pegandoTarefas.service";
import { UpdateTarefasService } from "../services/updateTarefas.service";
import { UpdateStatusTarefasService } from "../services/updateStatusTarefas.service";

describe("Criar uma tarefa", () => {
    test("Espera-se poder criar uma tarefa", async () => {
        const serviceCriandoTarefa = new CriandoTarefasService();
        let tarefaTeste = {
            "title": "jest",
            "description": "testando criacao de tarefa"
        }
        const result = await serviceCriandoTarefa.execute(tarefaTeste);
        expect(result).toHaveProperty('id');
        expect(result).not.toHaveProperty('messageError');
    });
});

let tarefa: TarefasModelGlobal;

beforeAll(async () => {
    const serviceCriandoTarefa = new CriandoTarefasService();
    const tarefaCriada: TarefasModelGlobal = await serviceCriandoTarefa.execute({
        title: "teste jest delete",
        description: "testando o servico delete pelo jest"
    });
    tarefa = tarefaCriada;
});

describe("Pegar tarefas", () => {
    test("Espera-se retornar todas as tarefas", async () => {
        const servicePegandoTarefa = new PegandoTarefasService();
        const result = await servicePegandoTarefa.execute();
        expect(result).not.toHaveProperty('message');
    })
});

describe("Pegar tarefa por id", () => {
    test("Espera-se uma tarefa", async () => {
        const servicePegandoTarefa = new PegandoTarefaByPkService();
        const result = await servicePegandoTarefa.execute(tarefa.id);
        expect(result).toHaveProperty('id');
        expect(result).not.toHaveProperty('messageError');
    })
});

describe("Alterando tarefa", () => {
    test("Espera-se receber a tarefa alterada", async () => {
        let updateTarefa = {
            id: tarefa.id,
            title: 'novo nome via jest',
            description: 'nova description via jest'
        }
        const serviceAlterandoTarefa = new UpdateTarefasService();
        const result = await serviceAlterandoTarefa.execute(updateTarefa)
        expect(result).toHaveProperty('title', updateTarefa.title);
        expect(result).not.toHaveProperty('messageError');
    })
});

describe("Alterando status da tarefa", ()=> {
    test("Espera-se alterar status de finalizada da tarefa", async ()=> {
        let updateTarefa = {
            id: tarefa.id,
            complete: tarefa.complete === true ? false : true
        }
        const serviceAlterandoStatusTarefa = new UpdateStatusTarefasService();
        const result = await serviceAlterandoStatusTarefa.execute(updateTarefa);
        expect(result).not.toHaveProperty('messageError');
    })
})

describe("Deletar uma tarefa", () => {
    test("Espera-se poder deletar uma tarefa", async () => {
        const serviceDeletandoTarefa = new DeletandoTarefasService();
        const result = await serviceDeletandoTarefa.execute(tarefa.id);
        expect(result).toHaveProperty('id');
        expect(result).not.toHaveProperty('messageError');
    })
});