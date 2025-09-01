import { Request, Response } from 'express';
import { getTasks, addTask, deleteTask, updateTaskStatus } from '../models/taskModel';

export const getAllTasks = (req: Request, res: Response): void => {
  const tasks = getTasks();
  res.json(tasks);
};

export const createTask = (req: Request, res: Response): void => {
  const { title, description } = req.body;

  if (!title || title.trim() === '') {
    res.status(400).json({ error: 'Title is required' });
    return;
  }

  const newTask = addTask(title, description);
  res.status(201).json(newTask);
};

export const removeTask = (req: Request, res: Response): void => {
  const { id } = req.params;
  deleteTask(parseInt(id));
  res.status(204).send();
};

export const updateTask = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { completed } = req.body;

  const updatedTask = updateTaskStatus(parseInt(id), completed);
  if (updatedTask) {
    res.status(200).json(updatedTask);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
};
