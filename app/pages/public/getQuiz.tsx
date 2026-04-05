import React, { useState } from 'react'
import QuizCard from '~/components/allQuiz/quizCard'

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
import FilterTabs from '~/components/allQuiz/filterTab';
 
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
const GetQuiz = () => {
  // Track which filter tab is active
  const [activeFilter, setActiveFilter] = useState("All");
 
  // Filter quizzes based on active tab
  const filteredQuizzes =
    activeFilter === "All"
      ? ALL_QUIZZES
      : ALL_QUIZZES.filter((quiz) => quiz.category === activeFilter);
 
  return (
    <div className="w-full min-h-screen bg-[#F3F4F6]">
      <div className="max-w-[1280px] mx-auto py-10 px-6">
 
        {/* ── Section Header ── */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          {/* Title */}
          <h2
            className="text-2xl font-bold text-[#191C1E]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Available Quizzes
          </h2>
 
          {/* Filter tabs */}
          <FilterTabs active={activeFilter} onChange={setActiveFilter} />
        </div>
 
        {/* ── Quiz Grid ── */}
        {/*
          Grid layout:
          - Mobile:  1 column
          - Tablet:  2 columns
          - Desktop: 3 columns
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
 
          {/* Render filtered quiz cards */}
          <AnimatePresence mode="popLayout">
            {filteredQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </AnimatePresence>
 
          {/* Request Topic card — always shown last */}
          {/*<RequestTopicCard />*/}
        </div>
 
        {/* Empty state — shown only when filter returns 0 quizzes */}
        {filteredQuizzes.length === 0 && (
          <div className="text-center py-20 text-[#777587]">
            <p className="text-base">No quizzes found for this category.</p>
          </div>
        )}
 
      </div>
    </div>
  );
};
 
export default GetQuiz;

