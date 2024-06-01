import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import SVG from './Vector.svg'
import Container from 'react-bootstrap/Container'
import './Forms.module.css'

export default function FormsTasks() {
  const { register, handleSubmit, reset } = useForm();
  const [taskCount, setTaskCount] = useState(() => {
    const storedTaskCount = JSON.parse(localStorage.getItem('taskCount')); // recuperando o valor armazenado na chave taskcount
    return storedTaskCount || 0;
  });
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')); // recuperando o valor armazenado na chave stodedTask
    return storedTasks || [];
  });

  useEffect(() => { 
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('taskCount', JSON.stringify(taskCount));
  }, [tasks, taskCount]);

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

  const ApagarTask = (id) => {   // Adiciona +1 nas tasks removidas/finalizadas
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    setTaskCount(taskCount + 1);
  };

  return (
<>
<body>
  

        
  <article>
  
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <img src={SVG} alt="svg" className='svg' onClick={() => ApagarTask(task.id)}/>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <span>{task.dateAdded}</span>
        </li>
      ))}
    </ul>
  </article>

      <Container>
  <section>
    <h2>Finished tasks quantity</h2>
    <h1 className='contador'>{taskCount}</h1> 
  </section>



        <aside>
          <h2>Add new to do</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
              <label htmlFor="title">Task Name:</label>
              <input type="text" id="title" {...register("title")} placeholder='Title...' required/>
              
              <label htmlFor="description">Task Description:</label>
              <input type="text" id="description" {...register("description")} placeholder='Description...' required />
            <button type="submit" className='ButtonCreate'>Create To do</button>
          </form>
        </aside>
        </Container>
        </body>
        
        </> 
  );
}
