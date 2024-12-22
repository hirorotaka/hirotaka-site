import { M_PLUS_1p } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const m_PLUS_1p = M_PLUS_1p({
  subsets: ['latin'],
  //midium bold
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'hirotaka portfolio',
  description: 'hirotakaのポートフォリオサイト',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body className={m_PLUS_1p.className}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
