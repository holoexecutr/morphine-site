import { motion } from "motion/react";
import { Download, Calendar, Users } from "lucide-react";

interface HeroProps {
  onScrollToPlans: () => void;
  onDownload: () => void;
  downloading: boolean;
  discordCount?: number;
}

export default function Hero({
  onScrollToPlans,
  onDownload,
  downloading,
  discordCount,
}: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 px-4 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Giant display title with custom silver-to-grey gradient text clipping */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hacker-text text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black leading-none mb-2"
        >
          MORPHINE
        </motion.h1>

        {/* Dynamic description subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-neutral-500 text-sm sm:text-base md:text-xl mb-12 font-medium leading-relaxed tracking-wide"
        >
          Download & Get Project Morphine today.
        </motion.p>

        {/* Play plans and download actions group */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          {/* Download trigger with dynamic inline spinner */}
          <button
            onClick={onDownload}
            disabled={downloading}
            className="w-full sm:w-auto min-w-[200px] bg-white hover:bg-[#a59aff] text-black font-black px-12 py-4 rounded-2xl text-[0.75rem] uppercase tracking-[0.2em] transition-all transform hover:scale-[1.02] hover:shadow-[0_12px_36px_rgba(165,154,255,0.3)] leading-none cursor-pointer flex items-center justify-center gap-2"
          >
            {downloading ? (
              <>
                <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                <span>Downloading...</span>
              </>
            ) : (
              <span>Download Now</span>
            )}
          </button>

          {/* View Plans scroll anchor link */}
          <button
            onClick={onScrollToPlans}
            className="w-full sm:w-auto min-w-[200px] flex items-center justify-center px-12 py-4 rounded-2xl text-[0.75rem] border border-white/10 hover:bg-white/5 uppercase tracking-[0.2em] transition-all leading-none focus:outline-none focus:ring-1 focus:ring-white/20 cursor-pointer"
          >
            View Plans
          </button>
        </motion.div>

        {/* Glowing Discord Member Count Indicator Badge */}
        <motion.a
          href="https://discord.gg/hfTd6MW5ry"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-14 inline-flex items-center gap-2.5 bg-white/[0.02] border border-white/[0.05] hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 hover:shadow-[0_0_20px_rgba(88,101,242,0.15)] transition-all duration-300 px-4.5 py-2 lg:px-5 rounded-full cursor-pointer group select-none"
        >
          {/* Discord Brand Icon */}
          <svg
            className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#5865F2] transition-colors duration-300"
            viewBox="0 0 127.14 96.36"
            fill="currentColor"
          >
            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a.41.41,0,0,0-.43.2,72.48,72.48,0,0,0-3.17,6.52,97.26,97.26,0,0,0-29,0,72.84,72.84,0,0,0-3.19-6.52.4.4,0,0,0-.43-.2A105.09,105.09,0,0,0,19.44,8.07a.44.44,0,0,0-.2.07C2.12,34,1.15,59.39,3.46,84.41a.48.48,0,0,0,.19.34A105.77,105.77,0,0,0,35.77,96.36a.42.42,0,0,0,.46-.22,74.22,74.22,0,0,0,6.42-10.38.4.4,0,0,0-.22-.56,68.7,68.7,0,0,1-10-4.76.41.41,0,0,1,0-.69c.83-.62,1.67-1.28,2.46-1.95a.39.39,0,0,1,.41-.05,73.4,73.4,0,0,0,57.48,0,.39.39,0,0,1,.41.05c.79.67,1.63,1.33,2.46,1.95a.41.41,0,0,1,0,.69,68.61,68.61,0,0,1-10,4.76.41.41,0,0,0-.22.56,74.8,74.8,0,0,0,6.43,10.38.42.42,0,0,0,.46.22,105.48,105.48,0,0,0,32.11-11.61.45.45,0,0,0,.19-.34c2.72-28.53-4.67-53.59-20-76.27A.39.39,0,0,0,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.07,65.69,84.69,65.69Z" />
          </svg>
          
          <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#8e9297] group-hover:text-white transition-colors duration-300">
            <span className="text-white font-extrabold group-hover:text-[#5865F2] transition-colors duration-300">
              {discordCount !== undefined ? discordCount : "3"}
            </span>{" "}
            {discordCount !== undefined ? "ONLINE NOW" : "ONLINE MEMBERS"}
          </span>
        </motion.a>
        
      </div>
    </section>
  );
}
