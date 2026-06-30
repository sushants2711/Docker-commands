import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PortBinding = () => {
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
          Port Binding
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Understanding how to connect the outside world to your Docker containers using Host and Container ports.
        </p>
      </div>

      <section className="space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">What is Port Binding?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            By default, when you run a container, it is completely isolated from the outside world. It has its own private network and its own set of ports. Even if an application inside the container is listening on a specific port (like port 80 for a web server), you cannot access it from your browser or your host machine directly.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            <strong>Port Binding</strong> (or Port Mapping) is the process of mapping a port on your host machine to a port inside the container. This creates a bridge, allowing traffic from the outside world to reach the application running inside the isolated container.
          </p>
          <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
            <img src="/images/docker_port_binding.png" alt="Docker Port Binding Illustration showing traffic from host port 8080 to container port 3000" className="w-full h-auto object-cover" />
          </div>

          <div className="mt-12 mb-4">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 text-center">Architecture Flow</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full text-center">
              {/* Outside World */}
              <div className="flex flex-col items-center">
                <div className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-full w-20 h-20 flex items-center justify-center shadow-inner">
                  <span className="text-3xl">🌍</span>
                </div>
                <p className="mt-3 font-semibold text-slate-700 dark:text-slate-300">Browser / User</p>
                <p className="text-xs text-slate-500 font-mono mt-1">http://localhost:8080</p>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center text-blue-500 animate-pulse md:rotate-0 rotate-90 my-4 md:my-0">
                <span className="text-2xl font-bold hidden md:block">──────&gt;</span>
                <span className="text-2xl font-bold md:hidden">|</span>
                <span className="text-2xl font-bold md:hidden">v</span>
              </div>

              {/* Host Machine */}
              <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 flex flex-col items-center w-64 shadow-lg relative">
                <div className="absolute -top-3 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Host Machine
                </div>
                <div className="bg-white dark:bg-slate-900 border-2 border-blue-400 text-blue-600 dark:text-blue-400 font-mono font-bold text-lg px-4 py-2 rounded-lg mt-2 mb-4 w-full shadow-sm">
                  Port: 8080
                </div>
                
                {/* Arrow inside host */}
                <div className="text-emerald-500 my-2 rotate-90">
                  <span className="text-xl font-bold">➔</span>
                </div>

                {/* Docker Container */}
                <div className="bg-emerald-50 dark:bg-emerald-900/30 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl p-4 flex flex-col items-center w-full mt-2 relative">
                  <div className="absolute -top-3 bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Docker Container
                  </div>
                  <div className="bg-white dark:bg-slate-900 border-2 border-emerald-400 text-emerald-600 dark:text-emerald-400 font-mono font-bold px-3 py-1 rounded w-full mb-3 text-sm">
                    Port: 3000
                  </div>
                  <div className="bg-slate-800 dark:bg-slate-950 text-green-400 font-mono text-xs w-full py-2 rounded border border-slate-700 flex items-center justify-center gap-2">
                    <span className="text-green-500 text-lg">⬡</span> Node.js App
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none text-9xl">🔌</div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Machine Analogy</h2>
          
          <div className="space-y-6 relative z-10">
            <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">1. The Host Machine Port (The Front Door)</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Imagine your physical computer (or cloud server) as a large office building. The building has many external doors, each with a number. These doors are the <strong>Host Ports</strong>. If someone from the outside wants to enter the building, they need to go through one of these numbered doors (e.g., Door 8080).
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2">2. The Container Port (The Office Room)</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Inside the building, there is a secure, isolated office room. This room is your <strong>Container</strong> (e.g., a Backend Node.js server). This room also has its own internal doors, called <strong>Container Ports</strong>. The backend server might be listening for requests on its internal Door 3000.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-400 mb-2">3. The Binding (The Receptionist)</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Without a receptionist, someone entering Door 8080 (Host Port) wouldn't know how to reach the secure office room at Door 3000 (Container Port). Port binding acts like a receptionist who stands at the building's Door 8080 and says: <em>"Any package that arrives at Door 8080, immediately forward it directly to the secure office room's Door 3000."</em>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">How to Bind Ports in Docker</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            You bind ports using the <code>-p</code> or <code>--publish</code> flag when running a container. The syntax is always <strong>HostPort:ContainerPort</strong>.
          </p>
          
          <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm mb-4">
            docker run -p 8080:3000 my-backend-server
          </SyntaxHighlighter>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-mono text-sm font-bold">8080</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                <strong>Host Port (Machine Port):</strong> This is the port opened on your actual machine. You will access your app using <code>http://localhost:8080</code>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded font-mono text-sm font-bold">3000</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                <strong>Container Port:</strong> This is the port your application is listening on <em>inside</em> the container. If your Node.js app has <code>app.listen(3000)</code>, this must be 3000.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Why is this Separation Needed?</h2>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 dark:text-slate-400">
            <li>
              <strong>Security & Isolation:</strong> By default, containers are secure because nothing can access them from the outside. You explicitly choose which ports to expose to the host machine, minimizing the attack surface.
            </li>
            <li>
              <strong>Avoiding Port Conflicts:</strong> You might want to run three different backend servers on your machine, and all three might be coded to use port <code>3000</code> internally. Without separation, they would conflict and crash on your host machine. With Docker, you can run all three simultaneously by mapping them to different host ports!
              <div className="mt-3">
                <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm mb-2">
{`# Run App 1
docker run -p 8081:3000 my-backend-server

# Run App 2
docker run -p 8082:3000 my-backend-server

# Run App 3
docker run -p 8083:3000 my-backend-server`}
                </SyntaxHighlighter>
                <p className="text-sm">In this example, all three containers happily use port 3000 internally, but they are accessible on your machine via ports 8081, 8082, and 8083 without any conflicts.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 mt-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">EXPOSE vs Port Binding</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            It is important to understand the difference between the <code>EXPOSE</code> instruction in a Dockerfile and actual Port Binding (<code>-p</code>).
          </p>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 dark:text-slate-400">
            <li>
              <strong>EXPOSE Instruction:</strong> Used inside the <code>Dockerfile</code> (e.g., <code>EXPOSE 80</code>). This is primarily for <strong>documentation</strong>. It tells Docker and other developers that the container is designed to listen on this specific internal port. Crucially, it does <em>not</em> publish the port to the outside world.
            </li>
            <li>
              <strong>Port Binding (-p):</strong> This is used when running the container (e.g., <code>docker run -p 80:80</code>). This actually creates the active network bridge from your host machine (External) to the container (Internal).
            </li>
          </ul>
          <div className="mt-4 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Real World Example: Cloud Servers (EC2)</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400 mb-2">
              If you run a frontend server (like Nginx) in a container on a cloud server like EC2, it typically listens internally on port 80. If you map it using <code>-p 5173:80</code>, users from the outside world must explicitly type the port: <code>http://&lt;your-server-ip&gt;:5173</code> in their browser.
            </p>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              If you want users to just type your IP address or domain name without adding a port (which defaults to HTTP port 80), you would map it directly using <code>-p 80:80</code>.
            </p>
          </div>

          <div className="mt-4 bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg border border-emerald-100 dark:border-emerald-800">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">Real World Example: Local Development</h4>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-2">
              During local development on your own laptop, "the outside world" is just your web browser. If you run a React/Vite development server inside a container that listens on its default port <code>5173</code>, you might map it using <code>-p 6000:5173</code>.
            </p>
            <p className="text-sm text-emerald-700 dark:text-emerald-400">
              When you open <code>http://localhost:6000</code> in your browser, your local machine receives the request and immediately forwards it to the container's internal port <code>5173</code>. This means you are indirectly viewing the app running on 5173 through your localhost's port 6000.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PortBinding;
