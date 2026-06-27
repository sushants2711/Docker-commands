import { NavLink } from 'react-router-dom';
import {
  BookOpen, Server, Box, Layers, Play,
  TerminalSquare, HardDrive, Network,
  Settings, FileCode2, Container, Wrench,
  Apple, Monitor, Code, X, Cloud, Key
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for cleaner tailwind class merging
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navItems = [
  {
    group: 'Getting Started', items: [
      { name: 'Docker Intro', path: '/docker', icon: BookOpen },
      { name: 'VM vs Container', path: '/docker/vm-vs-container', icon: Server },
      { name: 'Architecture', path: '/docker/architecture', icon: Box },
    ]
  },
  {
    group: 'Installation', items: [
      { name: 'Mac', path: '/docker/install-mac', icon: Apple },
      { name: 'Linux', path: '/docker/install-linux', icon: TerminalSquare },
      { name: 'Windows', path: '/docker/install-windows', icon: Monitor },
    ]
  },
  {
    group: 'Core Concepts', items: [
      { name: 'Images', path: '/docker/images', icon: Layers },
      { name: 'Layering', path: '/docker/layering', icon: Layers },
      { name: 'Containers', path: '/docker/containers', icon: Play },
      { name: 'Volumes', path: '/docker/volumes', icon: HardDrive },
      { name: 'Networks', path: '/docker/networks', icon: Network },
    ]
  },
  {
    group: 'Operations', items: [
      { name: 'Logs & Debugging', path: '/docker/logs-debugging', icon: TerminalSquare },
      { name: 'Container Management', path: '/docker/management', icon: Settings },
      { name: 'System Management', path: '/docker/system-management', icon: Server },
    ]
  },
  {
    group: 'Registry & Auth', items: [
      { name: 'Docker Hub', path: '/docker/hub', icon: Cloud },
      { name: 'Docker Login', path: '/docker/login', icon: Key },
    ]
  },
  {
    group: 'Building & Orchestration', items: [
      { name: 'Dockerfile', path: '/docker/dockerfile', icon: FileCode2 },
      { name: 'Docker Compose', path: '/docker/docker-compose', icon: Container },
      { name: 'Compose Commands', path: '/docker/compose-commands', icon: Wrench },
    ]
  },
  {
    group: 'Guides & Examples', items: [
      { name: 'Node.js App', path: '/docker/nodejs', icon: Code },
      { name: 'React.js App', path: '/docker/reactjs', icon: Code },
    ]
  },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={cn(
          "w-72 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen fixed md:relative z-50 transition-transform duration-300 ease-in-out shrink-0",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-6 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-10 border-b border-slate-200 dark:border-slate-800 flex justify-between items-start shrink-0">
          <div>
            <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
              <Container size={32} strokeWidth={2.5} />
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Docker<span className="text-blue-600 dark:text-blue-400">Pro</span></h1>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">Your ultimate guide to Docker</p>
          </div>
          
          {/* Mobile Close Button */}
          <button 
            className="md:hidden p-1 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

      <nav className="p-4 space-y-8 overflow-y-auto flex-1">
        {navItems.map((section, idx) => (
          <div key={idx}>
            <h3 className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              {section.group}
            </h3>
            <div className="space-y-1">
              {section.items.map((item, itemIdx) => (
                <NavLink
                  key={itemIdx}
                  to={item.path}
                  onClick={() => setIsOpen && setIsOpen(false)}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group",
                    isActive
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                  )}
                >
                  <item.icon
                    size={18}
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                    strokeWidth={2}
                  />
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
      </aside>
    </>
  );
};

export default Sidebar;
