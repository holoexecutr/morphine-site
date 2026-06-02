import { motion } from "motion/react";
import { Sparkles, PackageOpen } from "lucide-react";

interface PricingProps {
  onPurchase: (planName: string, price: number) => void;
}

export default function Pricing({}: PricingProps) {
  return (
    <section id="pricing-section" className="py-24 px-6 relative z-10 select-none bg-transparent">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[45vh]">
        
        {/* Main Title Section */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[2.8rem] sm:text-[3.5rem] md:text-[4rem] font-bold mb-4 tracking-tight uppercase text-white leading-none font-sans"
          >
            Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[#8e9297] text-sm md:text-base font-normal max-w-md mx-auto"
          >
            Stay tuned for our upcoming releases and platform features.
          </motion.p>
        </div>

        {/* Dynamic Coming Soon / Interactive Placeholder Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md rounded-[1.5rem] p-8 bg-[#0e0f11] border border-white/[0.03] shadow-[0_24px_60px_rgba(0,0,0,0.85)] text-center flex flex-col items-center justify-center"
        >
          <div className="w-12 h-12 rounded-xl bg-[#a59aff]/10 border border-[#a59aff]/25 flex items-center justify-center mb-6">
            <PackageOpen className="w-6 h-6 text-[#a59aff]" />
          </div>

          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#a59aff]/10 border border-[#a59aff]/20 text-[9px] font-black uppercase text-[#a59aff] tracking-widest mb-4">
            <Sparkles className="w-2.5 h-2.5" />
            Under Development
          </span>

          <h3 className="text-white text-lg font-bold tracking-normal mb-2 font-sans">
            No Products Available Yet
          </h3>
          
          <p className="text-[#8e9297] text-xs leading-relaxed font-normal">
            We are currently fine-tuning our active catalog. Please check back later or join our official community channel for direct updates.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}

