import React, { createContext, useContext, useState } from 'react';

//  Cria o contexto de autenticacao utilizando o hook
export const AuthContext = createContext();

//  Cria o provider (componente que fornece o contexto para os componentes children)
export const AuthProvider = ({children}) => {
    //const [user, setUser] = useState(null);

    //  Estado de autenticacao
    const [auth, setAuth] = useState(() => {
        // Lê o valor salvo no localStorage ao iniciar
        return localStorage.getItem('auth') === 'true';
      });

    const signUp = () => {
        //  Simulacao
        setAuth(true);
        localStorage.setItem('auth', 'true');
    }
    
    const login = () => {
        //  Simulacao
        setAuth(true);
        localStorage.setItem('auth', 'true');
    }

    const logout = () => {
        setAuth(false);
        localStorage.setItem('auth', 'false');
    }

    //  Retorna o provider e compartilha o estado, envolvendo os componentes children
    return (
        <AuthContext.Provider value={ {auth, signUp, login, logout} }>
            {children}
        </AuthContext.Provider>
    );
};

//  Hook para usar o contexto
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;