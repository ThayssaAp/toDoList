import {Schema, model, Document} from 'mongoose';


interface Lista extends Document{
    id: String
    descricao:string
}

const ListaSchema = new Schema({
    id: String,
    descricao: String
});

export default model<Lista>('Lista', ListaSchema);