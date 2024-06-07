import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import styles from '../assets/css/NavBar.module.css';
const logo = require('../assets/images/logoJava.png');

const NavBar = () => {
  return(
    <nav className={styles.nav}>
      <div className={styles.divLogo}>
  
        <img src={logo} alt="Logo do simbolo do Java" />
        <p>Java Coffee</p>
      </div>
      <ul>
      <NavLink to='/Home' ><li>Home</li></NavLink>
      <NavLink to='/Cardapio' ><li>Cardapio</li></NavLink>
      <NavLink to='/Franqueado' ><li>Franqueado</li></NavLink>
      </ul>
    </nav>
  )
}
export default NavBar