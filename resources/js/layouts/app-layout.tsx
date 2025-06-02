import { type ReactNode } from 'react';
import Navbar from '@/components/portfolio/navbar';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div style={{ height: '100vh' }} className="min-h-screen bg-gray-100 text-black flex overflow-hidden">
            <Navbar />
            <main className="container overflow-scroll">
                {children}
            </main>
        </div>
    );
}