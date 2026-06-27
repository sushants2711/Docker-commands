import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Server, Database, Cloud, PlayCircle, Globe, Map, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (!isDeleting && displayText !== text) {
      // Typing
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 150);
    } else if (!isDeleting && displayText === text) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText !== '') {
      // Deleting
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText === '') {
      // Pause before typing again
      timer = setTimeout(() => setIsDeleting(false), 500);
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text]);

  return (
    <span className="font-mono tracking-tight text-emerald-400">
      {displayText}
      <span className="animate-pulse border-r-4 border-emerald-500 ml-1"></span>
    </span>
  );
};

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl space-y-12 pb-16"
    >
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-black via-slate-900 to-black rounded-[2.5rem] p-8 md:p-14 border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-9xl">👨‍💻</div>
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute right-10 bottom-10 w-48 h-48 bg-emerald-700/10 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="relative w-64 h-64 shrink-0 rounded-full border-4 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.4)] overflow-hidden z-10"
        >
          <img
            src="/sushant-avatar.png"
            alt="Sushant Kumar Singh - Hacker Avatar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="space-y-6 z-10 text-center md:text-left flex-1">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-4">
              <Sparkles size={14} /> Creator & Developer
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-2 min-h-[4rem]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                <TypewriterText text="Sushant Kumar Singh" />
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-300">
              Backend & Full Stack Developer
            </h2>
          </div>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            I'm a working professional with a massive dream: <strong>to help people</strong>. I created this guide so you don't have to waste the countless hours I spent figuring it out. I'm always learning, having fun, and enhancing my coding skills every single day.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block mt-4">
            <Link to="/docker" className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold font-mono shadow-lg shadow-emerald-500/30 transition-all">
              {">"} Start Learning Docker <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Education & Journey */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <Globe className="text-blue-500" /> My Journey
          </h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
            {[
              { title: "DAV Public School", subtitle: "10 + 2 (High School)", color: "bg-blue-500" },
              { title: "Chandigarh University", subtitle: "Higher Education", color: "bg-purple-500" },
              { title: "Trillium Flow Technologies", subtitle: "Software Developer", color: "bg-emerald-500" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 border-white ${item.color} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow`}></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h3 className="font-bold text-slate-800 dark:text-slate-200">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Current Skills */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <Code2 className="text-indigo-500" /> Current Arsenal
          </h2>
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
            {['HTML', 'CSS', 'Django', 'JavaScript', 'MERN Stack', 'Git', 'GitHub', 'CI/CD (GitHub Actions)', 'Prisma', 'Docker', 'AWS (EC2)'].map((skill, index) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-indigo-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors shadow-sm">
                  <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">{skill}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* Future Goals */}
      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Map className="text-yellow-400" /> Future Goals & Ambitions
          </h2>

          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent mt-8">
            {[
              'Next.js',
              'Advanced Django',
              'Node.js (Full Concepts under the hood)',
              'System Design Architecture',
              'Advanced AWS & Cloud Native',
              'Redis', 'PostgreSQL', 'Spring Boot',
              'Testing', 'Kubernetes',
              'Intermediate/Advanced Algorithms',
              'Create multiple full-scale websites',
              'Launch a YouTube channel to teach others',
              'Travel the world as a digital nomad',
              'Build a community of passionate developers'
            ].map((goal, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-slate-900 bg-yellow-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-slate-800/80 p-4 rounded-xl border border-slate-700 hover:border-yellow-400/50 transition-colors shadow-lg backdrop-blur-sm">
                  <h3 className="font-bold text-slate-200 text-sm">{goal}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Portfolio;
