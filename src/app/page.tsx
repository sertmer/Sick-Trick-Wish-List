import { AppProps } from 'next/app';
import NavBar from '@/components/NavBar'
import '../styles/globals.css'; 

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <NavBar />
    </main>
  );
}
