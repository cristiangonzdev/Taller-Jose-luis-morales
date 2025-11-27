import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Taller Jose Luis Morales - Taller Mecánico de Confianza',
  description: 'Taller mecánico con más de 20 años de experiencia. Servicio profesional, cercano y honesto. Excelentes valoraciones en Google. Especialistas en mantenimiento y reparación de vehículos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
