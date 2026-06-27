import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Volumes = () => {
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
          Docker Volumes
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Understanding persistent storage in Docker.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">What are Docker Volumes?</h2>
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50 space-y-4">
          <p className="text-lg text-blue-900 dark:text-blue-100 font-medium leading-relaxed">
            - Docker volumes are used to store data permanently outside the container file system.
          </p>
          <p className="text-lg text-blue-900 dark:text-blue-100 font-medium leading-relaxed">
            - It is a persistent storage mechanism. After deleting the container, the data is still persistent.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">When do we use Volumes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">1. Databases</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">To ensure that user data (MySQL, Postgres, MongoDB) isn't wiped out if the database container crashes or restarts.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">2. User Uploads</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">To safely store files (like profile pictures or documents) uploaded by users to your web application.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-2">3. Log Files</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">To keep a persistent record of application logs for debugging, even after the container is gone.</p>
          </div>
        </div>
      </section>

      {/* Diagram Section */}
      <section className="space-y-6">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex justify-center">
          <img src="/docker-volumes.png" alt="Docker Volumes Persistent Storage" className="max-w-full h-auto rounded-lg" />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Volume Commands</h2>
        <p className="text-slate-600 dark:text-slate-400">Here are the essential commands you need to manage Docker volumes on your host machine.</p>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Create a Volume</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Creates a new, named volume on your host machine. Docker manages the exact storage location for you.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker volume create [volume-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">List All Volumes (ls)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Lists every single volume that currently exists on your Docker host, along with its driver type (usually <code>local</code>).</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker volume ls
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Inspect a Volume</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Outputs a JSON block with detailed metadata. Crucially, this shows you the exact <code>Mountpoint</code> (the physical folder path on your host machine where the data is actually stored).</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker volume inspect [volume-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Remove a Volume (rm)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Deletes a specific volume by name. <strong>Note:</strong> You cannot remove a volume if a container is currently using it.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker volume rm [volume-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6 bg-red-50/50 dark:bg-red-900/10">
            <h3 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-2">Prune Volumes</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Automatically finds and deletes <strong>all</strong> volumes that are not currently attached to any container.</p>

            <div className="space-y-4">
              <div>
                <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1">Standard Prune (Asks for confirmation):</p>
                <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
                  docker volume prune
                </SyntaxHighlighter>
              </div>

              <div>
                <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1">Force Prune (No confirmation):</p>
                <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0 border border-red-500/30">
                  docker volume prune -f
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Mounting Volumes</h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Basic Volume Mount</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">You attach a volume to a container when you run it using the <code>-v</code> flag.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker run -v [volume-name]:[container-path] [image-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6 bg-slate-900 text-white">
            <h3 className="font-extrabold text-yellow-400 text-sm uppercase tracking-wider mb-2">
              <span className="inline-block animate-pulse mr-2 text-xl">⭐</span>
              The God-Tier Combo (With Volume)
            </h3>
            <p className="text-slate-300 text-sm mb-4">Here is how the <code>-v</code> flag fits into a complete, production-ready command. This is exactly how you would run a real application (like a database or web server) in production:</p>

            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Option 1: Using single environment variable (-e)</p>
                <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0 border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                  docker run -d --name my-app -p 8080:80 -e NODE_ENV=prod -v my-data:/app/data [image-name]
                </SyntaxHighlighter>
              </div>

              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Option 2: Using an environment file (--env-file)</p>
                <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0 border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                  docker run -d --name my-app -p 8080:80 --env-file .env -v my-data:/app/data [image-name]
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="mt-6 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-200 font-bold mb-3">Why are we using these flags?</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><strong className="text-indigo-400"><code>-d</code> (Detached):</strong> Runs the container in the background so it doesn't freeze your terminal.</li>
                <li><strong className="text-blue-400"><code>--name my-app</code>:</strong> Gives the container a readable name instead of a random ID, making it easy to stop/start later.</li>
                <li><strong className="text-emerald-400"><code>-p 8080:80</code> (Port):</strong> Opens the container to the outside world so users can actually access it.</li>
                <li><strong className="text-orange-400"><code>-e</code> OR <code>--env-file</code>:</strong> Injects secrets, API keys, or config settings (like production mode) into the app without hardcoding them in the image.</li>
                <li><strong className="text-yellow-400"><code>-v my-data:/app/data</code> (Volume):</strong> Ensures that any data the app creates is permanently saved to your host machine, protecting it from container crashes.</li>
              </ul>
            </div>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">How to know where to store data inside the container?</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">If you aren't sure what <code>[container-path]</code> to use, you can inspect the image to see if it exposes any default volumes (like <code>/var/lib/mysql</code> for MySQL).</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker image inspect [ImageId]
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Volumes;
