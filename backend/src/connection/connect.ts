import { Sequelize } from 'sequelize';
//import * as pg from "pg";

export const db = new Sequelize( 
    'todolist',
    'root',
    '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});