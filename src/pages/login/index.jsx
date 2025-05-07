import React from "react";
import { useNavigate } from "react-router";
import './style.css';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <button type="button" onClick={() => navigate(-1)}>Entrar</button>
            </form>
        </div>
    );
}