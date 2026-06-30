import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl space-y-8 pb-12"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
          What is Docker?
        </h1>
        <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            It is an open source platform for developing, shipping and running applications.
          </p>
          <p>
            It is just like a container that uses host virtual machine and totally isolated from your systems.
          </p>
          <p>
            It is useful for build, package, run and deploy applications inside container.
          </p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
            <span className="text-2xl">🎥</span> Video Tutorials Coming Soon!
          </h3>
          <p className="text-indigo-100 text-sm">I'll be launching a YouTube channel soon to walk through all of these Docker concepts in detail. Stay tuned!</p>
        </div>
        <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm text-sm font-semibold whitespace-nowrap">
          Subscribe Soon
        </div>
      </motion.div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* We use an original generated image to avoid copyright issues */}
        <img 
          src="/docker-concept.png" 
          alt="Illustration of shipping containers symbolizing Docker" 
          className="w-full h-auto object-cover max-h-96"
        />
        <div className="p-8 space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Docker is just like a shipping container that uses the host's operating system, but is totally <strong>isolated</strong> from your system. 
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Build</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Write code once and package it into a container along with all its dependencies.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2">Ship</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Easily move your containerized application to any environment seamlessly.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">Run</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Deploy and execute your applications reliably inside isolated containers anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Docker Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8 space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4">
          Why do we need Docker?
        </h2>
        <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Before Docker, developers often faced the classic <strong>"It works on my machine!"</strong> problem. An application would run perfectly on a developer's laptop, but crash in production because of missing dependencies, different OS versions, or conflicting libraries.
          </p>
          <p>
            Docker solves this by packaging the application <strong>and</strong> all of its dependencies (libraries, configurations, and runtime) into a single, standardized unit called a Container.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-600 dark:text-slate-400">
            <li><strong>Consistency:</strong> The exact same container runs on your laptop, the testing server, and the production cloud.</li>
            <li><strong>Isolation:</strong> Multiple apps can run on the same machine without their dependencies interfering with each other.</li>
            <li><strong>Run Multiple Containers Effortlessly:</strong> You can spin up multiple containers (like a database, a backend API, and a frontend server) on the same machine instantly. They all run simultaneously in complete isolation, and you can easily access each one via mapped ports without any software conflicts.</li>
            <li><strong>Portability:</strong> You can move containers between AWS, Azure, Google Cloud, or a local server effortlessly.</li>
            <li><strong>Efficiency:</strong> Unlike Virtual Machines, containers share the host's OS kernel, meaning they boot instantly and use far fewer resources.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Introduction;
