import { motion } from 'framer-motion';
import { cn } from './utils';
import { ArrowRight } from 'lucide-react';

export const AlgorithmCard = ({ 
  title, 
  description, 
  icon: Icon, 
  onClick,
  testId 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      data-testid={testId}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border",
        "bg-card p-6 transition-all cursor-pointer",
        "hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
        {Icon && <Icon className="w-6 h-6" />}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 font-heading">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      <div className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 font-medium">
        <span>Ver detalles</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};