import express from 'express';
import {addTask, deleteTask, getAllTasks, getTask, updateTask} from '../controllers/taskController.js';

const router = express.Router();

router.post("/",addTask);
router.get("/",getAllTasks);
router.patch("/:id",updateTask);
router.delete("/:id",deleteTask);
router.get("/:id",getTask);


export default router;