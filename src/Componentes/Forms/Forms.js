import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useTaskForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [TaskCount, setTaskCount] = useState(() => {
    const storedTaskCount = JSON.parse(localStorage.getItem('TaskCount'));
    return storedTaskCount || 0;
  });
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks || [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('TaskCount', JSON.stringify(TaskCount));
  }, [tasks, TaskCount]);


const onSubmit = (data) => {
    const newTask = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      dateAdded: new Date().toLocaleDateString()
    };
    setTasks([...tasks, newTask]);
    reset();
  };
  
  const ApagarTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setTaskCount(TaskCount + 1);
  };
  

  return { register, handleSubmit, onSubmit, ApagarTask, tasks, TaskCount};
};
