import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme === 'dark' || (!savedTheme && prefersDark);
    }
    return false;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Smooth scroll to top on page change
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  return (
    <div className="flex h-[100dvh] md:h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-200 dark:selection:bg-blue-900 relative overflow-hidden">
      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      
      <main ref={mainRef} className="flex-1 overflow-y-auto relative flex flex-col w-full">
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-40 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 justify-between">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 -ml-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Menu size={24} />
          </button>
          <div className="font-bold tracking-tight text-slate-900 dark:text-white">
            Docker<span className="text-blue-600 dark:text-blue-400">Pro</span>
          </div>
          <div className="w-8" /> {/* Spacer to center the title perfectly */}
        </div>

        {/* Theme Toggle (Fixed globally) */}
        <div className="fixed top-3 right-3 md:top-5 md:right-8 z-50">
          <button 
            onClick={toggleTheme} 
            className="p-2 md:p-3 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm md:shadow-lg border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
            title="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} className="md:w-[22px] md:h-[22px]" /> : <Moon size={20} className="md:w-[22px] md:h-[22px]" />}
          </button>
        </div>
        <div className="p-4 sm:p-8 md:p-12 max-w-full md:max-w-5xl 2xl:max-w-7xl mx-auto pt-24 md:pt-12 w-full flex-1 transition-all">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
