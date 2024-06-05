import React from 'react';
import styles from '../assets/css/Footer.module.css';
const logo = require('../assets/images/logoJava.png');

const Footer = () =>{
  return(
    <div className={styles.body}>
      <img src={logo}/>
      <p>Java Coffe</p>
  </div>
  )
}
export default Footer