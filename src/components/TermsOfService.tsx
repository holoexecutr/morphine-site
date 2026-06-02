import { motion } from "motion/react";

export default function TermsOfService() {
  const sections = [
    {
      num: "01",
      title: "Liability & Bans",
      content: (
        <div className="space-y-3 text-neutral-400 font-medium leading-relaxed text-xs md:text-sm">
          <p>
            By downloading or purchasing Morphine, you acknowledge that you are using this software entirely at your own risk.
          </p>
          <p>
            I am NOT responsible for any administrative actions taken against your game account, such as: suspensions, bans, or account deletions.
          </p>
        </div>
      ),
    },
    {
      num: "02",
      title: "Privacy & Telemetry",
      content: (
        <div className="space-y-4 text-neutral-400 font-medium leading-relaxed text-xs md:text-sm">
          <p>
            Project Morphine is designed with user privacy in mind. We explicitly state the following:
          </p>
          <div className="space-y-2 mt-2">
            <p>
              <strong className="text-white font-bold">Telemetry:</strong> I do not collect usage, screenshots or any stuff like that.
            </p>
            <p>
              <strong className="text-white font-bold">Hardware ID:</strong> Only for the purpose of license verification (binding your key to your PC).
            </p>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "Refund Policy",
      content: (
        <div className="space-y-3 text-neutral-400 font-medium leading-relaxed text-xs md:text-sm">
          <p>
            Due to the nature of digital licenses, refunds are not guaranteed.
          </p>
          <p>
            Refund requests are handled manually by me. Attempting to buy a license and then refund it is prohibited.
          </p>
        </div>
      ),
    },
    {
      num: "04",
      title: "Prohibited Actions",
      content: (
        <div className="space-y-3 text-neutral-400 font-medium leading-relaxed text-xs md:text-sm">
          <p>
            You may not crack, decompile or bypass Morphine. Doing so will result in a termination of your access to Morphine.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 relative z-10 select-none bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Title and Subtitle Block */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] font-bold mb-4 tracking-tight text-white leading-none font-sans"
          >
            Terms of Service
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#8e9297] text-xs sm:text-sm font-medium"
          >
            Please read these terms carefully before using Morphine.
          </motion.p>
        </div>

        {/* Inner Card Block matching screenshot style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="rounded-[1.75rem] p-8 md:p-12 bg-[#0a0a0c] border border-white/[0.03] shadow-[0_32px_80px_rgba(0,0,0,0.9)] max-w-2xl mx-auto w-full divide-y divide-white/[0.04]"
        >
          {sections.map((section, idx) => (
            <div
              key={section.num}
              className={`py-8 select-text ${idx === 0 ? "pt-0" : ""} ${
                idx === sections.length - 1 ? "pb-0" : ""
              }`}
            >
              <div className="flex items-center gap-2.5 mb-4 group">
                <span className="text-sm font-black text-[#a59aff] tracking-tight">
                  {section.num}.
                </span>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {section.title}
                </h3>
              </div>
              <div className="pl-6 md:pl-7">
                {section.content}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Last updated footer stamp */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-neutral-500 font-bold tracking-widest text-[10px] uppercase text-center mt-12"
        >
          Last updated: April 6, 2026
        </motion.p>
      </div>
    </section>
  );
}
