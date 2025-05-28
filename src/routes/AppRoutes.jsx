import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Products from "../pages/products/Products";
import SignUp from "../pages/signup/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import CriarProdutoPage from "../pages/criarProduto/CriarProdutoPage";
import ListarProdutos from "../pages/listarProdutos/ListarProdutosPage";
import EditarProdutoPage from "../pages/editarProdutoPage/EditarProdutoPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/cadastro" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Login />}/>
            <Route path="/produtos" element={
                <PrivateRoute>
                    <Products />
                </PrivateRoute>
            }/>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
                <Route path="listar" element={<ListarProdutos />} />
                <Route path="criar" element={<CriarProdutoPage />} />
                <Route path="editar/:id" element={<EditarProdutoPage />} />
            </Route>
            <Route path="*" element={<h1 style={{color: 'white'}}>Not found</h1>}/>
        </Routes>
    );
}