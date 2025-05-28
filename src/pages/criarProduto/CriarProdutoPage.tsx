import React, { useContext, useState } from "react";
import { CriarProduto } from "../../components/data/fetchProdutos";
import "./CriarProdutoPage.css"

export default function CriarProdutoPage() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoProduto = await CriarProduto(nome, parseFloat(valor), imagem);
    if (novoProduto) {
      alert("Produto cadastrado com sucesso!");
      
      setNome('');
      setValor('');
      setImagem('');
    } else {
      alert("Erro ao cadastrar produto!");
    }
  };

  return (
    <div id="usableArea">
      <div className="create-product-container">
        <h2>Criar Produto</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do produto"
          />

          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="Digite o preço"
          />

          <input
            type="text"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            placeholder="Link da imagem"
          />

          <button type="submit">Criar Produto</button>
        </form>
      </div>
    </div>
  );
}