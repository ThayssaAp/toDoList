import { DataTypes } from "sequelize";
import { db } from "../connection/connect";

export const TarefasModel = db.define("tarefas", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

});
