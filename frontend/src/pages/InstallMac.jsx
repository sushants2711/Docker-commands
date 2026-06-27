import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const InstallMac = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl space-y-12 pb-12"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Install on macOS
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          The easiest way to get Docker running on your Mac is using Docker Desktop.
        </p>
      </div>

      <section className="space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none text-9xl">🍎</div>
          
          <div className="space-y-4 pl-4 border-l-2 border-slate-200 dark:border-slate-700">
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200">Option 1: Download Docker Desktop (GUI)</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-2">
                Go to the official Docker website (<a href="https://docs.docker.com/desktop/install/mac-install/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Docker for Mac</a>) and download the <code>.dmg</code> file for your chip (Apple Silicon or Intel). Double-click the <code>.dmg</code> file, and drag the Docker icon to your Applications folder.
              </p>
            </div>
            
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-800 dark:text-slate-200">Option 2: Install via Homebrew (Terminal)</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-2">
                If you prefer using the command line and have Homebrew installed, you can quickly install Docker Desktop by running:
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
                brew install --cask docker
              </SyntaxHighlighter>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-800 dark:text-slate-200">Start Docker</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Open Docker from your Applications folder (or via Spotlight search). It will ask for permission to install its networking components. Wait until the Docker icon in the top menu bar says "Docker Desktop is running".
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-800 dark:text-slate-200">Verify Installation</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-2">
                Open your terminal and run the following command to check the version:
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
                docker --version
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default InstallMac;
