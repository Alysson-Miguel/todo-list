import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import SVG from './Vector.svg'
import styles from './Forms.module.css'

export default function FormsTasks() {
  const { register, handleSubmit, reset } = useForm();
  const [taskCount, setTaskCount] = useState(() => {
    const storedTaskCount = JSON.parse(localStorage.getItem('taskCount'));
    return storedTaskCount || 0;
  });
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')); 
    return storedTasks || [];
  });
  // Persiste do dados
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
    setTasks([...tasks, newTask]);  // Limpa os inputs pra colocar novas tasks
    reset();
  };

  const ApagarTask = (id) => {  
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    setTaskCount(taskCount + 1);
  };

  return (
    <Container className={styles.Container}>
    
      <section className={styles.section} >
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={styles.li}>
              <img src={SVG} alt="svg" onClick={() => ApagarTask(task.id)} className={styles.ButtonDelete} />
              <h3 className={styles.tituloTask}>{task.title}</h3>
              <p>{task.description}</p>
              <span>{task.dateAdded}</span>
            </li>
          ))}
        </ul>
      </section>
      
      <Container className={styles.items} >
        
        <aside className={styles.contador}>
          <h2>Finished tasks quantity</h2>
           <h2>{taskCount}</h2>           
        </aside>
        <article className={styles.newTask}>
          <h2 style={{textAlign: 'center'}}>Add new to do</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form} >
            
              <label htmlFor="title">Task Name:</label>
              <input type="text" id="title" {...register("title")} placeholder='Title...' required/>

              <label htmlFor="description">Task Description:</label>
              <input type="text" id="description" {...register("description")} placeholder='Description...' required />
          
            <button type="submit" className={styles.button}>Create To do</button>
          </form>
        </article>
        </Container>
      </Container>
      
         
  );
}
