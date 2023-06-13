import { TarefasModel } from "../models/tarefas.model";

interface IGetTaskServiceProps{
  orderBy?: OrderBy;
  paramsFilter?: ParamsFilter;
}

enum OrderBy {
    Asc = 'ASC',
    Desc = 'DESC'
}

enum ParamsFilter {
    Title = 'title',
    Description = 'description'
}

export class PegandoTarefasService {
    async execute({ orderBy = OrderBy.Asc, paramsFilter }: IGetTaskServiceProps){
        try {
            console.log(paramsFilter)
            if(paramsFilter){
                const tarefas = await TarefasModel.findAll({ order:[
                    [`${paramsFilter}`, `${orderBy}`]
                ]});
                return tarefas;
            }
            
            const tarefas = await TarefasModel.findAll({ order:[
                ['complete', `${orderBy}`]
            ]});
            return tarefas;            
        } catch (error) {
            return error.message;
        }
       
    }
}