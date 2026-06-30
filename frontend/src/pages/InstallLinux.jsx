import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const InstallLinux = () => {
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
          Install on Linux
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Follow these step-by-step instructions to install Docker Engine on Linux (Ubuntu/Debian based distributions) from the official Docker repository.
        </p>
      </div>

      <section className="space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none text-9xl">🐧</div>
          
          <div className="space-y-8 pl-4 border-l-2 border-slate-200 dark:border-slate-700">
            
            {/* Step 1 */}
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Step 1: Update the system</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-3">
                <strong>Why it's needed:</strong> Before installing new software, it's a best practice to ensure your package lists and existing software are up to date. This prevents dependency conflicts and ensures you get the latest security patches.
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
{`sudo apt update
sudo apt upgrade -y`}
              </SyntaxHighlighter>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Step 2: Install required packages</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-3">
                <strong>Why it's needed:</strong> These packages allow <code>apt</code> to use repositories over HTTPS (<code>ca-certificates</code>), download files from the internet (<code>curl</code>), and handle GPG keys for verifying package signatures (<code>gnupg</code>).
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
{`sudo apt install -y ca-certificates curl gnupg`}
              </SyntaxHighlighter>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Step 3: Add Docker's GPG key</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-3">
                <strong>Why it's needed:</strong> This step downloads Docker's official GPG key and saves it to your system. Linux uses this key to cryptographically verify that the Docker packages you download are genuinely from Docker and haven't been tampered with.
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
{`sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \\
sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg`}
              </SyntaxHighlighter>
            </div>

            {/* Step 4 */}
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Step 4: Add the Docker repository</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-3">
                <strong>Why it's needed:</strong> This adds Docker's official software repository to your system's package manager sources. It tells <code>apt</code> exactly where to download the Docker packages from, ensuring you get the latest official releases rather than potentially outdated versions from default OS repositories.
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
{`echo \\
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \\
  https://download.docker.com/linux/ubuntu \\
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`}
              </SyntaxHighlighter>
            </div>

            {/* Step 5 */}
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Step 5: Update package list</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-3">
                <strong>Why it's needed:</strong> After adding a new repository (in Step 4), you must update your package index. This allows <code>apt</code> to see the new Docker packages available in the repository you just added.
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
{`sudo apt update`}
              </SyntaxHighlighter>
            </div>

            {/* Step 6 */}
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Step 6: Install Docker</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-3">
                <strong>Why it's needed:</strong> This installs the actual Docker components: <code>docker-ce</code> (Community Edition engine), <code>docker-ce-cli</code> (the command-line tool), <code>containerd.io</code> (the container runtime), and essential plugins for building images (<code>buildx</code>) and managing multi-container apps (<code>compose</code>).
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
{`sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`}
              </SyntaxHighlighter>
            </div>

            {/* Step 7 */}
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Step 7: Verify Docker installation</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-3">
                <strong>Why it's needed:</strong> Running this command confirms that Docker was installed successfully and outputs the current installed version.
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
{`docker --version
# Example output: Docker version 28.x.x`}
              </SyntaxHighlighter>
            </div>

            {/* Step 8 */}
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Step 8: Check Docker service</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-3">
                <strong>Why it's needed:</strong> Docker runs as a background service (daemon). This step ensures the service is active and running. If it's not running, you won't be able to run containers.
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
{`sudo systemctl status docker

# If it's not running:
sudo systemctl start docker
sudo systemctl enable docker`}
              </SyntaxHighlighter>
            </div>

            {/* Step 9 */}
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Step 9: Run Docker without sudo (Recommended)</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-3">
                <strong>Why it's needed:</strong> By default, interacting with the Docker daemon requires root privileges, so you have to prefix every command with <code>sudo</code>. Adding your user to the <code>docker</code> group allows you to run Docker commands as a regular user, improving convenience and workflow.
              </p>
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm">
{`# Add your user to the Docker group:
sudo usermod -aG docker $USER

# Apply the new group membership:
newgrp docker

# Or simply log out and log back in.`}
              </SyntaxHighlighter>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default InstallLinux;
