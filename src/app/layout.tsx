import React from 'react';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';

export const metadata = {
  title: 'Mandaí - Delivery App',
  description: 'Solução de delivery para facilitar sua vida',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <AuthProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}