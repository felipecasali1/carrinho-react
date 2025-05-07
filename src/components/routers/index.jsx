import React from "react";
import { Routes, Route } from "react-router";
import Cadastro from "../../pages/cadastro";
import Login from "../../pages/login";
import Home from "../../pages/home";

export default function Routers() {
    return (
        <Routes>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="" element={<Home />}/>
        </Routes>
    );
}