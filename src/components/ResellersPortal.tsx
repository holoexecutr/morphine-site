import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LogIn, Users, CheckCircle, Clock, Trash2, Plus, ArrowLeft, ShieldAlert } from "lucide-react";
import { Reseller } from "../types";

interface ResellersPortalProps {
  user: { username: string; avatarUrl: string; balance: number } | null;
  onLogin: () => void;
}

export default function ResellersPortal({ user, onLogin }: ResellersPortalProps) {
  const [activeSubTab, setActiveSubTab] = useState<"verified" | "unverified" | "deleted">("verified");
  const [resellers, setResellers] = useState<Reseller[]>([]);
  const [newResellerId, setNewResellerId] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // Load and load initial mock dataset or read from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("morphine_resellers");
    if (stored) {
      setResellers(JSON.parse(stored));
    } else {
      const initial: Reseller[] = [
        {
          id: "1",
          username: "KeyMasters_Global",
          avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
          status: "verified",
          createdAt: "2026-01-10",
          verifiedAt: "2026-01-12",
        },
        {
          id: "2",
          username: "Valkyrie_Distributions",
          avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
          status: "verified",
          createdAt: "2026-02-15",
          verifiedAt: "2026-02-17",
        },
        {
          id: "3",
          username: "RobloxMarket_EU",
          avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80",
          status: "unverified",
          createdAt: "2026-05-11",
        },
        {
          id: "4",
          username: "ShadowScriptingCo",
          avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
          status: "deleted",
          createdAt: "2025-12-01",
          deletedAt: "2026-04-03",
          cooldown: "30 Days Active",
        },
      ];
      localStorage.setItem("morphine_resellers", JSON.stringify(initial));
      setResellers(initial);
    }
  }, []);

  const saveResellers = (updated: Reseller[]) => {
    setResellers(updated);
    localStorage.setItem("morphine_resellers", JSON.stringify(updated));
  };

  const handleCreateReseller = () => {
    if (!newResellerId.trim()) return;
    setIsAdding(true);

    setTimeout(() => {
      const newReseller: Reseller[] = [
        ...resellers,
        {
          id: String(Date.now()),
          username: newResellerId.trim(),
          avatarUrl: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent(newResellerId)}`,
          status: "unverified",
          createdAt: new Date().toISOString().split("T")[0],
        },
      ];
      saveResellers(newReseller);
      setNewResellerId("");
      setIsAdding(false);
    }, 800);
  };

  const handleVerify = (id: string) => {
    const updated = resellers.map((r) => {
      if (r.id === id) {
        return {
          ...r,
          status: "verified" as const,
          verifiedAt: new Date().toISOString().split("T")[0],
        };
      }
      return r;
    });
    saveResellers(updated);
  };

  const handleDelete = (id: string) => {
    const updated = resellers.map((r) => {
      if (r.id === id) {
        return {
          ...r,
          status: "deleted" as const,
          deletedAt: new Date().toISOString().split("T")[0],
          cooldown: "90 Days Limit",
        };
      }
      return r;
    });
    saveResellers(updated);
  };

  const handleRestore = (id: string) => {
    const updated = resellers.map((r) => {
      if (r.id === id) {
        return {
          ...r,
          status: "unverified" as const,
          deletedAt: undefined,
          cooldown: undefined,
        };
      }
      return r;
    });
    saveResellers(updated);
  };

  const filteredResellers = resellers.filter((res) => res.status === activeSubTab);

  return (
    <section className="min-h-[82vh] flex items-center justify-center py-10 px-4 relative z-10 select-none">
      <div className="w-full max-w-lg">
        <AnimatePresence mode="wait">
          {!user ? (
            /* Locked Discord Login state */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-[#0e0f11] p-10 md:p-12 rounded-[2rem] text-center max-w-[480px] w-full mx-auto min-h-[300px] flex flex-col justify-center items-center shadow-[0_24px_60px_rgba(0,0,0,0.85)] relative border border-white/[0.05]"
            >
              <h2 className="text-[2.2rem] md:text-[2.5rem] font-bold mb-3 tracking-wide text-white leading-none font-sans">
                Reseller Access
              </h2>
              <p className="text-[#8e9297] text-sm font-normal mb-8 max-w-[340px] leading-relaxed">
                Log in with Discord to check your reseller status.
              </p>
              
              <button
                onClick={onLogin}
                className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4d59df] active:bg-[#434eb8] text-white transition-all cursor-pointer font-sans shadow-lg select-none"
              >
                <svg className="w-4 h-4" viewBox="0 0 127.14 96.36" fill="#ffffff">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a.41.41,0,0,0-.43.2,72.48,72.48,0,0,0-3.17,6.52,97.26,97.26,0,0,0-29,0,72.84,72.84,0,0,0-3.19-6.52.4.4,0,0,0-.43-.2A105.09,105.09,0,0,0,19.44,8.07a.44.44,0,0,0-.2.07C2.12,34,1.15,59.39,3.46,84.41a.48.48,0,0,0,.19.34A105.77,105.77,0,0,0,35.77,96.36a.42.42,0,0,0,.46-.22,74.22,74.22,0,0,0,6.42-10.38.4.4,0,0,0-.22-.56,68.7,68.7,0,0,1-10-4.76.41.41,0,0,1,0-.69c.83-.62,1.67-1.28,2.46-1.95a.39.39,0,0,1,.41-.05,73.4,73.4,0,0,0,57.48,0,.39.39,0,0,1,.41.05c.79.67,1.63,1.33,2.46,1.95a.41.41,0,0,1,0,.69,68.61,68.61,0,0,1-10,4.76.41.41,0,0,0-.22.56,74.8,74.8,0,0,0,6.43,10.38.42.42,0,0,0,.46.22,105.48,105.48,0,0,0,32.11-11.61.45.45,0,0,0,.19-.34c2.72-28.53-4.67-53.59-20-76.27A.39.39,0,0,0,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.07,65.69,84.69,65.69Z" />
                </svg>
                <span>LOGIN WITH DISCORD</span>
              </button>
            </motion.div>
          ) : (
            /* Logged in Dashboard controls view */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="space-y-10"
            >
              {/* Title Header */}
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
                  Reseller Dashboard
                </h2>
                <p className="text-neutral-500 text-sm">
                  Welcome back, <span className="text-white font-bold">{user.username}</span>. Check status approvals below.
                </p>
              </div>

              {/* Sub-tab Selectors exactly matching layout list headers */}
              <div className="flex gap-2 justify-center border-b border-white/5 pb-4">
                {(["verified", "unverified", "deleted"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveSubTab(tab)}
                    className={`nav-tab relative cursor-pointer px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      activeSubTab === tab
                        ? "bg-[#a59aff]/10 text-[#a59aff]"
                        : "text-neutral-500 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Action Board row to Add unverified items (Visible on Unverified mode) */}
              {activeSubTab === "unverified" && (
                <div className="glass-card p-6 rounded-2xl max-w-xl mx-auto flex flex-col md:flex-row gap-3 items-center border border-white/5">
                  <input
                    type="text"
                    value={newResellerId}
                    onChange={(e) => setNewResellerId(e.target.value)}
                    placeholder="Enter reseller discord ID/handle"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#a59aff]/40 transition-colors"
                  />
                  <button
                    onClick={handleCreateReseller}
                    disabled={isAdding}
                    className="w-full md:w-auto shrink-0 bg-white hover:bg-[#a59aff] text-black font-bold uppercase tracking-wider text-[0.68rem] px-5 py-3 rounded-xl transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isAdding ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        <span>Adding...</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add Reseller</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Grid or table rendering of data lists */}
              <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="pb-4 text-xs font-black uppercase text-[#a59aff] tracking-widest pl-3">
                          Avatar
                        </th>
                        <th className="pb-4 text-xs font-black uppercase text-[#a59aff] tracking-widest">
                          Username
                        </th>
                        <th className="pb-4 text-xs font-black uppercase text-[#a59aff] tracking-widest">
                          {activeSubTab === "verified"
                            ? "Verified Date"
                            : activeSubTab === "deleted"
                            ? "Deleted Date"
                            : "Created Date"}
                        </th>
                        {activeSubTab === "deleted" && (
                          <th className="pb-4 text-xs font-black uppercase text-[#a59aff] tracking-widest">
                            Cooldown
                          </th>
                        )}
                        <th className="pb-4 text-xs font-black uppercase text-[#a59aff] tracking-widest pr-3 text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.03]">
                      {filteredResellers.length > 0 ? (
                        filteredResellers.map((resell) => (
                          <tr key={resell.id} className="hover:bg-white/[0.01] transition-colors">
                            <td className="py-4 pl-3">
                              <img
                                className="w-10 h-10 rounded-full border border-white/10"
                                src={resell.avatarUrl}
                                alt={resell.username}
                              />
                            </td>
                            <td className="py-4 font-bold text-sm text-white">
                              {resell.username}
                            </td>
                            <td className="py-4 text-xs text-neutral-400 font-mono">
                              {activeSubTab === "verified"
                                ? resell.verifiedAt
                                : activeSubTab === "deleted"
                                ? resell.deletedAt
                                : resell.createdAt}
                            </td>
                            {activeSubTab === "deleted" && (
                              <td className="py-4 text-xs text-red-400 font-bold">
                                {resell.cooldown}
                              </td>
                            )}
                            <td className="py-4 pr-3 text-right">
                              {activeSubTab === "unverified" && (
                                <div className="flex justify-end gap-2">
                                  <button
                                    onClick={() => handleVerify(resell.id)}
                                    className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-black text-[0.65rem] font-bold uppercase tracking-wider transition-all cursor-pointer"
                                  >
                                    Verify
                                  </button>
                                  <button
                                    onClick={() => handleDelete(resell.id)}
                                    className="px-3.5 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white text-[0.65rem] font-bold uppercase tracking-wider transition-all cursor-pointer"
                                  >
                                    Delete
                                  </button>
                                </div>
                              )}
                              {activeSubTab === "verified" && (
                                <button
                                  onClick={() => handleDelete(resell.id)}
                                  className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white text-[0.65rem] font-bold uppercase tracking-wider transition-all cursor-pointer"
                                >
                                  Suspend
                                </button>
                              )}
                              {activeSubTab === "deleted" && (
                                <button
                                  onClick={() => handleRestore(resell.id)}
                                  className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-[0.65rem] font-bold uppercase tracking-wider transition-all cursor-pointer"
                                >
                                  Reinstate
                                </button>
                              )}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            className="py-12 text-center text-neutral-500 italic text-sm"
                            colSpan={activeSubTab === "deleted" ? 5 : 4}
                          >
                            No resellers found on this list.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
