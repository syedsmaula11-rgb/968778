import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black p-5 md:p-6 rounded-xl shadow-lg mb-4 md:mb-5"
    >
      <div className="flex items-center gap-3 mb-3">
        <Check size={32} className="text-green-400 flex-shrink-0" />
        <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm md:text-base">{desc}</p>
    </motion.div>
  );
}