import listen from './listen/listen';
import connection from './connection/connection';


//fazendo conexão com o banco
connection();

// Acessando porta 
const app = new listen();
app.listen();