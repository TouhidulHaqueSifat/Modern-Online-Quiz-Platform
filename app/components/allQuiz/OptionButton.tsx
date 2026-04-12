import React from 'react'
import type { OptionButtonProps } from '~/types/quiz'
import { motion } from 'motion/react';
const OptionButton = ({ label, selectedOption, onClick }: OptionButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`w-full flex items-center gap-4 px-6 py-6 rounded-[32px] text-left transition-all duration-200 ${
        selectedOption
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
          : "bg-white text-[#464555] hover:bg-gray-50"
      }`}
    >
      {/* Radio circle */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
          selectedOption ? "border-white" : "border-[#C7C4D8]"
        }`}
      >
        {selectedOption && (
          <div className="w-4 h-4 rounded-full bg-white" />
        )}
      </div>
 
      <span className="text-lg font-medium leading-7">{label}</span>
    </motion.button>
  )
}

export default OptionButton