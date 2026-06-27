import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Images = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl space-y-12 pb-12"
    >
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4">
          Docker Images
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Everything you need to know about Docker images, where they live, and how to manage them.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">What is a Docker Image?</h2>
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50">
          <p className="text-lg text-blue-900 dark:text-blue-100 font-medium leading-relaxed">
            A Docker Image is a read-only template that contains a set of instructions for creating a Docker container. It includes everything your application needs to run: the code, runtime, libraries, environment variables, and configuration files.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Where are images available?</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Docker images are stored in a <strong>Docker Registry</strong>. The default, public registry is <a href="https://hub.docker.com/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline font-bold">Docker Hub</a>. You can search Docker Hub to find official images for Node.js, Python, Nginx, MongoDB, and thousands of other tools.
        </p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex justify-center">
          <img src="/docker-registry.png" alt="Docker Registry Flow" className="max-w-full h-auto rounded-lg max-h-[400px]" />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">How to build your own Image</h2>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <p className="text-slate-600 dark:text-slate-400">
            You build your own images using a <code>Dockerfile</code>. Here is a small demo:
          </p>
          <SyntaxHighlighter language="dockerfile" style={vscDarkPlus} className="rounded-lg text-sm">
            {`# 1. Choose a base image (OS + Runtime)
FROM node:22-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of your app files
COPY . .

# 5. Expose the port your app runs on
EXPOSE 3000

# 6. Command to start your app
CMD ["node", "app.js"]`}
          </SyntaxHighlighter>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mt-4 mb-2">
            <p className="text-slate-800 dark:text-slate-200 font-bold mb-2">Build Command Breakdown:</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm m-0">
              docker build -t my-custom-app .
            </SyntaxHighlighter>
            <ul className="list-disc pl-5 mt-4 text-sm text-slate-600 dark:text-slate-400 space-y-2">
              <li><strong><code>docker build</code>:</strong> The command that tells Docker to create an image based on a Dockerfile.</li>
              <li><strong><code>-t my-custom-app</code>:</strong> The "tag" flag. It gives your newly built image a readable name (and optionally a tag like <code>:latest</code>). Without this, your image would only have a random ID!</li>
              <li><strong><code>.</code> (The Dot):</strong> Specifies the <em>build context</em>. It tells Docker to look in the current directory (where you are running the command) to find the <code>Dockerfile</code> and the source code files.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex justify-center mt-6">
          <img src="/docker-build.png" alt="Docker Build Flow" className="max-w-full h-auto rounded-lg max-h-[400px]" />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Essential Image Commands</h2>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">1. Search for an image</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Search Docker Hub directly from your terminal to find images.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker search [image-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">2. List all images</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Shows all images currently downloaded on your local machine.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker images
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">2. Download an image</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Pulls an image from Docker Hub to your local machine without running it.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker pull [image-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">3. Remove an image</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Deletes an image from your local machine (RMI stands for Remove Image).</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker rmi [image-id-or-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">4. Force remove an image</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Forcefully deletes an image, even if a stopped container is still referencing it.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker rmi -f [image-id-or-name]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">6. Inspect an image</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">View detailed configuration, layers, and metadata about an image.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker image inspect [image-id]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">7. Tag an image</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Gives your image a new name or tag (like an alias). This is usually required before uploading to Docker Hub so the name includes your username.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker tag [source-image] [new-image-name:tag]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">8. Push an image</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Uploads your local image to a Docker registry like Docker Hub.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker push [username/repository:tag]
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">9. Prune dangling images</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Removes dangling images (images with no name/tag that are no longer used).</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker image prune
            </SyntaxHighlighter>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">10. Prune ALL unused images</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Removes all images that are not associated with at least one container.</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
              docker image prune -a
            </SyntaxHighlighter>
          </div>

        </div>
      </section>

    </motion.div>
  );
};

export default Images;
