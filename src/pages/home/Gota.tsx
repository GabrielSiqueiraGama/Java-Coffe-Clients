import React from 'react';
import styles from '../../assets/css/Gota.module.css'
const cafeCidade = require('../../assets/images/cafeCidade.png');

const Gota = () => {
  return(
    <div className={styles.body}>
        <img src={cafeCidade}/>
        <h1>Cada gota, uma nova descoberta.</h1>
    </div>
    
  )
}
export default Gota