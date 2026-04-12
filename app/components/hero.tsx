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
import MockQuizCard from "./mockQuizCard";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Background grid */}


      <div className="max-w-7xl mx-auto px-8 pt-20 w-full">
        <div className="flex items-center justify-between gap-16">
          {/* Left */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#ACEDFF] border border-sky-300/20 rounded-full px-4 py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
              <span className="text-black text-xs font-bold uppercase tracking-[1.2px]">
                Evolutionary Learning
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-6xl xl:text-7xl font-extrabold leading-none tracking-[-3.6px] text-black"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Mastery without
              <br />
              <span className="text-indigo-400">the friction.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              A premium digital proctor designed for deep focus. Experience an
              editorial-grade testing environment that adapts to your cognitive flow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <Link to="/get-quiz" className="relative group flex items-center justify-center gap-2
              bg-gradient-to-r from-[#3525CD] to-indigo-500 text-white font-bold

              text-sm sm:text-base md:text-lg
              px-5 py-3 sm:px-6 sm:py-3 md:px-10 md:py-5

              rounded-full shadow-lg sm:shadow-xl
              shadow-indigo-500/30 hover:shadow-indigo-500/50

              transition-all duration-300 hover:-translate-y-0.5">
                Start Free Quiz
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-3 text-black font-bold text-sm sm:text-base md:text-lg
              px-5 py-3 sm:px-6 sm:py-3 md:px-10 md:py-5 rounded-full bg-[#E1E2E4] hover:bg-white/15 border border-white/10 transition-all">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <Play size={12} className="text-black ml-0.5" fill="white" />
                </div>
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* Right – Mock Card */}
          <div className="hidden lg:flex flex-shrink-0 items-center justify-center pb-10">
            <MockQuizCard />
          </div>
        </div>
      </div>
    </section>
  );
}