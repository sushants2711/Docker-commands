import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MultiStageBuilds = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl space-y-12 pb-12"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
          Multi-stage Builds
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          The secret to creating incredibly small, secure, and production-ready Docker images.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">The Problem with Single-stage Builds</h2>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <p className="text-slate-600 dark:text-slate-400">
            Imagine you are building a React application. To build it, you need Node.js, npm, and gigabytes of <code>node_modules</code>. So, you use a <code>node:alpine</code> base image, run <code>npm install</code>, and then <code>npm run build</code>. 
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            The problem? Your final Docker image now contains Node.js, npm, and all those heavy dependencies, making your image <strong>1GB+ in size</strong>. But the actual React app is just static HTML/CSS/JS files that could be served by a tiny 15MB web server (like Nginx).
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">The Solution: Multi-stage Builds</h2>
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50 space-y-4">
          <p className="text-slate-800 dark:text-slate-200 font-medium">
            Multi-stage builds allow you to use multiple <code>FROM</code> statements in your Dockerfile. Each <code>FROM</code> instruction begins a new "stage".
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
            <li><strong>Stage 1 (The Builder):</strong> Uses a heavy base image with all the tools needed to compile/build your app.</li>
            <li><strong>Stage 2 (The Runner):</strong> Uses a tiny, lightweight base image. It simply <strong>copies</strong> the compiled output from Stage 1, leaving all the heavy build tools behind.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Example: React App Multi-stage Build</h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700 flex justify-between">
            <span>Dockerfile</span>
            <span className="text-emerald-500">Resulting Image Size: ~20MB</span>
          </div>
          <SyntaxHighlighter language="dockerfile" style={vscDarkPlus} className="m-0 text-sm" customStyle={{ margin: 0, borderRadius: 0 }}>
{`# ==========================================
# STAGE 1: Build the React App
# ==========================================
# We name this stage 'builder' using AS
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies (heavy)
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build
# The compiled static files are now in /app/dist

# ==========================================
# STAGE 2: Serve the App using Nginx
# ==========================================
# We start fresh with a tiny Nginx web server
FROM nginx:alpine

# COPY the compiled files FROM the 'builder' stage 
# into the Nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]`}
          </SyntaxHighlighter>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">Without Multi-stage</h4>
            <p className="text-rose-500 font-bold text-xl">~1.2 GB</p>
            <p className="text-xs text-slate-500 mt-1">Contains Node.js, npm, source code, and node_modules.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">With Multi-stage</h4>
            <p className="text-emerald-500 font-bold text-xl">~22 MB</p>
            <p className="text-xs text-slate-500 mt-1">Only contains Alpine Linux, Nginx, and static HTML/JS files.</p>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default MultiStageBuilds;
