import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DockerComposeCommands = () => {
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
          Some useful Docker commands for docker-compose
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Master these 15 essential commands to manage your multi-container environments.
        </p>
      </div>

      <section className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-200 dark:border-blue-800/50">
          <p className="text-sm text-blue-900 dark:text-blue-100">
            <strong>image:</strong> about you directly want to pull or use docker image so at that time this is useful.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">1)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose up
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Start containers</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">2)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose up -d
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Start in background</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">3)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose up --build
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Build it again</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">4)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose stop
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Stop all containers</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">5)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose start
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Start stopped containers</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">6)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose restart
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Restart containers</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">7)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose down
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Stop and removes container and networks</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">8)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose down -v
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Stop and remove everything like container, network, volumes.</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">9)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose logs
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">see the logs</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">10)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose logs -f
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Follow (stream) logs in real time.</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">11)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose logs -f -t
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Follow logs in real time and include timestamps.</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">12)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose logs [container_name]
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">To see specific logs of that particular container.</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">13)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose exec [container_name] sh
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Enter inside the running container.</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">14)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose ps
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">List all the containers.</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">15)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose stop [container-name]
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Stop a single service.</div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-bold text-slate-400 w-8">16)</span>
            <div className="flex-1">
              <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg text-sm w-full m-0">
                docker compose build
              </SyntaxHighlighter>
            </div>
            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">Build the images only (does not start containers).</div>
          </div>

        </div>
      </section>

    </motion.div>
  );
};

export default DockerComposeCommands;
