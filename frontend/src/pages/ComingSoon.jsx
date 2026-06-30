import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const ComingSoon = ({ topic }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center"
    >
      <div className="bg-amber-100 dark:bg-amber-900/30 p-6 rounded-full mb-6">
        <Construction size={48} className="text-amber-600 dark:text-amber-400" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white mb-4">
        {topic} Content
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg">
        This section is currently under construction. Check back soon for comprehensive guides and tutorials!
      </p>
    </motion.div>
  );
};

export default ComingSoon;
