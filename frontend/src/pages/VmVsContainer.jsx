import { motion } from 'framer-motion';

const VmVsContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl space-y-12 pb-12"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          VM vs Container
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Understanding the core definitions of a Container and how it differs from a Virtual Machine.
        </p>
      </div>

      {/* What is a container? section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">What is a container?</h2>
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50">
          <p className="text-lg text-blue-900 dark:text-blue-100 font-medium leading-relaxed italic">
            "A container is a lightweight, isolated and portable runtime environment that packages an application together with all of its required dependencies, libraries and configuration files to run across all different operating systems."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">📦 Container</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Application code, Runtime (Node.js), Libraries, Dependencies, Env variables.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">🪶 Lightweight</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Shares the host OS kernel.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">🛡️ ISOLATED</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Runs separately from any application or device.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">🚀 Portable</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Runs across any environments.</p>
          </div>
        </div>
      </section>

      {/* Diagram Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Virtual Machine vs Docker Container</h2>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex justify-center">
          <img src="/vm-vs-container.png" alt="VM vs Container Stack" className="max-w-full h-auto rounded-lg" />
        </div>

        {/* Explanation of the difference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2">
              🖥️ Virtual Machine (VM)
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
              Think of a Virtual Machine like a completely separate computer living inside your laptop. It has its own full operating system and takes up a big chunk of your memory and storage, even if you are just running a tiny app.
            </p>
            <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-2 text-sm">
              <li><strong>Heavyweight:</strong> Requires a full Guest Operating System to be installed for every VM.</li>
              <li><strong>Slow Boot:</strong> Takes minutes to start because the full OS must boot up.</li>
              <li><strong>Resource Heavy:</strong> Allocates fixed CPU and RAM, even if the application isn't using it.</li>
              <li><strong>Isolation:</strong> Hardware-level isolation via Hypervisor.</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50 space-y-3">
            <h3 className="font-bold text-xl text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
              🐳 Docker Container
            </h3>
            <p className="text-blue-800 dark:text-blue-300 text-sm mb-3">
              Think of a Container like a smart box that holds your app and only the exact files it needs to run. Instead of installing a whole new operating system, it just shares the one your computer is already using. This makes it incredibly fast and lightweight!
            </p>
            <ul className="list-disc pl-5 text-blue-800 dark:text-blue-300 space-y-2 text-sm">
              <li><strong>Lightweight:</strong> No Guest OS! It shares the Host OS kernel directly.</li>
              <li><strong>Fast Boot:</strong> Starts in milliseconds because it's just a process, not a full OS.</li>
              <li><strong>Resource Efficient:</strong> Uses resources dynamically. Multiple containers can run on the same hardware.</li>
              <li><strong>Isolation:</strong> Process-level isolation (Namespaces and Cgroups).</li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default VmVsContainer;
