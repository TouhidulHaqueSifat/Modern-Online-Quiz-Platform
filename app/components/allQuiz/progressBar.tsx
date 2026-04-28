import React from 'react'
import type { Quiz } from '~/types/quiz';
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Brain,
} from "lucide-react";
import formatTime from '~/utils/formetTime';

interface ProgressHeaderProps {
    quiz: Quiz;
    currentIndex: number;
    timeLeft: number;
}

const ProgressBar = ({ quiz, currentIndex, timeLeft }: ProgressHeaderProps) => {
    const total: number = quiz.questions.length;
    const progressPercent: number = (currentIndex / total) * 100;
    const isUrgent: boolean = timeLeft < quiz.questions.length * 30; // under 5 minutes
    return (
    <div className="flex flex-col gap-6 w-full">
      {/* Title row */}
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-[1.2px] text-teal-600">
            {quiz.category}
          </span>
          <h1
            className="text-2xl sm:text-3xl font-bold text-[#191C1E] tracking-[-0.75px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {quiz.title}
          </h1>
        </div>
 
        {/* Timer pill */}
        <div
          className={`flex items-center gap-3 px-6 py-3 bg-white rounded-full transition-colors ${
            isUrgent ? "text-red-500" : "text-[#191C1E]"
          }`}
          style={{ boxShadow: "0 20px 40px rgba(79,70,229,0.08)" }}
        >
          <Clock
            size={20}
            className={isUrgent ? "text-red-500" : "text-indigo-600"}
          />
          <span className="text-xl font-bold font-mono tracking-wide">
            {formatTime(timeLeft)}
            
          </span>
        </div>
      </div>
 
      {/* Progress bar */}
      <div className="relative w-full h-3 bg-sky-200 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-teal-700 rounded-full"
          style={{ boxShadow: "0 0 12px rgba(0,104,122,0.4)" }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
 
      {/* Labels */}
      <div className="flex justify-between text-sm text-[#777587] font-medium -mt-2">
        <span>
          Question {currentIndex + 1} of {total}
        </span>
        <span>{Math.round(progressPercent)}% Completed</span>
      </div>
    </div>
  );
}


export default ProgressBar