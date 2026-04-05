import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Brain,
  Cpu,
  FlaskConical,
  Globe,
  FileQuestion,
  BarChart2,
  ArrowRight,
  Plus,
} from "lucide-react";
 
// ─────────────────────────────────────────────
// 1. QUIZ DATA
// All quiz content lives here — easy to edit!
// ─────────────────────────────────────────────
const ALL_QUIZZES = [
  {
    id: 1,
    category: "Cognitive",
    icon: Brain,
    iconColor: "#3525CD",
    title: "Fundamentals of AI Ethics",
    description:
      "Explore the philosophical and practical implications of machine learning systems in modern society.",
    questions: 24,
    difficulty: "Intermediate",
    difficultyColor: "#00687A", // teal
  },
  {
    id: 2,
    category: "Technical",
    icon: Cpu,
    iconColor: "#00687A",
    title: "Neural Network Architectures",
    description:
      "Deep dive into CNNs, RNNs, and Transformers. Mathematical foundations and practical application.",
    questions: 40,
    difficulty: "Advanced",
    difficultyColor: "#7E3000", // brown/orange
  },
  {
    id: 3,
    category: "Cognitive",
    icon: FlaskConical,
    iconColor: "#3525CD",
    title: "Cognitive Psychology 101",
    description:
      "Understanding human perception, attention, memory, and high-level mental processes.",
    questions: 15,
    difficulty: "Beginner",
    difficultyColor: "#00687A",
  },
  {
    id: 4,
    category: "Technical",
    icon: Globe,
    iconColor: "#00687A",
    title: "Natural Language Processing",
    description:
      "Introduction to tokenization, embeddings, and modern semantic analysis techniques.",
    questions: 32,
    difficulty: "Intermediate",
    difficultyColor: "#00687A",
  },
];
 
// Filter tabs shown at the top-right
const FILTER_TABS = ["All", "Cognitive", "Technical"];
 
// ─────────────────────────────────────────────
// 2. QUIZ CARD COMPONENT
// Renders a single quiz with icon, title, stats, and button
// ─────────────────────────────────────────────

export interface QuizCardProps {
  quiz: {
    id: number; 
    category: string;
    icon: React.ComponentType<{ size: number; color: string }>;
    iconColor: string;
    title: string;
    description: string;
    questions: number;
    difficulty: string;
    difficultyColor: string;
  };
}
export default function QuizCard({ quiz }: QuizCardProps) {
  const Icon = quiz.icon;
 
  return (
    <motion.div
      // Animate in when it appears
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      // Subtle lift on hover
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-[32px] p-8 flex flex-col gap-0 relative"
    >
      {/* ── Icon Badge ── */}
      <div className="w-14 h-14 rounded-2xl bg-[#F3F4F6] flex items-center justify-center mb-8">
        <Icon size={22} color={quiz.iconColor} />
      </div>
 
      {/* ── Title ── */}
      <h3
        className="text-xl font-bold text-[#191C1E] leading-7 mb-3"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {quiz.title}
      </h3>
 
      {/* ── Description ── */}
      <p className="text-sm text-[#777587] leading-[23px] mb-6 flex-1">
        {quiz.description}
      </p>
 
      {/* ── Stats Row: Questions + Difficulty ── */}
      <div className="flex items-center gap-6 mb-6">
        {/* Questions count */}
        <div className="flex items-center gap-2 text-[#464555]">
          <FileQuestion size={13} />
          <span className="text-xs font-semibold leading-4">
            {quiz.questions} Questions
          </span>
        </div>
 
        {/* Difficulty badge */}
        <div className="flex items-center gap-2">
          <BarChart2 size={11} color={quiz.difficultyColor} />
          <span
            className="text-xs font-semibold leading-4"
            style={{ color: quiz.difficultyColor }}
          >
            {quiz.difficulty}
          </span>
        </div>
      </div>
 
      {/* ── Start Quiz Button ── */}
      <button className="w-full h-14 rounded-full bg-[#E1E2E4] hover:bg-[#d0d1d3] transition-colors flex items-center justify-center gap-2 font-bold text-base text-[#191C1E]">
        Start Quiz
        <ArrowRight size={15} />
      </button>
    </motion.div>
  );
}