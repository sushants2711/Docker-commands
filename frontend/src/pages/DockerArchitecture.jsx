import { motion } from 'framer-motion';

const DockerArchitecture = () => {
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
          Inside Docker
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Understanding the internal architecture of Docker.
        </p>
      </div>

      <section className="space-y-8">
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          As inside Docker there are 3 more important things that are:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">1) Docker Engine</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Docker Engine is the core software that helps you to pull the image & start the container and do all the things like Manage networking, storage and etc.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">2) Docker CLI</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Command line interface to interact with the Docker Engine.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">3) Docker registry</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              In the Docker registry all the docker images are available and also when you want to create and push it.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex justify-center mt-6">
          <img src="/docker-architecture.png" alt="Docker Architecture" className="max-w-full h-auto rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">🖼️ Docker Image</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Docker image is a lightweight standalone, executable packages that including everything to start a software including the code, a runtime environment and files etc.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">📦 Docker container</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              A docker container is a running instance of an image and it has totally isolated environment.
            </p>
          </div>
        </div>

      </section>
    </motion.div>
  );
};

export default DockerArchitecture;
