import React from 'react';
import styles from '../Forms.module.css';
import SVG from './Vector.svg';

export default function ToDo({ tasks, ApagarTask }) {
  return (
    <section className={styles.section}>
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
  );
}
