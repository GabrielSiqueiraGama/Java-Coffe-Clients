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

  const imagemteste = "https://static.itdg.com.br/images/360-240/9a4fba63abe7b8d25438cd070f2a2d78/shutterstock-87785986-1-.jpg";
  return (
    <div className={styles.body}>
      <div className={styles.boxItens}>
        <img src={imagemteste} className={styles.imgItens}/>
        <div className={styles.textProduto}>
          <p className={styles.productName}>Lorem</p>
          <p>Descrição: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quos animi </p>
        </div>
        <div>
        {
          data.map((produto, index) => (
            <div key={index} className={styles.boxItens}>
              <img src={produto.imagem} alt={produto.nome} className={styles.imgItens} />
              <div className={styles.textProduto}>
                <p className={styles.productName}>{produto.nome}</p>
                <p>Descrição: {produto.descricao}</p>
                <p>Preço: {produto.preco}</p>
              </div>
            </div>
          ))
        }
      </div>
      </div>
      <h1>Lista de produtos:</h1>
      <table>
        <thead>
          <tr>
            <th>Nome:</th>
            <th>Preço:</th>
            <th>Descrição:</th>
            <th>Imagem:</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((produto, index) => (
              <tr key={index}>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>{produto.descricao}</td>
                <td>
                  <img src={produto.imagem} alt={produto.nome} style={{ width: '100px', height: '100px' }} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Produto;
