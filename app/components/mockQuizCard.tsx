import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  Zap,
  BarChart2,
  Trophy,
  Brain,
  Check,
  ArrowRight,
  Play,
  Star,
  Users,
  Activity,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

export default function MockQuizCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, rotate: 0 }}
      animate={{ opacity: 1, x: 0, rotate: 2 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="relative"
    >
      {/* Blur blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-violet-400/20 blur-3xl pointer-events-none" />
 
      {/* Main card */}
      <div className="relative bg-white border border-white/10 rounded-[48px] p-4 shadow-2xl w-[520px] max-w-full">
        {/* Interface mockup */}
        <div className="bg-gray-900 rounded-[32px] overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4 bg-white/5 rounded-full h-6 flex items-center px-3">
              <span className="text-white/30 text-xs">cognitiveflow.app/quiz</span>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-white/5 rounded-2xl p-4">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold">
                Question 4 of 10
              </p>
              <p className="text-white text-sm leading-relaxed">
                Which psychological principle explains why spaced repetition improves
                long-term memory retention?
              </p>
            </div>
            {["Encoding Specificity", "The Spacing Effect", "Chunking Theory", "Priming"].map(
              (opt, i) => (
                <motion.div
                  key={opt}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer border transition-all ${
                    i === 1
                      ? "bg-indigo-600/30 border-indigo-500/50 text-white"
                      : "bg-white/3 border-white/5 text-white/50 hover:border-white/20"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${
                      i === 1
                        ? "bg-indigo-500 border-indigo-400 text-white"
                        : "border-white/10 text-white/30"
                    }`}
                  >
                    {["A", "B", "C", "D"][i]}
                  </span>
                  <span className="text-sm">{opt}</span>
                </motion.div>
              )
            )}
          </div>
        </div>
 
        {/* Score badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
          className="absolute -bottom-6 -left-8 bg-white rounded-[32px] shadow-xl px-6 py-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
              <Check size={14} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Instant Result
              </p>
              <p className="text-2xl font-bold text-indigo-700" style={{ fontFamily: "Manrope, sans-serif" }}>
                Score: 98%
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}