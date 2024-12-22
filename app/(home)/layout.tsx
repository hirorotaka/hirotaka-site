import '../globals.css';
import SideMenu from '../components/SideMenu';
import TopMenu from '../components/TopMenu';
import { Toaster } from 'sonner';

interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <main className="flex flex-row">
      <SideMenu />
      <section className="pl-[300px] max-lg:pl-[160px] max-md:pl-0 w-full min-h-screen overflow-hidden">
        <TopMenu />
        {children}
        <Toaster position="top-center" />
      </section>
    </main>
  );
}
