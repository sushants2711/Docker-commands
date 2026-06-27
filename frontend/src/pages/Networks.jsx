import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Networks = () => {
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
          Docker Networks
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          How containers communicate with each other securely.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">What are Docker Networks?</h2>
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50 space-y-4">
          <p className="text-lg text-blue-900 dark:text-blue-100 font-medium leading-relaxed">
            - Docker Networks allow containers to talk to each other securely, without exposing their ports to the public internet.
          </p>
          <p className="text-lg text-blue-900 dark:text-blue-100 font-medium leading-relaxed">
            - Containers on the same network can discover each other automatically by using their container names as hostnames!
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">When do we use Networks?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">1. Frontend to Backend</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">When you run a React/Node app locally, a network allows the React container to talk directly to the Node API container securely.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">2. Backend to Database</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Your Node backend can safely query a PostgreSQL database container. The database stays hidden from the outside world.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-2">3. Local Deployments</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">If you deploy a multi-container stack (frontend, backend, db) on a single server, networks ensure they all wire together correctly.</p>
          </div>
        </div>
      </section>

      {/* Diagram Section */}
      <section className="space-y-6">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex justify-center">
          <img src="/docker-networks.png" alt="Docker Networks Connecting Containers" className="max-w-full h-auto rounded-lg" />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Connecting a Container</h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Basic Network Connection</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">You can attach a container to a specific network using the <code>--network</code> flag.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker run -d --name my-app --network [network-name] [image-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6 bg-slate-900 text-white">
            <h3 className="font-extrabold text-yellow-400 text-sm uppercase tracking-wider mb-2">
              <span className="inline-block animate-pulse mr-2 text-xl">⭐</span>
              The Ultimate Production Combo
            </h3>
            <p className="text-slate-300 text-sm mb-4">Here is what a true production container run command looks like, utilizing background running, naming, ports, environment variables, persistent volumes, AND a secure network!</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0 border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
              docker run -d --name backend-api -p 3000:3000 --env-file .env -v api-data:/app/data --network my-secure-net my-api-image
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Types of Network Drivers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">1. Bridge</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The default driver. It creates a private internal network on the host so containers on the same bridge can communicate. Ideal for standalone apps.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">2. Host</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Removes network isolation entirely. The container uses the host machine's actual networking. (If the container listens on port 80, the host's port 80 is used directly).
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">3. None</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Disables all networking for the container. It will have absolutely no connection to the host or other containers. Highly secure, but isolated.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Network Commands</h2>
        <p className="text-slate-600 dark:text-slate-400">Here are the essential commands you need to manage Docker networks, in order of importance.</p>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">1. List All Networks (ls)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Lists every network currently on your system. You will see default networks like <code>bridge</code>, <code>host</code>, and <code>none</code> right out of the box.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker network ls
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">2. Create a Network</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Creates a brand new custom network (using the default <code>bridge</code> driver) so you can connect your containers together.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker network create [network-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">3. Inspect a Network</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Outputs a detailed JSON block. Crucially, this shows you exactly which containers are currently connected to this specific network.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker network inspect [network-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">4. Connect a Running Container</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Connects a container that is already running to a network.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker network connect [network-name] [container-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">5. Disconnect a Container</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Disconnects a running container from a network.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker network disconnect [network-name] [container-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">6. Remove a Network (rm)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Deletes a custom network by name. <strong>Note:</strong> You cannot remove a network if active containers are currently connected to it.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker network rm [network-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6 bg-red-50/50 dark:bg-red-900/10">
            <h3 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-2">7. Prune Networks</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Automatically finds and deletes <strong>all</strong> custom networks that do not have any active containers connected to them. The <code>-f</code> flag forces this without asking.</p>

            <div className="space-y-4">
              <div>
                <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1">Standard Prune:</p>
                <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
                  docker network prune
                </SyntaxHighlighter>
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1">Force Prune:</p>
                <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0 border border-red-500/30">
                  docker network prune -f
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

        </div>
      </section>

    </motion.div>
  );
};

export default Networks;
