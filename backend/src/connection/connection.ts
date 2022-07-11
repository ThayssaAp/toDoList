import mongoose from 'mongoose';

 async function connection(){

    try {
        mongoose.connect('mongodb+srv://ferreirinha:admin@todolist.bkxct.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log("conectado"))
       
    } catch (error) {
        console.log('Não foi possivel conectar');
    }
}
export default connection;