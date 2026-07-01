import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  BookOpen, Server, Box, Layers, Play,
  TerminalSquare, HardDrive, Network,
  Settings, FileCode2, Container, Wrench,
  Apple, Monitor, Code, X, Cloud, Key, Plug, Shield, FileWarning,
  ClipboardList, ChevronDown
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for cleaner tailwind class merging
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const topics = {
  docker: {
    name: 'Docker',
    icon: Container,
    description: 'Your ultimate guide to Docker',
    color: 'text-blue-600 dark:text-blue-400',
    navItems: [
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
          { name: 'Port Binding', path: '/docker/port-binding', icon: Plug },
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
          { name: '.dockerignore', path: '/docker/dockerignore', icon: FileWarning },
          { name: 'Multi-stage Builds', path: '/docker/multi-stage', icon: Layers },
          { name: 'Environment Variables', path: '/docker/env-variables', icon: Shield },
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
      {
        group: 'Quick Reference', items: [
          { name: 'Command Cheatsheet', path: '/docker/cheatsheet', icon: ClipboardList },
        ]
      },
    ]
  },
  aws: {
    name: 'AWS',
    icon: Cloud,
    description: 'Amazon Web Services tutorials',
    color: 'text-orange-500 dark:text-orange-400',
    navItems: [
      {
        group: 'Getting Started', items: [
          { name: 'EC2 Basics', path: '/aws', icon: Server }
        ]
      }
    ]
  },
  kubernetes: {
    name: 'Kubernetes',
    icon: Box,
    description: 'Container orchestration',
    color: 'text-blue-500 dark:text-blue-400',
    navItems: [
      {
        group: 'Getting Started', items: [
          { name: 'Pods & Nodes', path: '/kubernetes', icon: Box }
        ]
      }
    ]
  },
  nginx: {
    name: 'Nginx',
    icon: Network,
    description: 'Web Server & Proxy',
    color: 'text-emerald-600 dark:text-emerald-500',
    navItems: [
      {
        group: 'Getting Started', items: [
          { name: 'Reverse Proxy', path: '/nginx', icon: Network }
        ]
      }
    ]
  },
  github_actions: {
    name: 'GitHub Actions',
    icon: Play,
    description: 'CI/CD Pipelines',
    color: 'text-slate-700 dark:text-slate-300',
    navItems: [
      {
        group: 'Getting Started', items: [
          { name: 'Workflows', path: '/github-actions', icon: Play }
        ]
      }
    ]
  },
  sushant: {
    name: 'Sushant',
    icon: BookOpen,
    description: 'My Portfolio & Intro',
    color: 'text-purple-600 dark:text-purple-400',
    navItems: [
      {
        group: 'About', items: [
          { name: 'Portfolio', path: '/sushant', icon: BookOpen }
        ]
      }
    ]
  }
};

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine active topic based on URL
  let activeTopicKey = 'docker';
  if (location.pathname.startsWith('/aws')) activeTopicKey = 'aws';
  else if (location.pathname.startsWith('/nginx')) activeTopicKey = 'nginx';
  else if (location.pathname.startsWith('/kubernetes')) activeTopicKey = 'kubernetes';
  else if (location.pathname.startsWith('/github-actions')) activeTopicKey = 'github_actions';
  else if (location.pathname.startsWith('/sushant') || location.pathname === '/') activeTopicKey = 'sushant';

  const activeTopic = topics[activeTopicKey];
  const ActiveIcon = activeTopic.icon;

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
          "w-72 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-[100dvh] md:h-screen fixed top-0 left-0 md:relative z-50 transition-transform duration-300 ease-in-out shrink-0",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-5 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-10 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-3">
              <ActiveIcon size={28} strokeWidth={2.5} className={activeTopic.color} />
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {activeTopic.name}<span className={activeTopic.color}>Pro</span>
              </h1>
            </div>
            
            {/* Mobile Close Button */}
            <button 
              className="md:hidden p-1 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="relative">
            <select 
              value={activeTopicKey}
              onChange={(e) => {
                const newTopic = e.target.value;
                navigate(topics[newTopic].navItems[0].items[0].path);
                if (setIsOpen) setIsOpen(false);
              }}
              className="w-full appearance-none bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm rounded-lg px-4 py-2.5 pr-10 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-colors"
            >
              {Object.entries(topics).map(([key, topic]) => (
                <option key={key} value={key}>{topic.name}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          </div>
        </div>

        <nav className="p-4 space-y-8 overflow-y-auto flex-1 pb-24 md:pb-4">
          {activeTopic.navItems.map((section, idx) => (
            <div key={idx}>
              <h3 className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                {section.group}
              </h3>
              <div className="space-y-1">
                {section.items.map((item, itemIdx) => (
                  <NavLink
                    key={itemIdx}
                    to={item.path}
                    end
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
