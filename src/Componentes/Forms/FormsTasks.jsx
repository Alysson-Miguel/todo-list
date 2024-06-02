import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import SVG from './Vector.svg'
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

  useEffect(() => { // Armazena as duas chaves na LocalStorage (Captura uma ARRY e Retorna uma String Obj)
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('taskCount', JSON.stringify(taskCount));
  }, [tasks, taskCount]);

  const onSubmit = (data) => {     // Adiciona data e hora da task
    const newTask = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      dateAdded: new Date().toLocaleDateString()
    };
    setTasks([...tasks, newTask]);  // Limpa os inputs pra colocar novas tasks
    reset();
  };

  const ApagarTask = (id) => {   // Adiciona +1 nas tasks removidas/finalizadas
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    setTaskCount(taskCount + 1);
  };

  return (
    <Container style={{display:'flex'}}>
    
      <section >
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <img src={SVG} alt="svg" onClick={() => ApagarTask(task.id)} className='ButtonDelete' />
              <h1>{task.title}</h1>
              <p>{task.description}</p>
              <span>{task.dateAdded}</span>
            </li>
          ))}
        </ul>
      </section>
      
      <Container >
        <aside>
          <h2>Finished tasks quantity</h2>
           <p style={{fontSize:'xx-large'}}>{taskCount}</p> 
        </aside>
        <article>
          <h2>Add new to do</h2>
          <form onSubmit={handleSubmit(onSubmit)} >
            
              <label htmlFor="title">Task Name:</label>
              <input type="text" id="title" {...register("title")} placeholder='Title...' required/>
              <label htmlFor="description">Task Description:</label>
              <input type="text" id="description" {...register("description")} placeholder='Description...' required />
          
            <button type="submit" className='button'>Create To do</button>
          </form>
        </article>
        </Container>
      </Container>
      
         
  );
}
