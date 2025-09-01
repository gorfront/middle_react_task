import express from 'express';
import { getAllTasks, createTask, removeTask, updateTask } from '../controllers/taskController';

const router = express.Router();

router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);
router.delete('/tasks/:id', removeTask);
router.put('/tasks/:id', updateTask);

export default router;
