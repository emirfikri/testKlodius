// src/app/context/AuthContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser, signupUser } from '../../data/auth/authService';
import { User } from '../../domain/models/User';

interface AuthContextProps {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(
    {} as AuthContextProps
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        AsyncStorage.getItem('user').then(data => {
            if (data) setUser(JSON.parse(data));
        });
    }, []);

    const login = async (email: string, password: string) => {
        const user = await loginUser(email, password);
        setUser(user);
        await AsyncStorage.setItem('user', JSON.stringify(user));
    };

    const signup = async (name: string, email: string, password: string) => {
        const user = await signupUser(name, email, password);
        setUser(user);
        await AsyncStorage.setItem('user', JSON.stringify(user));
    };

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
