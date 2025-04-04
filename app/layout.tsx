// app/layout.tsx
export const metadata = {
    title: 'SaaS-Creation',
    description: 'Générateur de SaaS modernes et rentables',
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="fr">
        <body>{children}</body>
      </html>
    );
  }
  