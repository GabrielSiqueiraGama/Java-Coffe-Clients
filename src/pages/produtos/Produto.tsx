import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../assets/css/Produtos.module.css';

interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
}

const Produto = () => {
  const [data, setData] = useState<Produto[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/cardapio')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={styles.body}>
      <h1>Lista de produtos:</h1>
        <div className={styles.boxProdutos}>
        {
          data.map((produto, index) => (
            <div key={index} className={styles.boxItens}>
              <img src={produto.imagem} alt={produto.nome} className={styles.imgItens} />
              <div className={styles.textProduto}>
                <p className={styles.productName}>{produto.nome}</p>
                <p>{produto.descricao}</p>
                <p>Preço: {produto.preco} R$</p>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  );
};

export default Produto;
