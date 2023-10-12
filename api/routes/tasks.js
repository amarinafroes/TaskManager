import express from "express";
import { getTask, addTask, updateTask, deleteTask } from "../controllers/task.js";

const router = express.Router();

router.get("/", getTask);

router.post("/", addTask);

router.put("/: id", updateTask);

router.delete("/: id", deleteTask);

export default router;