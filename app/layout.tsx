import { M_PLUS_1p } from 'next/font/google';
import './globals.css';
import SideMenu from './components/SideMenu';
import TopMenu from './components/TopMenu';
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
        <main className="flex flex-row">
          <SideMenu />
          <section className="pl-[300px] max-lg:pl-[146px] max-md:pl-0 w-full min-h-screen overflow-hidden">
            <TopMenu />
            {children}
            <Toaster position="top-center" />
          </section>
        </main>
      </body>
    </html>
  );
}
