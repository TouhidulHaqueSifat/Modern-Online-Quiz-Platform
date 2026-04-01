import { motion } from "motion/react";
import { Share2, MessageSquare, Brain } from "lucide-react";

/* ── data ── */
const productLinks = ["Features", "Adaptive Engine", "Pricing", "Mobile App"];
const resourceLinks = ["Documentation", "API Status", "Community", "Support"];
const bottomLinks = ["Privacy Policy", "Terms of Service", "Cookie Settings"];


interface FooterLinkGroupProps {
  heading: string;
  links: string[];
}
/* ── sub-components ── */
function FooterLinkGroup({ heading, links }: FooterLinkGroupProps) {
  return (
    <div className="flex flex-col gap-6">
      <h4
        className="text-base font-bold text-gray-900"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {heading}
      </h4>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-base text-[#464555] hover:text-indigo-600 transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


interface SocialButtonProps {
  icon: React.ComponentType<{ size: number; className?: string }>;
  label: string;
}
function SocialButton({ icon: Icon, label }: SocialButtonProps) {
  return (
    <motion.a
      href="#"
      aria-label={label}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-full bg-[#E1E2E4] hover:bg-indigo-100 flex items-center justify-center transition-colors duration-200"
    >
      <Icon size={16} className="text-[#191C1E]" />
    </motion.a>
  );
}

/* ── main footer ── */
export default function Footer() {
  return (
    <footer className="w-full bg-[#EDEEF0]">
      {/* Top section */}
      <div className="max-w-[1280px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column — spans 2 cols on lg */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 sm:col-span-2 lg:col-span-2 pb-3"
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                <Brain size={15} className="text-white" />
              </div>
              <span
                className="text-2xl font-semibold text-indigo-700 leading-8"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                CognitiveFlow
              </span>
            </div>

            {/* Description */}
            <p
              className="text-base text-[#464555] leading-relaxed max-w-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Redefining digital learning through editorial-grade interfaces and adaptive
              cognitive science.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              <SocialButton icon={Share2} label="Share" />
              <SocialButton icon={MessageSquare} label="Chat" />
            </div>
          </motion.div>

          {/* Product links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FooterLinkGroup heading="Product" links={productLinks} />
          </motion.div>

          {/* Resources links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FooterLinkGroup heading="Resources" links={resourceLinks} />
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1280px] flex items-center justify-center mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-[rgba(199,196,216,0.2)] py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p
            className="text-sm text-[#464555] text-center sm:text-left"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            © 2026 CognitiveFlow Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-8">
            {bottomLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-[#464555] hover:text-indigo-600 transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}