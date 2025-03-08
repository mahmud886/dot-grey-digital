import { helveticaNeue } from './fonts';
import './globals.css';

export const metadata = {
  title: 'DOTGREY DIGITAL',
  description: 'DOTGREY DIGITAL AGENCY',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${helveticaNeue.variable} antialiased`}>{children}</body>
    </html>
  );
}
