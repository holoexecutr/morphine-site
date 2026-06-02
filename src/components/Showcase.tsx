import { motion } from "motion/react";
import { Sparkles, Users, Tv } from "lucide-react";

export default function Showcase() {
  const cards = [
    {
      title: "UI & Features",
      description:
        "Project Morphine features a straightforward, user-friendly interface designed to help users quickly find what they need without getting lost. It also includes a wide range of features, ensuring that everyone can enjoy it regardless of their preferred game genre.",
      icon: Sparkles,
      delay: 0.1,
    },
    {
      title: "Community Driven",
      description:
        "Project Morphine is developed based on feedback from the community as well as my own ideas. I also do my best to implement requested features and fix reported bugs, maintaining a secure core for everyone to enjoy.",
      icon: Users,
      delay: 0.25,
    },
  ];

  const videos = [
    {
      id: "FL1t5zneRps",
      title: "Morphine Update 1",
    },
    {
      id: "NUO5s9c8tq4",
      title: "Morphine Update 2",
    },
    {
      id: "Wy7VzO6VXzk",
      title: "Morphine Update 3",
    },
  ];

  return (
    <section className="py-24 px-6 relative z-10 select-none">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Intro text/grid row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: card.delay, ease: "easeOut" }}
                className="group rounded-[2rem] bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.04] hover:border-white/[0.08] p-8 md:p-12 transition-all duration-300 shadow-[0_10px_32px_rgba(0,0,0,0.4)]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-[#a59aff]" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-white">
                  {card.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Video Showcase Row inside absolute visual container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="rounded-[3rem] bg-white/[0.01] border border-white/[0.04] p-8 md:p-10 shadow-[0_12px_44px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-8">
            <Tv className="w-5 h-5 text-[#a59aff] animate-pulse" />
            <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              Demonstration Showcase
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((vid, idx) => (
              <div
                key={vid.id}
                className="overflow-hidden rounded-2xl bg-black border border-white/10 aspect-video relative group select-none shadow-md hover:shadow-[0_12px_24px_rgba(165,154,255,0.15)] hover:scale-[1.01] transition-all duration-300"
              >
                <iframe
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                  src={`https://www.youtube.com/embed/${vid.id}`}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
