import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Produto = () => {

  const [data, setData] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:8080/api/cardapio').then(res => setData(res.data)).catch(err => console.log(err))
  }, [])

  return (
    <div className='mt-3'>
      <h1>Lista de produtos:</h1>
      <table>
        <thead>
          <tr>
            <th>Id:</th>
            <th>Nome: </th>
            <th>Preço: </th>
            <th>Descrição: </th>
            <th>Imagem: </th>
          </tr>
          <tbody>
            {
              data.map((produto, index) =>{
                return <tr key={index}>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.preco}</td>
                  <td>{produto.descricao}</td>
                  <td>{produto.imagem}</td>
                </tr>
              })
            }
          </tbody>
        </thead>
      </table>
    </div>
  );
};

export default Produto;
