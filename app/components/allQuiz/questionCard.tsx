import { AnimatePresence, motion } from 'motion/react';
import React from 'react'
import type { QuestionCardProps} from '~/types/quiz'
import OptionButton from './OptionButton';

const QuestionCard = ({ question, selectedOption, onSelect }: QuestionCardProps) => {
  return (
   
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="bg-white rounded-[48px] p-10 flex flex-col gap-8"
        style={{ boxShadow: "0 20px 40px rgba(79,70,229,0.08)" }}
      >
        {/* Tag + Question text */}
        <div className="flex flex-col gap-4">
          <span className="inline-flex self-start px-4 py-1 bg-[#E2DFFF] text-[#0F0069] text-xs font-bold rounded-full">
            {question.tag}
          </span>
          <p className="text-xl font-normal text-[#191C1E] leading-8">
            {question.text}
          </p>
        </div>
 
        {/* Options */}
        <div className="flex flex-col gap-4">
          {question.options.map((option: string, index: number) => (
            <OptionButton
              key={index}
              label={option}
              selectedOption={selectedOption === index}
              onClick={() => onSelect(question.id, index)}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
  


export default QuestionCard