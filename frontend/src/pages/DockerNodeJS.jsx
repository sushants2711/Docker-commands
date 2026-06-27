import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, code, title }) => (
  <div className="rounded-xl overflow-hidden shadow-lg border border-slate-700 bg-[#1E1E1E]">
    {title && (
      <div className="bg-slate-800 text-slate-300 text-xs px-4 py-2 font-mono border-b border-slate-700 flex justify-between">
        <span>{title}</span>
      </div>
    )}
    <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers customStyle={{ margin: 0, padding: '1rem', fontSize: '0.875rem' }}>
      {code}
    </SyntaxHighlighter>
  </div>
);

const DockerNodeJS = () => {
  const jsDevCode = `FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 7000
CMD ["npm", "run", "dev"]`;

  const jsProdCode = `FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
# Install only prod dependencies (omits dev)
RUN npm ci --omit=production
COPY . .
EXPOSE 7000
CMD ["npm", "start"]`;

  const tsCode = `FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=production
COPY --from=builder /app/dist ./dist
EXPOSE 7070
CMD ["node", "dist/index.js"]`;

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
          Node.js Backend Docker File
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Standard Dockerfile templates for Node.js using JavaScript and TypeScript based on class notes.
        </p>
      </div>

      <div className="space-y-12">
        {/* Node + JS (Dev) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-md font-black">JS</span> Node.js (JavaScript) - Development
          </h2>
          <CodeBlock language="dockerfile" code={jsDevCode} title="Dockerfile.dev (Development)" />
        </section>

        {/* Node + JS (Prod) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-md font-black">JS</span> Node.js (JavaScript) - Production
          </h2>
          <p className="text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm border-l-4 border-slate-400">
            <strong>Note:</strong> We use <code>RUN npm ci --omit=production</code> in production to install only production dependencies, omitting development dependencies to keep the image small.
          </p>
          <CodeBlock language="dockerfile" code={jsProdCode} title="Dockerfile (Production)" />
        </section>

        <hr className="border-slate-200 dark:border-slate-800" />

        {/* Node + TS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-black">TS</span> Node.js With TypeScript
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            For TypeScript, we use a multi-stage build. The first stage (<code>builder</code>) compiles the code using <code>npm run build</code>. The second stage copies the compiled files (<code>/app/dist</code>) and starts the server using <code>node dist/index.js</code>.
          </p>
          <CodeBlock language="dockerfile" code={tsCode} title="Dockerfile" />
        </section>
      </div>

    </motion.div>
  );
};

export default DockerNodeJS;
