import './globals.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative max-w-7xl mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
