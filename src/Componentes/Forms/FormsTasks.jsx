import React from 'react';
import { useTaskForm } from '../Forms/Forms';
import ToDo from './To do/ToDo';
import styles from './Forms.module.css'
import Container from 'react-bootstrap/Container';


export default function FormsTasks() {
  const { register, handleSubmit, onSubmit, TaskCount, tasks, ApagarTask } = useTaskForm();
  return (
    <Container className={styles.Container}>
    
        <ToDo tasks={tasks} ApagarTask={ApagarTask}/>
      
      <Container className={styles.items} >
        
        <aside className={styles.contador}>
          <h2>Finished tasks quantity</h2>
           <h2>{TaskCount}</h2>           
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
