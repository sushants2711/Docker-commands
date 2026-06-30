import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Cheatsheet = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl space-y-12 pb-12"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          Command Cheatsheet
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          The top 20 most essential Docker commands you will use every day.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Containers Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2">📦 Containers</h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">List running containers</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker ps</SyntaxHighlighter>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">List all containers (running & stopped)</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker ps -a</SyntaxHighlighter>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Run a container (Detached, Port, Name)</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker run -d -p 8080:80 --name web nginx</SyntaxHighlighter>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Stop / Start / Restart a container</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">{`docker stop [container_id]
docker start [container_id]
docker restart [container_id]`}</SyntaxHighlighter>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 border-l-4 border-l-red-500">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Remove a stopped container</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker rm [container_id]</SyntaxHighlighter>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2">🖼️ Images</h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">List downloaded images</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker images</SyntaxHighlighter>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Pull an image from Docker Hub</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker pull ubuntu:latest</SyntaxHighlighter>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Build an image from a Dockerfile</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker build -t my-app:1.0 .</SyntaxHighlighter>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 border-l-4 border-l-red-500">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Remove an image</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker rmi [image_id]</SyntaxHighlighter>
            </div>
          </div>
        </section>

        {/* System & Debugging Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2">🛠️ Debugging & System</h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">View container logs (Live follow)</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker logs -f [container_id]</SyntaxHighlighter>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Enter a running container (Interactive shell)</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker exec -it [container_id] sh</SyntaxHighlighter>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 border-l-4 border-l-red-500">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Nuclear Option: Delete ALL unused data</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker system prune -a --volumes</SyntaxHighlighter>
            </div>
          </div>
        </section>

        {/* Docker Compose Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2">🐙 Docker Compose</h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Start everything in the background</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker compose up -d</SyntaxHighlighter>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 border-l-4 border-l-red-500">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Stop and remove everything</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker compose down</SyntaxHighlighter>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">View logs for all compose services</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="m-0 text-sm rounded">docker compose logs -f</SyntaxHighlighter>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
};

export default Cheatsheet;
