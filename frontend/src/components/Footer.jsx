import { Mail, Heart } from 'lucide-react';

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-slate-800 dark:text-slate-200 font-bold text-lg tracking-tight">
            Sushant Singh
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1.5 mt-1">
            Built with <Heart size={14} className="text-pink-500 fill-pink-500" /> for developers
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="mailto:sushants1411@gmail.com" 
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors group"
          >
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
              <Mail size={16} />
            </div>
            <span className="text-sm font-medium">sushants1411@gmail.com</span>
          </a>
          
          <a 
            href="https://www.instagram.com/sushant_singh_200" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-pink-600 dark:text-slate-400 dark:hover:text-pink-400 transition-colors group"
          >
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30 transition-colors">
              <InstagramIcon size={16} />
            </div>
            <span className="text-sm font-medium">Instagram</span>
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
