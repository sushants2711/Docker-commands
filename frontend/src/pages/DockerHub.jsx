import { motion } from 'framer-motion';
import { Cloud, Search, ArrowDownToLine, Upload } from 'lucide-react';

const DockerHub = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4 flex items-center gap-4">
          <Cloud className="text-blue-500 w-10 h-10" /> Docker Hub
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          The world's largest library and community for container images.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">What is Docker Hub?</h2>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <p className="text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            Docker Hub is a cloud-based registry service that allows you to link to code repositories, build your images and test them, store manually pushed images, and links to Docker Cloud so you can deploy images to your hosts.
          </p>
          <p className="text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            Think of it like GitHub, but instead of storing source code, it stores Docker container images!
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <Search className="text-blue-500 w-8 h-8" />
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200">Image Repositories</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Find, manage, and push container images. It hosts both public and private repositories.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <Upload className="text-emerald-500 w-8 h-8" />
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200">Automated Builds</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Automatically build container images from GitHub and Bitbucket and push them to Docker Hub.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <ArrowDownToLine className="text-purple-500 w-8 h-8" />
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200">Official Images</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Pull high-quality images provided by Docker (like Node, Python, Ubuntu, Nginx) that are safe to use.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default DockerHub;
