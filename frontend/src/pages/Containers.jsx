import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Containers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl space-y-12 pb-12"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Docker Containers
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Master the core commands to run, inspect, and manage your Docker containers from beginner to advanced.
        </p>
      </div>

      {/* What is a Container */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">What is a Container?</h2>
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50 space-y-4">
          <p className="text-lg text-blue-900 dark:text-blue-100 font-medium leading-relaxed italic border-l-4 border-blue-500 pl-4">
            "A container is a lightweight, isolated and portable runtime environment that packages an application together with all of its required dependencies, libraries and configuration files to run across all different operating systems."
          </p>
          <div className="bg-white/60 dark:bg-slate-900/50 p-4 rounded-lg text-blue-900 dark:text-blue-200 text-sm">
            <strong>Example of what's inside:</strong> Application code, Runtime (Node.js), Libraries, Dependencies, and Environment variables.
          </div>
          <p className="text-blue-800 dark:text-blue-200 pt-2">
            In short: While an <strong>Image</strong> is the read-only blueprint, a <strong>Container</strong> is the actual running instance of that blueprint. When you "run" an image, Docker creates this completely isolated environment on your computer.
          </p>
        </div>
      </section>

      {/* 1. How to see containers */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">1. How to See Containers</h2>
        <p className="text-slate-600 dark:text-slate-400">Before we run anything, let's learn how to look at our containers.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Running Containers</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Shows only containers that are currently active.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker ps
            </SyntaxHighlighter>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">All Containers</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Shows everything: running, stopped, and crashed.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker ps -a
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      {/* 2. Docker Run and Flags */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">2. Running Containers & Flags</h2>
        <p className="text-slate-600 dark:text-slate-400">The <code>docker run</code> command creates and starts a container. Let's learn the flags one by one, then combine them!</p>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Basic Run</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">The simplest way to start a container. It will lock your terminal until you stop it.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker run [image-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6 bg-slate-50/50 dark:bg-slate-800/20">
            <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-400 mb-2">Flag: -d (Detached)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Runs the container in the background so you can keep using your terminal.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker run -d [image-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">Flag: --name</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Docker gives containers random names (like <em>jovial_turing</em>). Use this to give it a specific name.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker run --name my-app [image-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6 bg-slate-50/50 dark:bg-slate-800/20">
            <h3 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2">Flag: -p (Port Mapping)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Containers are completely isolated by default. This flag maps <code>[Host-Port]:[Container-Port]</code> so you can access the app from your browser (e.g., localhost:8080).</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker run -p 8080:80 [image-name]
            </SyntaxHighlighter>
            <ul className="list-disc pl-5 mt-4 text-slate-600 dark:text-slate-400 space-y-2 text-sm">
              <li><strong>Host Port (Left side - 8080):</strong> The port on your actual computer (laptop/server) where you want to access the app.</li>
              <li><strong>Container Port (Right side - 80):</strong> The internal port that the application is listening on <em>inside</em> the isolated container.</li>
            </ul>
            <div className="mt-6 flex justify-center bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              <img src="/docker-port.png" alt="Docker Port Mapping" className="max-w-full h-auto rounded-lg max-h-[300px]" />
            </div>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400 mb-2">Flags: -e and --env-file</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Pass Environment Variables into the container.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm mb-2">
              docker run -e NODE_ENV=production [image-name]
            </SyntaxHighlighter>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker run --env-file ./frontend/.env [image-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6 bg-slate-50/50 dark:bg-slate-800/20">
            <h3 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-2">Flags: -it (Interactive Terminal)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Opens an interactive terminal inside the container. It's actually a combination of two flags:</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker run -it [image-name] /bin/bash
            </SyntaxHighlighter>
            <ul className="list-disc pl-5 mt-4 text-slate-600 dark:text-slate-400 space-y-2 text-sm">
              <li><strong><code>-i</code> (Interactive):</strong> Keeps the input stream (STDIN) open so you can actually type commands into the container.</li>
              <li><strong><code>-t</code> (TTY):</strong> Allocates a pseudo-TTY, which basically formats the terminal so it looks nice and acts like a real command prompt.</li>
            </ul>
          </div>
        </div>

        {/* Combining Commands */}
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none text-9xl">🔗</div>
          <h3 className="font-extrabold text-xl text-white mb-4">Combining the Flags</h3>
          <p className="text-slate-300 text-sm mb-6">Now, let's see how powerful Docker is when we chain these together.</p>

          <div className="space-y-6">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">2 Flags: Background + Name</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
                docker run -d --name my-app [image-name]
              </SyntaxHighlighter>
            </div>

            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">3 Flags: Background + Name + Port</p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
                docker run -d --name my-app -p 8080:80 [image-name]
              </SyntaxHighlighter>
            </div>

            <div>
              <h3 className="font-extrabold text-yellow-400 text-xs uppercase tracking-wider mb-2">
                <span className="inline-block animate-pulse mr-2 text-base">⭐</span>
                The God-Tier Combo (Background, Name, Port, Env, Volume)
              </h3>

              <div className="space-y-4 mb-4">
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

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <p className="text-slate-200 font-bold mb-3 text-sm">Why are we using these flags?</p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li><strong className="text-indigo-400"><code>-d</code> (Detached):</strong> Runs the container in the background so it doesn't freeze your terminal.</li>
                  <li><strong className="text-blue-400"><code>--name my-app</code>:</strong> Gives the container a readable name instead of a random ID, making it easy to stop/start later.</li>
                  <li><strong className="text-emerald-400"><code>-p 8080:80</code> (Port):</strong> Opens the container to the outside world so users can actually access it.</li>
                  <li><strong className="text-orange-400"><code>-e</code> OR <code>--env-file</code>:</strong> Injects secrets, API keys, or config settings into the app without hardcoding them in the image.</li>
                  <li><strong className="text-yellow-400"><code>-v my-data:/app/data</code> (Volume):</strong> Ensures that any data the app creates is permanently saved to your host machine, protecting it from container crashes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Lifecycle Commands */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">3. Container Lifecycle Commands</h2>
        <p className="text-slate-600 dark:text-slate-400">Once your container is running (or stopped), use these commands to manage it.</p>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex justify-center mb-6">
          <img src="/docker-lifecycle.png" alt="Docker Container Lifecycle" className="max-w-full h-auto rounded-lg max-h-[400px]" />
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">

          <div className="p-6 bg-slate-50/50 dark:bg-slate-800/20">
            <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-400 mb-2">Enter a Running Container (exec)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Opens an interactive terminal inside a container that is <em>already running</em>. This is how you "SSH" or step inside your container to look at its files or debug.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm mb-2">
              docker exec -it [container-id-or-name] /bin/sh
            </SyntaxHighlighter>
            <p className="text-slate-500 dark:text-slate-500 text-xs italic">Note: Use <code>/bin/bash</code> for Windows and <code>/bin/sh</code> for Mac or Linux.</p>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Stop</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Gracefully stops a running container.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker stop [container-id-or-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Start</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Restarts a container that was previously stopped.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker start [container-id-or-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Restart</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Stops and then immediately starts a container.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker restart [container-id-or-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Inspect</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Returns detailed low-level information (JSON) about the container (IP address, volumes, environment variables).</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker inspect [container-id-or-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Remove (rm)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Deletes a stopped container. Note: You must stop it first.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker rm [container-id-or-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-2">Force Remove (rm -f)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Forcefully stops and deletes a running container in one command.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker rm -f [container-id-or-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6 bg-red-50 dark:bg-red-900/10">
            <h3 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">Kill</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Force kills a container immediately (like pulling the power plug, rather than a graceful stop).</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker kill [container-id-or-name]
            </SyntaxHighlighter>
          </div>

        </div>
      </section>

    </motion.div>
  );
};

export default Containers;
