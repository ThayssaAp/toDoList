import express from "express";
import "dotenv/config";
import cors from "cors";
import { routerTarefas } from "./routes/tarefas.routes";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/todo-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routerTarefas);

app.listen(3001, ()=>{
    console.log("Server is running🚀");
});