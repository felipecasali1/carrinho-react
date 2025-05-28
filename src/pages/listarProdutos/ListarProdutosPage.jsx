import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from "../../context/DataContext.jsx";
import { DeletarProduto } from '../../components/data/fetchProdutos.jsx';
import { LerProdutos } from '../../components/data/fetchProdutos.jsx';
import "./ListarProdutosPage.css"

export default function ListarProdutosPage() {
  const { produtos, setProdutos } = React.useContext(DataContext);
  const navigate = useNavigate();

  const handleRemover = async (id) => {
    const confirmar = window.confirm("Confirmar remoção?");
    if (!confirmar) return;
  
    await DeletarProduto(id);
    LerProdutos(setProdutos);
  };

  useEffect(() => {
    LerProdutos(setProdutos);
  }, []);

  return (
    <div id="usable-area">
      <div className="list-container">
        <h2>Lista de Produtos</h2>
        {produtos && produtos.length > 0 ? (
          produtos.map((produto) => (
            <div key={produto.id} className="list-item">
              <img src={produto.imagem} alt={produto.nome} />
              <div className="list-item-desc-container">
                <div className="list-item-info">
                  <h3>{produto.nome}</h3>
                  <p>R$ {produto.valor.toFixed(2)}</p>
                </div>
                <div className="list-item-buttons">
                  <Link to={`/dashboard/editar/${produto.id}`}>
                    <button>Editar</button>
                  </Link>
                  <button onClick={() => handleRemover(produto.id)}>Remover</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ padding: '2rem', textAlign: 'center' }}>Nenhum produto encontrado!</p>
        )}
      </div>
    </div>
  );
}