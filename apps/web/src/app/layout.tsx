import React from 'react';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export const metadata = {
  title: 'Mandaí - Delivery App',
  description: 'Sua solução de delivery favorita',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}