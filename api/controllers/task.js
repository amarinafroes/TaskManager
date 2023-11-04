import { db } from "../db.js";

export const getTask = (_, res) => {
    const q = "SELECT * FROM tasks";

    db.query(q, (err, data)=> {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};
export const addTask = (req, res) => {
    const q =
    "INSERT INTO tasks(`Task`, `Description`, `data_incial`, `date_final`) VALUES(?)";

    const values = [
        req.body.Task,
        req.body.Description,
        req.body.data_incial,
        req.body.date_final,

    ];
    db.query(q, [values], (err)=>{
        if(err) return res.json(err);

        return res.status(200).json("Tarefa crianda com sucesso.");
    });
};
export const updateTask = (req, res) => {
    const q =
    "UPDATE  tasks SET `Task`= ?, `Description` = ?, `data_incial`= ?, `date_final`= ? WHERE  `id`= ?";

    const values = [
        req.body.Task,
        req.body.Description,
        req.body.data_incial,
        req.body.date_final,

    ];
    db.query(q, [...values, req.params.id], (err)=>{
        if(err) return res.json(err);

        return res.status(200).json("Tarefa atualizada com sucesso.");
    });
};
export const deleteTask = (req, res) => {
    console.log("Endpoint deleteTask acionado");
    console.log("ID a ser deletado:", req.params.id);

    const q = "DELETE FROM tasks WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Tarefa deletada com sucesso.");
    });
};

