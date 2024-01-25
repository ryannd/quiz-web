import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'quizgame',
    description: 'real time multiplayer quiz game',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="w-full h-full lg:h-screen lg:max-h-screen lg:overflow-hidden">
                <div className="navbar bg-base-300">
                    <a href="/"><button className="btn btn-ghost text-xl">quizgame</button></a>
                </div>
                {children}
            </body>
        </html>
    );
}
