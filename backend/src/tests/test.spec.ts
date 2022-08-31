import { describe, expect, test } from "@jest/globals";
import { CriandoTarefasService } from "../services/criandoTarefas.service";
import { DeletandoTarefasService } from "../services/deletandoTarefas.service";
import { PegandoTarefaByPkService } from "../services/pegandoTarefaByPk.service";
import { PegandoTarefasService } from "../services/pegandoTarefas.service";
import { UpdateTarefasService } from "../services/updateTarefas.service";

describe("Criar uma tarefa", () => {
    test("Espera-se poder criar uma tarefa", async () => {
        const serviceCriandoTarefa = new CriandoTarefasService();
        let tarefaTeste = {
            "titulo": "jest",
            "descricao": "testando criacao de tarefa"
        }
        const result = await serviceCriandoTarefa.execute(tarefaTeste);
        expect(result).toHaveProperty('id');
    });
});

let tarefa: TarefasModelGlobal;

beforeAll(async () => {
    const serviceCriandoTarefa = new CriandoTarefasService();
    const tarefaCriada: TarefasModelGlobal = await serviceCriandoTarefa.execute({
        titulo: "teste jest delete",
        descricao: "testando o servico delete pelo jest"
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
    })
});

describe("Alterando tarefa", () => {
    test("Espera-se receber a tarefa alterada", async () => {
        console.log(tarefa.id);
        let updateTarefa = {
            id: tarefa.id,
            titulo: 'novo nome via jest',
            descricao: 'nova descricao via jest'
        }
        const serviceAlterandoTarefa = new UpdateTarefasService();
        const result = await serviceAlterandoTarefa.execute(updateTarefa)
        expect(result).toHaveProperty('titulo', updateTarefa.titulo);
    })
});

describe("Deletar uma tarefa", () => {
    test("Espera-se poder deletar uma tarefa", async () => {
        const serviceDeletandoTarefa = new DeletandoTarefasService();
        const result = await serviceDeletandoTarefa.execute(tarefa.id);
        expect(result).toHaveProperty('id');
    })
});