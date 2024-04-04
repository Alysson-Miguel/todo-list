import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';

export default function FormsTasks() {
  const { register, handleSubmit, reset } = useForm();
  const [taskCount, setTaskCount] = useState(() => {
    const storedTaskCount = JSON.parse(localStorage.getItem('taskCount')); // Cria uma chave e um valor para armazenar no localStorage
    return storedTaskCount || 0;
  });
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')); // Cria uma chave e um valor para armazenar no localStorage
    return storedTasks || [];
  });

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')); // Carrega as tasks salvas na local storage
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => { // Armazena as duas chaves na LocalStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('taskCount', JSON.stringify(taskCount));
  }, [tasks, taskCount]);

  const onSubmit = (data) => {     // Adiciona data e hora da task
    const newTask = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      dateAdded: new Date().toLocaleString()
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
    <Container className='central' style={{display:'flex'}}>
      <Container className='ListTodo' >
        <h2 style={{ marginLeft: '16px', display: 'block' }}>To do</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <button onClick={() => ApagarTask(task.id)} className='ButtonDelete' >
              <svg width="30" height="30"  viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5625 51.06L34.5 38.1225L47.4375 51.06L51.06 47.4375L38.1225 34.5L51.06 21.5625L47.4375 17.94L34.5 30.8775L21.5625 17.94L17.94 21.5625L30.8775 34.5L17.94 47.4375L21.5625 51.06ZM34.5 69C29.785 69 25.3288 68.0944 21.1313 66.2831C16.9338 64.4719 13.2681 61.9994 10.1344 58.8656C7.00063 55.7319 4.52812 52.0662 2.71687 47.8688C0.905625 43.6712 0 39.215 0 34.5C0 29.7275 0.905625 25.2425 2.71687 21.045C4.52812 16.8475 7.00063 13.1963 10.1344 10.0913C13.2681 6.98625 16.9338 4.52812 21.1313 2.71687C25.3288 0.905625 29.785 0 34.5 0C39.2725 0 43.7575 0.905625 47.955 2.71687C52.1525 4.52812 55.8038 6.98625 58.9088 10.0913C62.0138 13.1963 64.4719 16.8475 66.2831 21.045C68.0944 25.2425 69 29.7275 69 34.5C69 39.215 68.0944 43.6712 66.2831 47.8688C64.4719 52.0662 62.0138 55.7319 58.9088 58.8656C55.8038 61.9994 52.1525 64.4719 47.955 66.2831C43.7575 68.0944 39.2725 69 34.5 69Z" fill="#FFA5A5"/>
              </svg>
              </button>
              <div style={{ fontWeight: '600' }}>{task.title}</div>
              <div>{task.description}</div>
              <div style={{ textAlign: 'right' }}>{task.dateAdded}</div>
            </li>
          ))}
        </ul>
      </Container>
      <Container className='Segundo-bloco'>
        <div className='section'>
          <h3>Finished tasks quantity</h3>
           <div className='contador'>{taskCount}</div> {/*Aqui chamo o contador */}
        </div>
        <div className='aside'>
          <h3 style={{ textAlign: 'center' }}>Add new to do</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className='TaskForm'>
              <label htmlFor="title">Task Name:</label>
              <input type="text" id="title" {...register("title")} placeholder='Title...' required/>
              <label htmlFor="description">Task Description:</label>
              <input type="text" id="description" {...register("description")} placeholder='Description...' required />
            </div>
            <button type="submit" className='button'>Create To do</button>
          </form>
        </div>
      </Container>
    </Container>
  );
}
