import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TerminalSquare, Bug, Activity, ShieldAlert } from 'lucide-react';

const LogsAndDebugging = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl space-y-12 pb-16 mx-auto"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center md:text-left">
        <h1 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4">
          Docker Logs & Debugging
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          When things break, you need to see what happened. Logs are the window into the soul of your container.
        </p>
      </div>

      <div className="w-full flex justify-center py-4">
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 max-w-3xl w-full">
          <img 
            src="/docker-logs.png" 
            alt="Docker Logs and Debugging Architecture" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Why are logs important? */}
      <section className="space-y-6">
        <div className="bg-orange-50 dark:bg-orange-900/10 p-8 rounded-2xl border border-orange-200 dark:border-orange-800/50 shadow-sm">
          <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 flex items-center gap-3 mb-4">
            <Bug className="text-orange-500" /> What are Logs & Why Are They Important?
          </h2>
          <p className="text-lg text-orange-800 dark:text-orange-200 leading-relaxed mb-6">
            In Docker, a container is completely isolated from your host machine. If an app crashes inside a container, you won't see the error pop up on your computer screen. 
            <strong> Docker Logs</strong> capture the standard output (`STDOUT`) and standard error (`STDERR`) from the application running inside the container, allowing you to see exactly what the app is doing or why it failed.
          </p>

          <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-4 border-b border-orange-200 dark:border-orange-800/50 pb-2">
            Top Use Cases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/60 dark:bg-slate-900/40 p-4 rounded-xl border border-orange-100 dark:border-orange-800/30">
              <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-800 dark:text-slate-200"><ShieldAlert size={18} className="text-red-500"/> Finding Crash Reasons</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">When a container stops unexpectedly, checking the logs immediately reveals the stack trace or fatal error that caused the crash.</p>
            </div>
            <div className="bg-white/60 dark:bg-slate-900/40 p-4 rounded-xl border border-orange-100 dark:border-orange-800/30">
              <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-800 dark:text-slate-200"><Activity size={18} className="text-blue-500"/> Monitoring App Health</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Tracking real-time HTTP requests, database connections, and memory warnings to ensure your app is running smoothly in production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Log Commands */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
          <TerminalSquare className="text-blue-500" /> Essential Log Commands
        </h2>
        
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800/50">
          
          <div className="p-6 md:p-8">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-2">1. View Basic Logs</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Dumps all logs from the beginning of the container's lifecycle until now. (Warning: can be massive for long-running containers).</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-xl !text-sm shadow-inner !bg-[#1E1E1E]">
              docker logs [container-id]
            </SyntaxHighlighter>
          </div>

          <div className="p-6 md:p-8">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-2">2. Follow Live Logs (-f)</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Streams logs to your terminal in real-time. This is exactly like running `tail -f` on a standard log file.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-xl !text-sm shadow-inner !bg-[#1E1E1E]">
              docker logs -f [container-id]
            </SyntaxHighlighter>
          </div>

          <div className="p-6 md:p-8">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-2">3. Tail Specific Lines</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Only want to see the last 100 lines? Use `--tail` to skip the massive history and jump straight to recent events.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-xl !text-sm shadow-inner !bg-[#1E1E1E]">
              docker logs --tail 100 [container-id]
            </SyntaxHighlighter>
          </div>
          
          <div className="p-6 md:p-8 bg-orange-50/50 dark:bg-orange-900/10">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-2">4. Ultimate Debugging (Enter the Container)</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">If logs aren't enough, you can actually "SSH" directly into the running container to poke around its file system and run commands manually.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-xl !text-sm shadow-inner !bg-[#1E1E1E]">
              docker exec -it [container-id] /bin/sh
            </SyntaxHighlighter>
          </div>

        </div>
      </section>

    </motion.div>
  );
};

export default LogsAndDebugging;
