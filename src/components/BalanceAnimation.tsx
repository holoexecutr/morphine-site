import { useEffect, useState, CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";

interface BalanceAnimationProps {
  initialBalance: number;
  addedAmount: number;
  onAnimationComplete: (newBalance: number) => void;
}

export default function BalanceAnimation({
  initialBalance,
  addedAmount,
  onAnimationComplete,
}: BalanceAnimationProps) {
  const [phase, setPhase] = useState<"fly" | "center-static" | "merge" | "finished">("fly");
  const [flyStyle, setFlyStyle] = useState<CSSProperties>({});

  const oldBalanceStr = `$${initialBalance.toFixed(1)} USD`;
  const newBalanceStr = `$${(initialBalance + addedAmount).toFixed(1)} USD`;

  useEffect(() => {
    // 1. Measure the source position of the top-right profile balance
    const balanceEl = document.querySelector(".user-balance");
    const targetX = window.innerWidth / 2;
    const targetY = window.innerHeight / 2;

    let startX = window.innerWidth - 120;
    let startY = 40;

    if (balanceEl) {
      const rect = balanceEl.getBoundingClientRect();
      startX = rect.left + rect.width / 2;
      startY = rect.top + rect.height / 2;
    }

    // Set initial custom location
    setFlyStyle({
      position: "fixed",
      left: `${startX}px`,
      top: `${startY}px`,
      transform: "translate(-50%, -50%)",
      fontSize: "12px",
      color: "#a59aff",
      fontWeight: 900,
      zIndex: 9999,
      pointerEvents: "none",
    });

    // 2. Trigger fly cinematic path
    const flyTimer = setTimeout(() => {
      setFlyStyle({
        position: "fixed",
        left: `${targetX}px`,
        top: `${targetY}px`,
        transform: "translate(-50%, -50%)",
        fontSize: "52px",
        color: "#ffffff",
        fontWeight: 900,
        zIndex: 9999,
        pointerEvents: "none",
        transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      });
    }, 50);

    // 3. Arrive at center, trigger center display swap
    const centerTimer = setTimeout(() => {
      setPhase("center-static");
    }, 700);

    // 4. Trigger green drop + merge
    const mergeTimer = setTimeout(() => {
      setPhase("merge");
    }, 1400);

    // 5. Done, complete layout update and callback
    const doneTimer = setTimeout(() => {
      setPhase("finished");
      onAnimationComplete(initialBalance + addedAmount);
    }, 3100);

    return () => {
      clearTimeout(flyTimer);
      clearTimeout(centerTimer);
      clearTimeout(mergeTimer);
      clearTimeout(doneTimer);
    };
  }, [initialBalance, addedAmount, onAnimationComplete]);

  return (
    <AnimatePresence>
      {phase !== "finished" && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center pointer-events-none select-none">
          {/* 1. Backdrop overlay dimmmer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0 bg-black backdrop-blur-[6px]"
          />

          {/* 2. Flyer path stage */}
          {phase === "fly" && (
            <div style={flyStyle} className="font-sans tracking-tight">
              {oldBalanceStr}
            </div>
          )}

          {/* 3. Central big merge display */}
          {(phase === "center-static" || phase === "merge") && (
            <div className="relative flex flex-col items-center">
              
              {/* Floating green added value drop indicator */}
              <AnimatePresence>
                {phase === "center-static" ? (
                  <motion.div
                    initial={{ opacity: 0, y: -15, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 40, scale: 1.25, filter: "blur(6px)" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="text-2xl font-black text-emerald-400 absolute -top-10 font-sans"
                  >
                    +${addedAmount.toFixed(1)}
                  </motion.div>
                ) : (
                  /* Merged glow indicator feedback */
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full w-40 h-40 -translate-x-12 -translate-y-8"
                  />
                )}
              </AnimatePresence>

              {/* Big central balance value */}
              <motion.div
                initial={{ scale: 1 }}
                animate={
                  phase === "merge"
                    ? {
                        scale: [1, 1.15, 1],
                        textShadow: [
                          "0 0 0px rgba(34,197,94,0)",
                          "0 0 50px rgba(34,197,94,0.8)",
                          "0 0 20px rgba(34,197,94,0.3)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 0.8 }}
                className={`text-5xl md:text-6xl font-black tracking-tight ${
                  phase === "merge" ? "text-emerald-400" : "text-white"
                } transition-colors duration-300 font-sans`}
              >
                {phase === "merge" ? newBalanceStr : oldBalanceStr}
              </motion.div>
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
