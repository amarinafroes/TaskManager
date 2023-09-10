import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"150700",
    database:"todolist"
})