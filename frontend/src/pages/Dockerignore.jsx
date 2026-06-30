import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Dockerignore = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl space-y-12 pb-12"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600 mb-4">
          The .dockerignore File
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Why ignoring files makes your Docker builds faster, smaller, and more secure.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">What is it?</h2>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <p className="text-slate-600 dark:text-slate-400">
            Before Docker builds your image, it copies everything from your local directory into a temporary staging area called the "build context". If your folder has gigabytes of unnecessary files (like <code>node_modules</code>), Docker has to copy all of them, which makes your build extremely slow.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            A <code>.dockerignore</code> file works exactly like a <code>.gitignore</code> file. It tells Docker: <em>"Hey, do not copy these files or folders into the container during the build."</em>
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Why is it critical?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">⚡ Faster Builds</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Prevents Docker from copying massive folders (like <code>node_modules</code> or <code>.git</code>) to the Docker daemon on every single build.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">📦 Smaller Images</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Keeps your final image clean and lightweight by excluding local build artifacts, logs, and temp files.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-rose-600 dark:text-rose-400 mb-2">🔒 Better Security</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Prevents accidental inclusion of sensitive files like <code>.env</code> containing production secrets into your public image.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Example <code>.dockerignore</code> for Node.js</h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
            .dockerignore
          </div>
          <SyntaxHighlighter language="ignore" style={vscDarkPlus} className="m-0 text-sm" customStyle={{ margin: 0, borderRadius: 0 }}>
{`# Ignore the local node_modules folder. 
# We want to run 'npm install' inside the container, not copy local ones!
node_modules
npm-debug.log

# Ignore build output folders
dist
build
out

# Keep secrets out of the image!
.env
.env.local
.env.production

# Ignore git history (can be massive)
.git
.gitignore

# Ignore docker files
Dockerfile
docker-compose.yml`}
          </SyntaxHighlighter>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 italic text-center mt-4">
          Always create a .dockerignore file in the same directory as your Dockerfile!
        </p>
      </section>

    </motion.div>
  );
};

export default Dockerignore;
