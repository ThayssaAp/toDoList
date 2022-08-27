import express from "express";
import "dotenv/config";
import cors from "cors";
import { routerTarefas } from "./routes/tarefas.routes";


const app = express();

app.use(express.json());
app.use(cors());
app.use(routerTarefas);

app.listen(3001, ()=>{
    console.log("Server is running🚀");
})