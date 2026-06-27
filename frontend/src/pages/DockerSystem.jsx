import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Activity, Database, Power } from 'lucide-react';

const DockerSystem = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl space-y-12 pb-12 mx-auto"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4">
          Docker System Management
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Commands to check the health of your Docker daemon, manage disk space, and control the Docker service on Linux.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <Activity className="text-blue-500" /> Information & Diagnostics
        </h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Docker Info</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Displays system-wide information regarding the Docker installation.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker info
            </SyntaxHighlighter>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Docker Version</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Shows the Docker client and server version information.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker version
            </SyntaxHighlighter>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">System Events</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Get real-time events (start, stop, attach, die) from the server.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker system events
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <Database className="text-orange-500" /> Disk Usage & Cleanup
        </h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Check Disk Usage</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Shows how much space Docker images, containers, and volumes are using.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker system df
            </SyntaxHighlighter>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Standard Prune</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Remove all stopped containers, unused networks, and dangling images.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker system prune
            </SyntaxHighlighter>
          </div>
          <div className="p-6 bg-red-50/50 dark:bg-red-900/10">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Aggressive Prune (-a)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Also removes any unused images not just dangling ones (will delete everything not currently running!).</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-xl !text-sm shadow-inner !bg-[#1E1E1E]">
              docker system prune -a
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <Power className="text-purple-500" /> Linux Service Control (systemctl)
        </h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Start Docker</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Starts the Docker daemon manually.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              sudo systemctl start docker
            </SyntaxHighlighter>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Enable on Boot</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Ensures Docker automatically starts every time the Linux server boots up.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              sudo systemctl enable docker
            </SyntaxHighlighter>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Check Status</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Verify if Docker is actively running and healthy.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              sudo systemctl status docker
            </SyntaxHighlighter>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Stop Docker</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Safely closes and stops the Docker daemon.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              sudo systemctl stop docker
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default DockerSystem;
