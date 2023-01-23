import Navbar from '@/components/navbar/navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
      <Navbar />
        {children}
        </body>
    </html>
  );
}
