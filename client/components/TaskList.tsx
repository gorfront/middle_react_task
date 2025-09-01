'use client';

import React, { useState, useEffect } from 'react';
import { Task } from '../types/task';
import axios from 'axios';

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks = [], setTasks }) => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  const handleCheckboxChange = async (taskId: number) => {
    try {
      const task = tasks.find((task) => task.id === taskId);
      if (task) {
        await axios.put(`http://localhost:5000/tasks/${taskId}`, {
          completed: !task.completed,
        });

        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        );
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleRemoveTask = async (taskId: number) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`);

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const filteredTasks =
    filter === 'all'
      ? tasks
      : tasks.filter((task) => (filter === 'completed' ? task.completed : !task.completed));

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'all' | 'completed' | 'pending')}
          className="p-2 border rounded"
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed Tasks</option>
          <option value="pending">Pending Tasks</option>
        </select>
      </div>

      {filteredTasks?.length > 0 ? (
        filteredTasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between mb-4 p-2 border-b">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
                className="mr-2"
              />
              <h3 className="font-semibold">{task.title}</h3>
              <p className="ml-4">{task.description}</p>
              <span className={`ml-2 ${task.completed ? 'text-green-500' : 'text-yellow-500'}`}>
                {task.completed ? 'Completed' : 'Pending'}
              </span>
            </div>

            <button
              onClick={() => handleRemoveTask(task.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};

export default TaskList;
