import React, { useState } from 'react'
import { AtualizarProduto } from "../../components/data/fetchProdutos";
import "./EditarProdutoPage.css"
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarProdutoPage() {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    const produtoAtualizado = await AtualizarProduto(id, nome, parseFloat(valor), imagem);
    if (produtoAtualizado) {
        alert("Produto editado com sucesso!");
        navigate("/dashboard/listar");
    } else {
        alert("Erro ao editar produto!");
        navigate("/dashboard/listar");
    }
    };

    return (
    <div id="usable-area-edit">
        <div className="edit-product-container">
        <h2>Editar Produto</h2>
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

            <button type="submit">Editar Produto</button>
        </form>
        </div>
    </div>
    );
}