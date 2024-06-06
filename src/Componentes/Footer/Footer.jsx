import React from "react";
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'
const Footer = () => {
    return ( 
<>


<h4 className={styles.name}>By Chuck Norris</h4>

<footer className={styles.Rodape}>@Alysson from ❤️ from by Your Alysson Miguel </footer>

<Link to='/Tasks-Finalizadas' className={styles.link}>Tasks Finalizadas</Link>


</>
     );
}
 
export default Footer;