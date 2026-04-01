import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}
function StatItem({ value, label, delay }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-2"
    >
      <span
        className="text-5xl font-extrabold text-indigo-600"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {value}
      </span>
      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
        {label}
      </span>
    </motion.div>
  );
}
 
export default function StatsSection() {
  return (
    <section className="py-24 px-8 border-t border-gray-200/10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <StatItem value="500k+" label="Active Learners" delay={0} />
          <StatItem value="12M" label="Quizzes Taken" delay={0.1} />
          <StatItem value="99.9%" label="Uptime Focus" delay={0.2} />
          <StatItem value="4.9/5" label="User Rating" delay={0.3} />
        </div>
      </div>
    </section>
  );
}