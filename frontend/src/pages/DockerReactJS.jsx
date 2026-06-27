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

const DockerReactJS = () => {
  const devCode = `FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]`;

  const prodServeCode = `FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build ./build
EXPOSE 5173
CMD ["serve", "-s", "build"]`;

  const prodServeTSCode = `FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 5173
CMD ["serve", "-s", "dist"]`;

  const prodNginxCode = `FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2 -> Nginx Server
FROM nginx:1.29-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`;

  const nginxConfCode = `server {
    listen 80;
    
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        # THIS IS CRITICAL FOR REACT ROUTER:
        # If the file isn't found, fallback to index.html
        try_files $uri $uri/ /index.html;
    }
}`;

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
          React.js Docker File
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Standard Dockerfile templates for React.js applications (JavaScript/TypeScript) based on class notes.
        </p>
      </div>

      <div className="space-y-12">
        {/* React Dev */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">React.js (Development)</h2>
          <CodeBlock language="dockerfile" code={devCode} title="Dockerfile.dev (Development)" />
        </section>

        <hr className="border-slate-200 dark:border-slate-800" />

        {/* React Prod (Serve) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-md font-black">JS</span> React.js (Production with Serve)
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            This method uses a multi-stage build. The builder stage compiles the code, and the final stage installs the <code>serve</code> package globally to serve the static files from the <code>build</code> directory (common in Create React App).
          </p>
          <CodeBlock language="dockerfile" code={prodServeCode} title="Dockerfile (Production)" />
        </section>

        <hr className="border-slate-200 dark:border-slate-800" />

        {/* React Prod TS (Serve) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-black">TS</span> React.js + TypeScript (Production with Serve)
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            When using TypeScript and modern bundlers like Vite, the compiled output folder is typically <code>dist</code> instead of <code>build</code>. We copy that folder and tell <code>serve</code> to use it!
          </p>
          <CodeBlock language="dockerfile" code={prodServeTSCode} title="Dockerfile (TS Production)" />
        </section>

        <hr className="border-slate-200 dark:border-slate-800" />

        {/* React Prod (Nginx) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">React.js (Production with Nginx Deployment)</h2>
          <p className="text-slate-600 dark:text-slate-300">
            This is the Nginx deployment method. The builder stage builds the app into the <code>dist</code> folder (for Vite). Stage 2 uses an Nginx server, removes the default config, copies your custom <code>nginx.conf</code>, and serves the static files.
          </p>
          <CodeBlock language="dockerfile" code={prodNginxCode} title="Dockerfile (Nginx Deployment)" />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
             <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-md font-black">CRITICAL</span> The Required nginx.conf
          </h2>
          <p className="text-slate-600 dark:text-slate-300 bg-red-50 dark:bg-red-900/10 p-4 rounded-lg text-sm border-l-4 border-red-400 dark:text-red-200">
            <strong>The React Router Issue:</strong> When using Nginx with React (or any Single Page Application), you <strong>must</strong> tell Nginx to route all unknown requests back to <code>index.html</code>. If you don't do this, users will get a <strong>404 Error</strong> whenever they manually refresh the page or visit a specific route directly!
          </p>
          <CodeBlock language="nginx" code={nginxConfCode} title="nginx.conf (Place in same folder as Dockerfile)" />
        </section>
      </div>

    </motion.div>
  );
};

export default DockerReactJS;
