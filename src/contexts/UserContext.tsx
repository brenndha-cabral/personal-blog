import { ReactNode, createContext, useState } from "react";

interface UserContextProps {
    name: string
    trocarNome: (name: string) => void
}

interface UserProviderProps {
    children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: UserProviderProps) {
    const [name, setNome] = useState('');

    function trocarNome(nome: string) {
        setNome(nome)
    }

    return (
        <UserContext.Provider value={{ name, trocarNome }}>
            {children}
        </UserContext.Provider>
    )
}