import React from 'react';
import styles from '../assets/css/Footer.module.css';
import { Link, NavLink } from 'react-router-dom'
const logo = require('../assets/images/logoJava.png');

const Footer = () =>{
  return(
    <footer className={styles.footer}>
      <div>
        <NavLink to='/Home' className={styles.links}>
          <div className={styles.logo}>
            <img src={logo}/>
            <p>Java Coffe</p>
          </div>
        </NavLink>
        <div  className={styles.midias}>
          <p>w</p>
          <p>f</p>
          <p>i</p>
        </div>
      </div>
      
      <div>
        <p><NavLink to='/Cardapio' className={styles.links}>Cardapio</NavLink></p>
      </div>
      <div>
        <p><NavLink to='/Franqueado' className={styles.links}> Franqueado</NavLink></p>
      </div>
      <div>
        <p><NavLink to='/' className={styles.links}> Franqueado</NavLink></p>
      </div>
    </footer>
  )
}
export default Footer