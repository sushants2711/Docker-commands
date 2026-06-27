import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const InstallLinux = () => {
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
          Install on Linux
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          The most straightforward way to install Docker Engine on Linux is using the official convenience script.
        </p>
      </div>

      <section className="space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none text-9xl">🐧</div>
          
          <div className="space-y-6 pl-4 border-l-2 border-slate-200 dark:border-slate-700">
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Step 1: Download & Run the Script</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-2">
                Open your terminal and execute the following commands to download and run Docker's installation script:
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
{`curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh`}
              </SyntaxHighlighter>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Step 2: Run Docker without sudo (Optional but Recommended)</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-2">
                By default, you have to type <code>sudo</code> before every Docker command. Run this to add your user to the <code>docker</code> group:
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
                sudo usermod -aG docker $USER
              </SyntaxHighlighter>
              <p className="text-orange-500 text-xs italic mt-2">
                You must log out and log back in (or restart your computer) for this to take effect.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Step 3: Verify Installation</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-2">
                Run the following command to check the installed Docker version:
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

export default InstallLinux;
