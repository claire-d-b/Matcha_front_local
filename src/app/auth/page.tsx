import React, { createContext, useState, useContext, ReactNode } from 'react'

// Set up AuthContext and useAuth Hook
interface AuthContextType {
    authTokens: string | null
    user: { username: string } | null
    isAuthenticated: boolean
    login: (username: string, password: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextType>({
    authTokens: null,
    user: null,
    isAuthenticated: false,
    login: async () => {},
    logout: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authTokens, setAuthTokens] = useState<string | null>(null)
    const [user, setUser] = useState<{ username: string } | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = async (username: string, password: string) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })
            if (response.ok) {
                const data = await response.json()
                setAuthTokens(data.access_token)
                setUser({ username })
                setIsAuthenticated(true)
            } else {
                console.error('Login failed')
            }
        } catch (error) {
            console.error('Login error:', error)
        }
    }

    const logout = () => {
        setAuthTokens(null)
        setUser(null)
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ authTokens, user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
