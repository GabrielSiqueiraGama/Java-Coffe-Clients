import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Produto {
  id: number;
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
    <div className='mt-3'>
      <h1>Lista de produtos:</h1>
      <table>
        <thead>
          <tr>
            <th>Id:</th>
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
                <td>{produto.id}</td>
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
