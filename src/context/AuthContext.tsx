'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Definição dos tipos
interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<boolean>;
  isLoading: boolean;
}

// Criação do contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider do contexto
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar se o usuário já está logado ao carregar a aplicação
  useEffect(() => {
    // Simular verificação de token de autenticação
    const checkUserSession = () => {
      try {
        // Em uma aplicação real, aqui iríamos verificar um token JWT
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Erro ao verificar sessão do usuário:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserSession();
  }, []);

  // Função de login
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Em uma aplicação real, aqui faríamos uma chamada à API
      // Simulando uma requisição assíncrona
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validação básica (simulada)
      if (email && password) {
        const userData: User = {
          id: '1',
          name: 'Usuário Teste',
          email: email,
          phone: '(11) 99999-9999'
        };
        
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Erro no login:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Função de registro
  const register = async (userData: Omit<User, 'id'> & { password: string }): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Em uma aplicação real, aqui faríamos uma chamada à API
      // Simulando uma requisição assíncrona
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simular criação de usuário
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: userData.name,
        email: userData.email,
        phone: userData.phone
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    } catch (error) {
      console.error('Erro no registro:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Valor do contexto
  const contextValue: AuthContextType = {
    user,
    login,
    logout,
    register,
    isLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}