import { motion } from 'framer-motion';
import { Key, Terminal, ShieldAlert } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DockerLogin = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-4">
          <Key className="text-amber-500 w-10 h-10" /> Docker Login
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Authenticate with Docker Hub or other private container registries.
        </p>
      </div>

      <section className="space-y-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <p className="text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            Before you can push an image to Docker Hub, or pull a private image that you don't have public access to, you must authenticate your Docker CLI with the registry.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <Terminal className="text-slate-500" /> Authentication Commands
        </h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
          
          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Login to Docker Hub</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">This will prompt you for your Docker Hub Username and Password (or Personal Access Token).</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker login
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Login to a Custom Registry</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">If you are using AWS ECR, Google GCR, or a private company registry, you must specify the server address.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker login registry.example.com
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Logout</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Log out from a Docker registry to remove your stored credentials.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker logout
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Check Authentication & System Info</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">You can verify if you are logged in, along with viewing detailed system-wide Docker information, by running the info command. Look for the <strong>Username</strong> field in the output.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker info
            </SyntaxHighlighter>
          </div>

        </div>
      </section>

      <section className="space-y-6">
        <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-xl border border-orange-200 dark:border-orange-800/50 space-y-3">
          <h3 className="font-bold text-lg text-orange-900 dark:text-orange-200 flex items-center gap-2 mb-2">
            <ShieldAlert size={20} /> Security Best Practice
          </h3>
          <p className="text-orange-800 dark:text-orange-300 text-sm">
            Instead of using your actual account password for <code>docker login</code>, it is highly recommended to generate a <strong>Personal Access Token (PAT)</strong> inside your Docker Hub account settings and use that as your password. This allows you to easily revoke access later without changing your main password!
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default DockerLogin;
