/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"

interface AuthContextProps {
    user: UsuarioLogin
    handleLogout(): void
    handleLogin(user: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        name: "",
        user: "",
        password: "",
        photo: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/users/login`, usuarioLogin, setUsuario)
            alert("O Usuário foi autenticado com sucesso!")
        } catch (error) {
            alert("Os Dados do usuário estão inconsistentes!")
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            name: "",
            user: "",
            password: "",
            photo: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}