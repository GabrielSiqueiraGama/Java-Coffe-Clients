import React from 'react';
import styles from '../../assets/css/Franqueado.module.css';
const barista = require('../../assets/images/barista.png')

const Franqueado =() => {
  return(
    <div className={styles.body}>
      <div className={styles.boxBarista}>
        <img src={barista}/>
        <h1>Seja um franqueado!</h1>
        <p>Transforme sua paixão por café em um negócio de sucesso. Torne-se um franqueado e faça parte de uma marca que valoriza sofisticação, qualidade e estilo.</p>
      </div>
    </div>
  )
}
export default Franqueado