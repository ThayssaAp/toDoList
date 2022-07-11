import { Request, Response } from 'express';
import lista from '../models/lista';


class listaController {

    public async buscarTodos(req: Request, res: Response) {
        try {
            const tarefas = await lista.find();
            return res.json(tarefas);
        } catch (error) {
            res.json({ mensagem: 'Erro ao buscar tarefas' });
        }

    }

    public async buscarPorId(req: Request, res: Response) {
        try {
            const tarefa = await lista.findById(req.params.id);
            return res.json(tarefa);
        } catch (error) {
            res.json({ mensagem: `Erro ao buscar tarefa`});
        }

    }

    public async criarTarefa(req: Request, res: Response) {
        try {
            const {descricao} = req.body;
            const tarefa = await lista.create({descricao});
            return res.json({ tarefa, mensagem: 'Tarefa cadastrada' });
        } catch (error) {
            return res.json({ mensagem: 'Não foi possível cadastrar sua tarefa' });
        }

    }

    public async editarTarefa(req: Request, res: Response) {
        try {
            const {descricao} = req.body;
            console.log(req.params.id)
            const tarefa = await lista.findByIdAndUpdate(req.params.id, {descricao: descricao}, { new: true});
            return res.json({ tarefa, mensagem: 'Tarefa editada' });
        } catch (error) {
            return res.json({ mensagem: 'Não foi possível editar esta tarefa' });
        }

    }

    public async deletarTarefa(req: Request, res: Response) {
        try {
            const tarefa = await lista.findOneAndDelete({_id: req.params.id});
            return res.json({ tarefa, mensagem: 'Tarefa deletada' });
        } catch (error) {
           return res.json({mensagem: 'tarefa deletada com sucesso '});
        }

    }
}
export default new listaController;