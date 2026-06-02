import ParticleCanvas from "./ParticleCanvas";

interface AnimatedBackgroundProps {
  activeTab?: string;
  isCheckoutActive?: boolean;
}

export default function AnimatedBackground({ activeTab, isCheckoutActive }: AnimatedBackgroundProps) {
  const isResell = activeTab === "RESELL";

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#050505] z-0">
      {/* Radial ambient background mesh */}
      <div className="bg-mesh" />

      {/* Precision top-left light source matched exactly to the reference image */}
      <div className="glow-top-left" />
      
      <div 
        className="orb w-[35rem] h-[35rem] bg-[#1a1a1a]" 
        style={{ bottom: "-20%", right: "-10%", animationDelay: "-7s" }} 
      />

      {/* High-accuracy shadow/darkening blur overlay when checkout is active */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        isCheckoutActive ? "bg-black/40 backdrop-blur-[12px] z-20" : "bg-transparent backdrop-blur-none pointer-events-none z-0"
      }`} />

      {/* High-accuracy particle canvas drifting layer - hidden during active checkout to avoid flakes */}
      {!isCheckoutActive && <ParticleCanvas />}
    </div>
  );
}
