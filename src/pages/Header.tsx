import React from 'react';
import styles from '../assets/css/Header.module.css';
const logo = require('../assets/images/logoJava.png');

const Header = () => {
  return(
    <div className={styles.header}>
      <div> 
        <img src={logo}/>
        <p>Java Coffe</p>
      </div>
      <div>
        <p>Home</p>
        <p>Cardapio</p>
        <p>Franqueado</p>
      </div>
      
    </div>
  )
}
export default Header