import React from "react";
import { useNavigate } from "react-router";
import './style.css';

export default function Cadastro() {
    const navigate = useNavigate();

    return (
        <div className="signup-container">
            <form className="signup-form">
                <h2>Cadastro</h2>
                <input type="text" placeholder="Nome completo"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirmar senha"/>
                <button type="button" onClick={() => navigate("/home")}>Cadastrar</button>
            </form>
        </div>
    );
}