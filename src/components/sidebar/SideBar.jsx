import React, { useState } from 'react'
import "./SideBar.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function SideBar() {
    const { logout } = useAuth();
        
    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <div className="dashboard-sidebar">
            <h1>Dashboard</h1>
            <ul>
                <li><Link to="/produtos">Voltar para a Loja</Link></li>
                <li><Link to="/dashboard/listar">Listar Produtos</Link></li>
                <li><Link to="/dashboard/criar">Criar Produto</Link></li>
                <li><Link onClick={handleLogout}>Logout</Link></li>
            </ul>
        </div>
    );
}