
import type { ReactNode } from "react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
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

interface FeatureCardProps {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  dark?: boolean;
}

function FeatureCard({ icon: Icon, iconBg, iconColor, title, description, children, className = "", dark = false }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`rounded-[48px] p-10 flex flex-col justify-between ${className} ${
        dark ? "bg-indigo-700 shadow-xl shadow-indigo-500/20" : "bg-white"
      }`}
    >
      <div>
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
          style={{ backgroundColor: iconBg }}
        >
          <Icon size={22} style={{ color: iconColor }} />
        </div>
        <h3
          className={`text-2xl font-bold mb-3 ${dark ? "text-white" : "text-gray-900"}`}
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {title}
        </h3>
        <p className={`text-base leading-relaxed ${dark ? "text-white/70" : "text-gray-500"}`}>
          {description}
        </p>
      </div>
      {children}
    </motion.div>
  );
}

{/*function SpeedVisual() {
  return (
    <div className="mt-8 rounded-[32px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 h-48 flex items-center justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-400/80 to-indigo-500/0 rounded-full"
            style={{ width: `${60 + i * 30}px`, top: `${30 + i * 18}%` }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.2 + i * 0.2, repeat: Infinity, delay: i * 0.15, ease: "linear" }}
          />
        ))}
      </div>
      <div className="relative z-10 text-center">
        <div className="text-4xl font-black text-white mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>
          0ms
        </div>
        <div className="text-xs text-indigo-300 uppercase tracking-widest font-semibold">Load Latency</div>
      </div>
    </div>
  );
}*/}

function InstantResultsExtras() {
  return (
    <div className="mt-6 space-y-3">
      {["Concept Mastery Radar", "Time-per-question audit"].map((item) => (
        <div key={item} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-sky-300/20 flex items-center justify-center flex-shrink-0">
            <Check size={11} className="text-sky-300" />
          </div>
          <span className="text-sm font-medium text-white">{item}</span>
        </div>
      ))}
    </div>
  );
}

interface LeaderboardRowProps {
  rank: string;
  name: string;
  score: string;
  highlight?: boolean;
}

function LeaderboardRow({ rank, name, score, highlight = false }: LeaderboardRowProps) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-4 rounded-full ${
        highlight ? "bg-gray-100" : "bg-gray-100/60"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${
            highlight ? "bg-teal-700" : "bg-slate-400"
          }`}
        >
          {rank}
        </div>
        <span className="font-bold text-gray-900">{name}</span>
      </div>
      <span
        className={`font-black text-base ${highlight ? "text-teal-700" : "text-gray-500"}`}
      >
        {score}
      </span>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="bg-gray-100 py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Designed for your Focus
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            We stripped away the noise to leave only what matters: your growth. Experience
            the features that make CognitiveFlow the sanctuary of learning.
          </p>
        </motion.div>
 
        {/* Bento row 1 */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          {/* Fast Quizzes – wide */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FeatureCard
              icon={Zap}
              iconBg="#E2DFFF"
              iconColor="#3525CD"
              title="Fast Quizzes"
              description="Our optimized engine delivers questions with zero latency. No loading spinners, just pure momentum for your brain."
            >
              {/* <SpeedVisual /> */}
            </FeatureCard>
          </motion.div>
 
          {/* Instant Results – narrow */}
          <motion.div
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FeatureCard
              icon={BarChart2}
              iconBg="rgba(255,255,255,0.1)"
              iconColor="#ffffff"
              title="Instant Results"
              description="Detailed breakdowns and AI-driven feedback generated the microsecond you finish."
              dark
            >
              <InstantResultsExtras />
            </FeatureCard>
          </motion.div>
        </div>
 
        {/* Bento row 2 */}
        <div className="grid grid-cols-12 gap-6">
          {/* Real-time Leaderboard */}
          <motion.div
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-[48px] p-10 h-full flex flex-col border border-purple-100/10">
              <div className="w-14 h-14 rounded-2xl bg-sky-200 flex items-center justify-center mb-8">
                <Trophy size={22} className="text-teal-700" />
              </div>
              <h3
                className="text-2xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Real-time Leaderboard
              </h3>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Compete with learners globally in live sessions. Feel the pulse of the
                community.
              </p>
              <div className="space-y-4 mt-auto">
                <LeaderboardRow rank="1" name="Alex Rivers" score="2,840 pts" highlight />
                <LeaderboardRow rank="2" name="Sarah Chen" score="2,710 pts" />
              </div>
            </div>
          </motion.div>
 
          {/* Adaptive Sanctuary */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative rounded-[48px] p-12 h-full flex flex-col justify-center overflow-hidden bg-gradient-to-br from-sky-300 to-teal-700 min-h-[380px]">
              {/* Decorative background icon */}
              <div className="absolute -right-12 -top-12 opacity-10">
                <Brain size={280} className="text-gray-900" />
              </div>
 
              <div className="relative z-10 max-w-[480px]">
                <h3
                  className="text-4xl font-extrabold text-teal-900 mb-4"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Adaptive Sanctuary
                </h3>
                <p className="text-teal-800/80 text-lg leading-relaxed mb-8">
                  The more you use CognitiveFlow, the more it learns your pace, adjusting
                  difficulty to keep you in the "Flow Zone."
                </p>
                <button className="flex items-center gap-2 bg-teal-900 text-white font-bold px-8 py-4 rounded-full hover:bg-teal-800 transition-all group">
                  Explore Adaptive Engine
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
 