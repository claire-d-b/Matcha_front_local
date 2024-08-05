'use client'

import { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { register, login, logout, getProfile, User } from './auth';

interface AuthContextType {
    user: User | null;
    signup: (firstName: string, lastName: string, email: string, password: string) => Promise<any>;
    signin: (user: User) => Promise<any>;
    signout: () => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const _ = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

const useProvideAuth = (): AuthContextType => {
    const [user, setUser] = useState<User | null>(null);

    const signup = async (firstName: string, lastName: string, email: string, password: string) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });
        if (!response.ok) {
            const errorData = await response.json();
            return { error: errorData.message };
        }

        const data = await response.json();
        return { message: data.message };
    } catch (error: any) {
        return { error: error.message };
    }
    };

    const signin = async (user: User) => {
        await login(user); 
        await fetchProfile(user.session_id);
    };

    const signout = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/signout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });
        if (!response.ok) {
            const errorData = await response.json();
            return { error: errorData.message };
        }

        const data = await response.json();
        return { message: data.message };
    } catch (error: any) {
        return { error: error.message };
    }
    };
        // await logout();
        // setUser(null);
    // };

    const fetchProfile = async (uuid: string) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ uuid }),
            });
        if (!response.ok) {
            const errorData = await response.json();
            return { error: errorData.message };
        }

        const data = await response.json();
        return { message: data.message };
    } catch (error: any) {
        return { error: error.message };
    }
    };

    return {
        user,
        signup,
        signin,
        signout,
    };
};

export default _