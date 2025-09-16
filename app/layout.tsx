import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Theme from '../components/Theme/theme';
import ThemeToggle from '../components/ThemeToggle';

export const metadata = {
  title: 'Next 15 + Kontent Boilerplate',
  description: 'Starter with Kentico Kontent headless CMS'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className="bg-background text-on-background transition-colors duration-200">
        <Theme>
          <header className="border-b border-outline bg-surface">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <Link 
                    href="/" 
                    className="text-lg font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    Movies
                  </Link>
                  <div className="flex items-center gap-4">
                    <Link 
                      href="/" 
                      className="text-on-surface hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                    <Link 
                      href="/api/preview" 
                      className="text-on-surface hover:text-primary transition-colors"
                    >
                      Preview
                    </Link>
                  </div>
                </div>
                <ThemeToggle />
              </nav>
            </div>
          </header>
          <main className="min-h-screen">
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
