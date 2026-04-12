import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from 'motion/react';
interface NavigationBarProps {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onSkip: () => void;
  onNext: () => void;
}
 
export function NavigationBar({
  currentIndex,
  total,
  onPrev,
  onSkip,
  onNext,
}: NavigationBarProps){
  const isFirst: boolean = currentIndex === 0;
  const isLast: boolean = currentIndex === total - 1;
 
  return (
    <div className="flex items-center justify-between py-4 flex-wrap gap-4">
      {/* Previous */}
      <motion.button
        onClick={onPrev}
        disabled={isFirst}
        whileHover={!isFirst ? { scale: 1.02 } : {}}
        whileTap={!isFirst ? { scale: 0.97 } : {}}
        className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all ${
          isFirst
            ? "bg-[#E1E2E4] text-gray-400 cursor-not-allowed opacity-50"
            : "bg-[#E1E2E4] text-[#191C1E] hover:bg-gray-200"
        }`}
      >
        <ArrowLeft size={16} /> Previous
      </motion.button>
 
      {/* Skip + Next */}
      <div className="flex items-center gap-4">
        <button
          onClick={onSkip}
          className="px-6 py-4 font-bold text-teal-700 hover:text-teal-600 transition-colors"
        >
          Skip Question
        </button>
 
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-base"
          style={{
            background: "linear-gradient(135deg, #3525CD 0%, #4F46E5 100%)",
            boxShadow: "0 10px 15px -3px rgba(99,102,241,0.2)",
          }}
        >
          {isLast ? "Finish" : "Next Question"}
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </div>
  );
}