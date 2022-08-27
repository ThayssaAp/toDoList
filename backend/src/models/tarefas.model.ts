import { DataTypes } from "sequelize";
import { db } from "../connection/connect";

export const TarefasModel = db.define("tarefas", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
