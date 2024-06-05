import React from 'react';
import styles from '../../assets/css/Lanche.module.css';
const fileiraCafe = require('../../assets/images/fileiraCafe.png')
const lanche = require('../../assets/images/lanche.png')

const Lanche = () =>{
  return(
    <div className={styles.body}>
      <img src={fileiraCafe} className={styles.fileiraUm}/>
      <div className={styles.meio}>
        <h1 className={styles.texto}>Hora do lanche!</h1>
        <h3 className={styles.descricao}>Dê uma pausa e aproveite nossos lanches deliciosos. Tem sempre algo especial esperando por você!</h3>
        <button className={styles.botao}>Clique aqui</button>
        <img src={lanche} className={styles.lanche}/>
      </div>
      <img src={fileiraCafe} className={styles.fileiraDois}/>
    </div>
    
  )
}
export default Lanche