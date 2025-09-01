export interface Task {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
}

let tasks: Task[] = [
  { id: 1, title: 'Buy a book', completed: false, description: '' },
  { id: 2, title: 'Go to the gym', completed: true, description: '' }
];

export const getTasks = (): Task[] => tasks;

export const addTask = (title: string, description: string): Task => {
  const newTask: Task = {
    id: tasks.length + 1,
    title,
    completed: false,
    description
  };
  tasks.push(newTask);
  return newTask;
};

export const deleteTask = (id: number): void => {
  tasks = tasks.filter((task) => task.id !== id);
};

export const updateTaskStatus = (id: number, completed: boolean): Task | undefined => {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.completed = completed;
    return task;
  }
  return undefined;
};