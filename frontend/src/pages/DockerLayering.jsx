import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Download } from 'lucide-react';

const DockerLayering = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl space-y-12 pb-12 mx-auto"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Docker Layering Architecture
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Understand how Docker builds images efficiently using stacked layers.
        </p>
      </div>

      <section className="space-y-6">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3 mb-4">
            <Layers className="text-indigo-500" /> What are Docker Layers?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            A Docker image is built up from a series of <strong>layers</strong>. Each instruction in a Dockerfile (like <code>FROM</code>, <code>COPY</code>, <code>RUN</code>) creates a new layer on top of the previous ones.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
            <li><strong>Read-only:</strong> Once a layer is created, it cannot be changed.</li>
            <li><strong>Cached:</strong> Docker caches each layer. If an instruction hasn't changed, Docker simply reuses the cached layer instead of rebuilding it.</li>
            <li><strong>Shared:</strong> Multiple images can share the same underlying layers (like the base OS layer), saving massive amounts of disk space.</li>
          </ul>

          <div className="mt-8 flex justify-center">
            <img 
              src="/docker-onion.png" 
              alt="Docker Layers visualized as an onion" 
              className="max-w-full h-auto rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 max-h-[500px] object-contain" 
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <Zap className="text-yellow-500" /> Why Layering is Powerful
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Blazing Fast Builds</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Because of layer caching, if you only change your application code at the bottom of the Dockerfile, Docker instantly reuses all the OS and Dependency layers above it without downloading or installing them again.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-start">
            <Download className="text-blue-500 mb-2" size={24}/>
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Efficient Pulls</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              When downloading a new version of an image, Docker only downloads the specific layers that have changed since the last version you pulled.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <Layers className="text-emerald-500" /> Best Practice: Order Matters!
        </h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Always put things that change <strong>least frequently</strong> at the top of your Dockerfile, and things that change <strong>most frequently</strong> (like your source code) at the bottom.
          </p>
          
          <div className="flex flex-col gap-2 font-mono text-sm">
            <div className="p-3 bg-slate-900 shadow-inner rounded-lg" style={{ color: '#4ade80' }}>1. FROM node:22 (Rarely changes)</div>
            <div className="p-3 bg-slate-900 shadow-inner rounded-lg" style={{ color: '#86efac' }}>2. COPY package.json (Changes occasionally)</div>
            <div className="p-3 bg-slate-900 shadow-inner rounded-lg" style={{ color: '#fde047' }}>3. RUN npm install (Runs only if package.json changed)</div>
            <div className="p-3 bg-slate-900 shadow-inner rounded-lg" style={{ color: '#fb923c' }}>4. COPY . . (Source code - Changes constantly)</div>
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
            * If you swap steps 3 and 4, changing your source code would force npm install to run every single time, destroying your cache!
          </p>
        </div>
      </section>

    </motion.div>
  );
};

export default DockerLayering;
