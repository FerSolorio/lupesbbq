// app/layout.tsx
import React from 'react';

export const metadata = {
  title: 'Tu Título',
  description: 'Descripción de tu aplicación',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
