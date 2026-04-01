import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";

export default function CTASection() {
  return (
    <section className="py-24 px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto rounded-[32px] overflow-hidden relative"
        style={{
          background: "linear-gradient(110.56deg, #3525CD 0%, #4F46E5 100%)",
          boxShadow: "0 25px 50px -12px rgba(99,102,241,0.4)",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
 
        <div className="relative z-10 flex flex-col items-center text-center py-20 px-16 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-5xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-2.4px" }}
          >
            Ready to find your flow?
          </motion.h2>
 
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-violet-200 text-xl max-w-xl leading-relaxed opacity-90"
          >
            Join the thousands of professionals and students who have upgraded their
            learning experience with CognitiveFlow.
          </motion.p>
 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-white text-indigo-700 font-bold text-lg px-12 py-5 rounded-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5">
              Get Started for Free
            </button>
            <button className="border-2 border-violet-200 text-violet-200 font-bold text-lg px-12 py-5 rounded-full hover:bg-white/10 transition-all duration-300">
              Enterprise Access
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}