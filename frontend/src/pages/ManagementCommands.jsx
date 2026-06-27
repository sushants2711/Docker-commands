import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ManagementCommands = () => {
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
          Container Management Commands
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Important commands to manage, inspect, and monitor your containers.
        </p>
      </div>

      <section className="space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
          
          {/* Logs with timestamps */}
          <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1 space-y-2">
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Timestamps</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Adds a timestamp to every log entry.</p>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full">
                docker logs -t [containername]
              </SyntaxHighlighter>
            </div>
          </div>

          {/* Exec */}
          <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1 space-y-2">
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Enter inside a container</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Opens an interactive shell inside a running container.</p>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full">
                docker exec -it [container-name] bash / sh
              </SyntaxHighlighter>
            </div>
          </div>

          {/* Inspect */}
          <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1 space-y-2">
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Inspect a container</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Returns low-level information on Docker objects.</p>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full">
                docker inspect [containername]
              </SyntaxHighlighter>
            </div>
          </div>

          {/* Stats */}
          <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1 space-y-2">
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">See resources usage</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">To see the resources of docker usage (CPU, Memory, etc.).</p>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full">
                docker stats
              </SyntaxHighlighter>
            </div>
          </div>

        </div>
      </section>

    </motion.div>
  );
};

export default ManagementCommands;
