import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const EnvVariables = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl space-y-12 pb-12"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-4">
          Environment Variables (.env)
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          How to safely pass secrets and configuration into your Docker containers.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Why use Environment Variables?</h2>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <p className="text-slate-600 dark:text-slate-400">
            Hardcoding sensitive data (like database passwords, API keys, or JWT secrets) directly into your source code or Dockerfile is a massive security risk. Anyone who has access to your image can extract those secrets.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Instead, we use <strong>Environment Variables</strong>. These allow you to inject configuration into a container <em>at runtime</em>, meaning the same exact Docker image can be used for Development (with dummy keys) and Production (with real keys).
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Method 1: The <code>-e</code> Flag (Command Line)</h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            You can pass individual environment variables directly in the <code>docker run</code> command using the <code>-e</code> flag. This is great for quick tests or single variables.
          </p>
          <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm mb-4">
            docker run -d -p 3000:3000 -e NODE_ENV=production -e DB_PASS=supersecret123 my-node-app
          </SyntaxHighlighter>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm font-semibold">
              ⚠️ Warning: Avoid using this for sensitive passwords in production, as your secrets will be visible in your terminal history!
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Method 2: The <code>--env-file</code> Flag (Recommended)</h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            For applications with many configuration variables, it's much better to use an <code>.env</code> file. Create a file named <code>.env</code> in your project directory:
          </p>
          
          <div className="mb-4 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
              .env
            </div>
            <SyntaxHighlighter language="env" style={vscDarkPlus} className="m-0 text-sm" customStyle={{ margin: 0, borderRadius: 0 }}>
{`PORT=3000
NODE_ENV=production
DB_HOST=my-database
DB_USER=admin
DB_PASS=supersecret123
JWT_SECRET=my_jwt_key`}
            </SyntaxHighlighter>
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Then, tell Docker to read this file when starting the container:
          </p>
          <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
            docker run -d -p 3000:3000 --env-file .env my-node-app
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Using Environment Variables in Docker Compose</h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Docker Compose makes this even easier. By default, if an <code>.env</code> file exists in the same directory as your <code>docker-compose.yml</code>, Compose automatically reads it!
          </p>
          
          <div className="mb-4 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
              docker-compose.yml
            </div>
            <SyntaxHighlighter language="yaml" style={vscDarkPlus} className="m-0 text-sm" customStyle={{ margin: 0, borderRadius: 0 }}>
{`services:
  backend:
    image: my-node-app
    ports:
      - "3000:3000"
    env_file:
      - .env  # Explicitly tell Compose to use this file`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
      
    </motion.div>
  );
};

export default EnvVariables;
