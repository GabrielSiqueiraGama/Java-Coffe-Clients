import React from 'react';
import styles from '../../assets/css/Franqueado.module.css';
const barista = require('../../assets/images/barista.png')

const Franqueado =() => {
  return(
    <div className={styles.body}>
      <div className={styles.boxBarista}>
        <img src={barista}/>
      </div>
    </div>
  )
}
export default Franqueado