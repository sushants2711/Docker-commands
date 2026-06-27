import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DockerCompose = () => {
  const composeYaml = `version: "3.9"

services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: backend-container
    ports:
      - "7000:7000"
    env_file:
      - ./backend/.env
    volumes:
      - ./backend:/app
      - /app/node_modules
    depends_on:
      - mongodb
    restart: unless-stopped
    networks:
      - app-network

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: frontend-container
    ports:
      - "3000:3000"
    env_file:
      - ./frontend/.env
    volumes:
      - ./frontend:/app
      - /app/node_modules
    restart: unless-stopped
    depends_on:
      - backend
    networks:
      - app-network

  mongodb:
    image: mongo
    container_name: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    restart: always
    networks:
      - app-network

volumes:
  mongo-data:

networks:
  app-network:
`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl space-y-12 pb-12"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4">
          docker-compose
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          The ultimate tool for defining and running multi-container Docker applications.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">What is docker-compose?</h2>
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50 space-y-4 text-blue-900 dark:text-blue-100 leading-relaxed">
          <p>
            - A docker-compose is a configuration file which is used by Docker or Docker-compose to define, configure and run multi-container Docker applications simultaneously.
          </p>
          <p>
            - Instead of manually executing docker command we write everything inside <code>docker-compose.yaml</code>. The configuration file looks like image, container-name, port mapping, volumes and networks.
          </p>
          <p>
            - It is mostly used in development.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">The <code>docker-compose.yaml</code> File</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          <div className="rounded-xl overflow-hidden shadow-lg border border-slate-700 bg-[#1E1E1E]">
            <div className="bg-slate-800 text-slate-300 text-xs px-4 py-2 font-mono border-b border-slate-700">
              docker-compose.yaml
            </div>
            <SyntaxHighlighter language="yaml" style={vscDarkPlus} showLineNumbers customStyle={{ margin: 0, padding: '1rem', fontSize: '0.875rem' }}>
              {composeYaml}
            </SyntaxHighlighter>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-4">Line-by-Line Breakdown</h3>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:border-pink-500 transition-colors">
              <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">version: "3.9"</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Specifies the Docker Compose file format version.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:border-pink-500 transition-colors">
              <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">services:</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">This is the main block where you define all the different containers (services) that make up your application.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm border-l-4 border-l-blue-500 hover:border-blue-500 transition-colors">
              <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">backend: / frontend: / mongodb:</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">These are the custom names of your services. Docker uses these names for internal DNS (e.g. the frontend can talk to the backend by just calling <code>http://backend:7000</code>).</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:border-pink-500 transition-colors">
              <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">build:</span>
              <ul className="text-sm text-slate-600 dark:text-slate-400 mt-2 list-disc pl-5 space-y-1">
                <li><strong>context:</strong> Tells Compose which folder to look in (e.g., <code>./backend</code>) to find the source code.</li>
                <li><strong>dockerfile:</strong> Tells it the exact name of the Dockerfile to use.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:border-pink-500 transition-colors">
              <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">image: mongo</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Instead of building from a local Dockerfile, this tells Compose to download the pre-built official <code>mongo</code> image directly from Docker Hub.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:border-pink-500 transition-colors">
              <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">ports:</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Maps ports from your computer to the container. Format is <code>"HOST_PORT : CONTAINER_PORT"</code>.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:border-pink-500 transition-colors">
              <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">env_file:</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Instead of hardcoding API keys and passwords in your compose file, this securely loads all environment variables from a local <code>.env</code> file (like <code>./backend/.env</code>) directly into the container.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:border-pink-500 transition-colors">
              <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">restart:</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Controls what happens if your app crashes or the server reboots.</p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 mt-2 list-disc pl-5 space-y-2">
                <li><strong><code>no</code></strong> (Default): Never automatically restart.</li>
                <li><strong><code>always</code></strong>: Always restart, even if you manually stopped it (it will restart when the Docker daemon boots).</li>
                <li><strong><code>on-failure</code></strong>: Only restart if the app crashes with an error code.</li>
                <li><strong><code>unless-stopped</code></strong> (Best Practice): Always restart it automatically, <em>unless</em> you explicitly ran <code>docker stop</code> before the server rebooted!</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:border-pink-500 transition-colors">
              <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">depends_on:</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Controls startup order. For example, the <code>backend</code> depends on <code>mongodb</code>, so Compose will start the database container <em>before</em> starting the backend container.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:border-pink-500 transition-colors">
              <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">volumes:</span>
              <ul className="text-sm text-slate-600 dark:text-slate-400 mt-2 list-disc pl-5 space-y-2">
                <li><strong><code>./frontend:/app</code></strong> (Bind Mount): Maps your local code into the container. This enables <strong>live-reloading</strong>—if you save a file locally, it instantly updates inside the container without needing to rebuild the image!</li>
                <li><strong><code>/app/node_modules</code></strong> (Anonymous Volume): Protects the container. It prevents your local <code>node_modules</code> folder (which might have Mac/Windows files) from overwriting the Linux <code>node_modules</code> that the container installed during the build.</li>
                <li><strong><code>mongo-data:/data/db</code></strong> (Named Volume): Saves database data permanently so it isn't erased when the container stops.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:border-pink-500 transition-colors">
              <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">networks:</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Inside a service, this places the container into a specific custom network (<code>app-network</code>) so it can communicate with other containers securely.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm border-l-4 border-l-green-500 hover:border-green-500 transition-colors">
              <span className="font-mono text-green-600 dark:text-green-400 font-bold">Top-Level volumes: / networks: (At the bottom)</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                At the very end of the file, you formally declare the named volumes (<code>mongo-data:</code>) and custom networks (<code>app-network:</code>) that you used above.<br /><br />
                <strong>Crucial Tip:</strong> If you completely remove the <code>networks:</code> blocks from this file, Docker Compose will actually <em>auto-create</em> a default network for you behind the scenes, and all your containers will still be able to communicate perfectly!
              </p>
            </div>

          </div>
        </div>

      </section>
    </motion.div>
  );
};

export default DockerCompose;
