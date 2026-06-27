import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const InstallWindows = () => {
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
          Install Docker on Windows
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Step-by-step instructions to get Docker Desktop running on Windows 10/11 using WSL 2.
        </p>
      </div>

      <section className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50 space-y-4">
          <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 flex items-center gap-2">
            ⚠️ Important Requirement: WSL 2
          </h3>
          <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-sm">
            Docker Desktop on Windows relies on the Windows Subsystem for Linux (WSL 2). This provides much better performance than the old Hyper-V backend. You should ensure WSL is installed before setting up Docker.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-8">

          <div className="space-y-4 pl-4 border-l-2 border-slate-200 dark:border-slate-700 relative">
            <div className="absolute w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded-full -left-[9px] top-1 border-2 border-white dark:border-slate-900"></div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">Step 1: Install WSL (If not already installed)</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 mb-3">
                Open PowerShell or Windows Command Prompt in administrator mode by right-clicking and selecting "Run as administrator", then run:
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
                wsl --install
              </SyntaxHighlighter>
              <p className="text-slate-500 dark:text-slate-500 text-sm mt-2 italic">
                Restart your machine after the installation is complete.
              </p>
            </div>
          </div>

          <div className="space-y-4 pl-4 border-l-2 border-slate-200 dark:border-slate-700 relative">
            <div className="absolute w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded-full -left-[9px] top-1 border-2 border-white dark:border-slate-900"></div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">Step 2: Download Docker Desktop</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                Go to the official Docker website (<a href="https://docs.docker.com/desktop/install/windows-install/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Docker for Windows</a>) and download the Docker Desktop Installer.
              </p>
            </div>
          </div>

          <div className="space-y-4 pl-4 border-l-2 border-slate-200 dark:border-slate-700 relative">
            <div className="absolute w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded-full -left-[9px] top-1 border-2 border-white dark:border-slate-900"></div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">Step 3: Run the Installer</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                Double-click the installer executable. When prompted, ensure the option to <strong>"Use WSL 2 instead of Hyper-V"</strong> is checked. Follow the wizard to complete the installation.
              </p>
            </div>
          </div>

          <div className="space-y-4 pl-4 border-l-2 border-slate-200 dark:border-slate-700 relative">
            <div className="absolute w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded-full -left-[9px] top-1 border-2 border-white dark:border-slate-900"></div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">Step 4: Start Docker Desktop</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                Search for "Docker Desktop" in your Windows search bar and open it. Accept the terms. The Docker icon in the taskbar will show an animation while starting and will stabilize when it's ready.
              </p>
            </div>
          </div>

          <div className="space-y-4 pl-4 border-l-2 border-slate-200 dark:border-slate-700 relative border-l-transparent">
            <div className="absolute w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded-full -left-[9px] top-1 border-2 border-white dark:border-slate-900"></div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">Step 5: Verify Installation</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 mb-3">
                Open a new Command Prompt or PowerShell window and verify Docker is running by checking its version:
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
                docker --version
              </SyntaxHighlighter>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 mb-3">
                Run the hello-world container to test the engine:
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
                docker run hello-world
              </SyntaxHighlighter>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
};

export default InstallWindows;
