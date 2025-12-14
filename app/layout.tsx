import '@/app/ui/global.css'; //Importar CSS
import { inter } from '@/app/ui/fonts'; //Importar custom Font

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
