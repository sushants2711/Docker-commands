import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Dockerfile = () => {
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
          Learn Dockerfile
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          The ultimate guide to writing your own Dockerfiles.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Q1: Why Dockerfile?</h2>
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50 space-y-4">
          <p className="text-blue-900 dark:text-blue-100 leading-relaxed">
            - A Dockerfile is important because it turns your application setup into code.
          </p>
          <p className="text-blue-900 dark:text-blue-100 leading-relaxed">
            - Instead of manually doing everything step by step we just write a Dockerfile and docker does do everything automatically.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Commands used in Dockerfile</h2>
        
        <div className="space-y-6">
          {/* FROM */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
            <h3 className="font-bold text-xl text-indigo-600 dark:text-indigo-400 mb-2">1) FROM</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Base Image:</strong> this tells Docker that building from existing Image.
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-200 mb-4">
              FROM node:22-alpine
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800/50">
              <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">Why?</h4>
              <ul className="list-disc pl-5 text-sm text-indigo-700 dark:text-indigo-400 space-y-1">
                <li>contains OS + runtime</li>
                <li>No need to install node.js manually</li>
                <li>Faster builds</li>
              </ul>
            </div>
          </div>

          {/* WORKDIR */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400 mb-2">2) WORKDIR</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              moves into directory inside container.
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-200 mb-4">
              WORKDIR /app
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Equivalent to:</p>
            <div className="bg-slate-800 text-slate-300 p-3 rounded-lg font-mono text-sm mt-2">
              mkdir app<br/>
              cd app
            </div>
          </div>

          {/* COPY */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
            <h3 className="font-bold text-xl text-teal-600 dark:text-teal-400 mb-2">3) COPY</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              copy files into container.
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-200">
              COPY . .
            </div>
          </div>

          {/* RUN */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
            <h3 className="font-bold text-xl text-orange-600 dark:text-orange-400 mb-2">4) RUN</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Executes command during build.
            </p>
            <div className="flex gap-4">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-200 flex-1">
                RUN npm install
              </div>
              <div className="flex items-center text-slate-500 font-bold">OR</div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-200 flex-1">
                RUN npm ci
              </div>
            </div>
            <div className="mt-4 bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-800/50">
              <p className="text-sm text-orange-800 dark:text-orange-300 font-medium">Why <code>ci</code>? → Faster than npm</p>
            </div>
          </div>

          {/* EXPOSE */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-pink-500"></div>
            <h3 className="font-bold text-xl text-pink-600 dark:text-pink-400 mb-2">5) EXPOSE</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              On which port number you want to expose.
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-200">
              EXPOSE 7070
            </div>
          </div>

          {/* CMD */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <h3 className="font-bold text-xl text-red-600 dark:text-red-400 mb-2">6) CMD</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              container startup command.
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-200">
              CMD ["npm", "start"]
            </div>
          </div>

        </div>
      </section>

      {/* Full Lifecycle Section */}
      <section className="space-y-6 pt-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">The Complete Docker Lifecycle</h2>
        
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
          
          {/* Step 1: Build */}
          <div className="p-6 md:p-8">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-2">1. Build the Image</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Once your Dockerfile is ready, you need to "build" it into an Image. 
              The <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-500">-t</code> flag tags it with the name <strong>my-app</strong>, 
              and the <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-500">.</code> tells Docker to look for the Dockerfile in your current directory.
            </p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-xl !text-sm shadow-inner !bg-[#1E1E1E]">
              docker build -t my-app .
            </SyntaxHighlighter>
          </div>

          {/* Step 2: Run */}
          <div className="p-6 md:p-8">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-2">2. Run the Container</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Now start a container from your image. We can add more powerful flags here:<br/><br/>
              <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-blue-500">--name</code> gives your container a custom name (<strong>my-running-app</strong>).<br/>
              <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-blue-500">-p</code> maps your computer's port to the container.<br/>
              <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-blue-500">-v</code> attaches a <strong>Volume</strong> so data isn't lost if the container dies.<br/>
              <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-blue-500">--network</code> connects it to a custom <strong>Network</strong> so it can talk to a database.<br/>
              <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-blue-500">-d</code> runs it in the background.
            </p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-xl !text-sm shadow-inner !bg-[#1E1E1E]">
              docker run -d --name my-running-app -p 8080:7070 -v my-data:/app/data --network my-net my-app
            </SyntaxHighlighter>
          </div>

          {/* Step 3: Logs */}
          <div className="p-6 md:p-8">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-2">3. Check the Logs</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Since the container is running in the background, you can't see its output. Use the <code>logs</code> command to see console prints or errors. Add <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-teal-500">-f</code> to stream the logs live.
            </p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-xl !text-sm shadow-inner !bg-[#1E1E1E]">
              docker logs -f my-running-app
            </SyntaxHighlighter>
          </div>

          {/* Step 4: Resources */}
          <div className="p-6 md:p-8">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-2">4. Monitor Resources</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You can view a live stream of the CPU, Memory, and Network usage of your container to ensure your app isn't crashing or using too much RAM.
            </p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-xl !text-sm shadow-inner !bg-[#1E1E1E]">
              docker stats my-running-app
            </SyntaxHighlighter>
          </div>
          
          {/* Step 5: Stop */}
          <div className="p-6 md:p-8">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-2">5. Stop the Container</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              When you are done testing, you can gracefully stop the running container using the explicit name you gave it (<strong>my-running-app</strong>).
            </p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-xl !text-sm shadow-inner !bg-[#1E1E1E]">
              docker stop my-running-app
            </SyntaxHighlighter>
          </div>

          {/* Step 6: Delete Container */}
          <div className="p-6 md:p-8">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-2">6. Delete the Container</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Stopping the container doesn't delete it. To completely remove the stopped container from your system and free up space, use the <code>rm</code> command.
            </p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-xl !text-sm shadow-inner !bg-[#1E1E1E]">
              docker rm my-running-app
            </SyntaxHighlighter>
          </div>

          {/* Step 7: Delete Image */}
          <div className="p-6 md:p-8">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-2">7. Delete the Image</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Finally, if you want to delete the built image (<strong>my-app</strong>) entirely, use the <code>rmi</code> (remove image) command. <br/><br/>
              <em>Note: You must delete the container (Step 6) before you can delete the image!</em>
            </p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-xl !text-sm shadow-inner !bg-[#1E1E1E]">
              docker rmi my-app
            </SyntaxHighlighter>
          </div>

        </div>
      </section>

    </motion.div>
  );
};

export default Dockerfile;
