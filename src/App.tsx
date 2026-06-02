import { useState, useRef, useEffect } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Pricing from "./components/Pricing";
import ResellersPortal from "./components/ResellersPortal";
import TermsOfService from "./components/TermsOfService";
import BalanceAnimation from "./components/BalanceAnimation";
import CheckoutPortal from "./components/CheckoutPortal";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { MorphineIcon } from "./components/MorphineIcon";

const API = "http://79.112.45.192:8000";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("HOME");
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);

  const [discordData, setDiscordData] = useState<any | null>(null);
  const [discordLoading, setDiscordLoading] = useState<boolean>(true);
  const [discordError, setDiscordError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    fetch("https://discord.com/api/guilds/1511135182579568670/widget.json")
      .then((res) => {
        if (!res.ok) throw new Error("Discord API throttling block");
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setDiscordData(data);
          setDiscordLoading(false);
        }
      })
      .catch((err) => {
        console.error("Discord Widget loading error:", err);
        if (isMounted) {
          setDiscordError(true);
          setDiscordLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const [user, setUser] = useState<{
    username: string;
    avatarUrl: string;
    balance: number;
  } | null>(null);

  const [activeBalanceAnim, setActiveBalanceAnim] = useState<{
    initial: number;
    amount: number;
  } | null>(null);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "info" | "warn";
  } | null>(null);

  const [downloading, setDownloading] = useState(false);

  const triggerToast = (message: string, type: "success" | "info" | "warn" = "info") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Check if user just came back from OAuth
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("verified") === "true") {
      // Clean URL
      window.history.replaceState({}, "", window.location.pathname);
      // Fetch user from backend
      fetch(`${API}/api/me`, { credentials: "include" })
        .then((res) => res.json())
        .then((data) => {
          if (data.loggedIn) {
            setUser({
              username: data.user.username,
              avatarUrl: `https://cdn.discordapp.com/avatars/${data.user.id}/${data.user.avatar}.png`,
              balance: 0,
            });
            triggerToast(`Signed in as ${data.user.username}`, "success");
          }
        })
        .catch(() => {
          triggerToast("Failed to fetch user info", "warn");
        });
    }
  }, []);

  // Open Discord OAuth popup
  const handleLogin = () => {
    const popup = window.open(
      `${API}/auth/discord`,
      "discord-auth",
      "width=500,height=800,scrollbars=yes"
    );

    // Poll for popup close then check session
    const timer = setInterval(() => {
      if (popup && popup.closed) {
        clearInterval(timer);
        fetch(`${API}/api/me`, { credentials: "include" })
          .then((res) => res.json())
          .then((data) => {
            if (data.loggedIn) {
              setUser({
                username: data.user.username,
                avatarUrl: `https://cdn.discordapp.com/avatars/${data.user.id}/${data.user.avatar}.png`,
                balance: 0,
              });
              triggerToast(`Signed in as ${data.user.username}`, "success");
            }
          })
          .catch(() => {});
      }
    }, 500);
  };

  const handleLogout = () => {
    setUser(null);
    triggerToast("Signed out of your session", "info");
  };

  const handleAddBalance = () => {
    if (!user) {
      triggerToast("Please log in with Discord first to manage your account balance.", "warn");
      return;
    }
    setActiveBalanceAnim({
      initial: user.balance,
      amount: 10.0,
    });
  };

  const handleAnimationComplete = (newBalance: number) => {
    setUser((prev) => (prev ? { ...prev, balance: newBalance } : null));
    setActiveBalanceAnim(null);
    triggerToast(`Account balance updated to $${newBalance.toFixed(1)} USD successfully!`, "success");
  };

  const handlePurchase = (planName: string, price: number) => {
    const isBalanceOnly = planName === "6 Hours" || planName.toLowerCase().includes("balance");
    setSelectedPlan({
      id: planName.replace(/\s+/g, "").toLowerCase(),
      name: planName,
      label: planName.toUpperCase(),
      displayPrice: isBalanceOnly ? "1 Balance" : `€${price}`,
      priceValue: price,
      isBalanceOnly,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePurchaseComplete = (planName: string, totalPrice: number, amount: number) => {
    if (!user) return;
    const isBalanceOnly = planName === "6 Hours" || planName.toLowerCase().includes("balance");
    const chargeVal = isBalanceOnly ? amount : totalPrice;

    if (user.balance < chargeVal) {
      triggerToast(`Insufficient balance to purchase ${amount}x ${planName}. Add balance first!`, "warn");
      return;
    }

    setUser((prev) => (prev ? { ...prev, balance: Number((prev.balance - chargeVal).toFixed(2)) } : null));
    triggerToast(`Successfully purchased ${amount}x Morphine ${planName}! Priority keys have been generated and sent!`, "success");
    setSelectedPlan(null);
  };

  const handleDownload = () => {
    setDownloading(true);
    triggerToast("Connecting to Morphine secure compilation servers...", "info");
    setTimeout(() => {
      setDownloading(false);
      triggerToast("Morphine executor setup binaries downloaded! Extract and execute.", "success");
    }, 2000);
  };

  const handleScrollToPlans = () => {
    setActiveTab("PRODUCTS");
    setSelectedPlan(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-[#eeeeee]">
      <AnimatedBackground activeTab={activeTab} isCheckoutActive={!!selectedPlan} />

      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setSelectedPlan(null);
          setActiveTab(tab);
        }}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onAddBalance={handleAddBalance}
      />

      <main className="relative w-full">
        <AnimatePresence mode="wait">
          {activeTab === "HOME" && (
            <motion.div
              key={selectedPlan ? "checkout" : "home"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {selectedPlan ? (
                <CheckoutPortal
                  plan={selectedPlan}
                  user={user}
                  onLogin={handleLogin}
                  onBack={() => setSelectedPlan(null)}
                  onPurchaseComplete={handlePurchaseComplete}
                  onAddBalance={handleAddBalance}
                />
              ) : (
                <>
                  <Hero
                    onScrollToPlans={handleScrollToPlans}
                    onDownload={handleDownload}
                    downloading={downloading}
                    discordCount={discordData?.presence_count}
                  />
                  <Showcase />
                </>
              )}
            </motion.div>
          )}

          {activeTab === "PRODUCTS" && (
            <motion.div
              key={selectedPlan ? "checkout_products" : "products_page"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {selectedPlan ? (
                <CheckoutPortal
                  plan={selectedPlan}
                  user={user}
                  onLogin={handleLogin}
                  onBack={() => setSelectedPlan(null)}
                  onPurchaseComplete={handlePurchaseComplete}
                  onAddBalance={handleAddBalance}
                />
              ) : (
                <Pricing onPurchase={handlePurchase} />
              )}
            </motion.div>
          )}

          {activeTab === "RESELL" && (
            <motion.div
              key="resell"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <ResellersPortal user={user} onLogin={handleLogin} />
            </motion.div>
          )}

          {activeTab === "LUA_VM" && (
            <motion.div
              key="lua_vm"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="min-h-[82vh] flex items-center justify-center relative px-6 py-24 select-none"
            >
              <div className="max-w-md w-full text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#a59aff]/5 border border-[#a59aff]/25 flex items-center justify-center shadow-[0_0_50px_rgba(165,154,255,0.15)] animate-pulse">
                  <span className="font-mono text-xl text-[#a59aff] font-bold">&gt;_</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none font-sans uppercase">
                    Lua VM Playground
                  </h2>
                  <p className="text-[#8e9297] text-xs sm:text-sm font-medium leading-relaxed">
                    The secure virtual machine sandbox for Morphine's next-generation runtime executions is currently under compilation.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] text-[10px] uppercase tracking-widest font-black text-neutral-500">
                    Coming Soon &bull; Beta 1.0
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "TERMS" && (
            <motion.div
              key="terms"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="min-h-[82vh]"
            >
              <TermsOfService />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative bg-transparent pt-20 pb-12 px-6 md:px-12 z-10 text-xs select-none border-t border-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 pb-12 text-left">
            <div className="md:col-span-6 flex flex-col items-start gap-4">
              <div className="flex items-center gap-2.5">
                <MorphineIcon size={20} className="text-[#a59aff]" />
                <span className="text-base font-bold tracking-tight text-white font-sans uppercase">
                  Morphine
                </span>
              </div>
              <p className="text-[#8e9297] text-xs max-w-xs leading-relaxed">
                Have fun using Project Morphine, and also if you can support me!
              </p>
            </div>
            <div className="hidden md:block md:col-span-2"></div>
            <div className="md:col-span-2 flex flex-col items-start gap-3">
              <h4 className="text-[10px] font-bold text-[#8e9297] tracking-widest uppercase">Community</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#youtube" onClick={(e) => { e.preventDefault(); triggerToast("Opening our YouTube channel..."); }}
                    className="relative group inline-block text-[#8e9297] hover:text-white transition-colors text-xs font-normal pb-1">
                    YouTube
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a59aff] transition-all duration-[400ms] ease-out origin-left transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/hfTd6MW5ry" target="_blank" rel="noopener noreferrer"
                    className="relative group inline-block text-[#8e9297] hover:text-white transition-colors text-xs font-normal pb-1">
                    Discord Server
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a59aff] transition-all duration-[400ms] ease-out origin-left transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-2 flex flex-col items-start gap-3">
              <h4 className="text-[10px] font-bold text-[#8e9297] tracking-widest uppercase">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#terms" onClick={(e) => { e.preventDefault(); setActiveTab("TERMS"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="relative group inline-block text-[#8e9297] hover:text-white transition-colors text-xs font-normal pb-1">
                    Terms of Service
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a59aff] transition-all duration-[400ms] ease-out origin-left transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white/[0.04] mb-8" />
          <div className="text-center text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
            &copy; 2026 Project Morphine &bull; All Rights Reserved
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10000] px-5 py-3 rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 shadow-2xl flex items-center gap-3 select-none"
          >
            {toast.type === "success" && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
            {toast.type === "warn" && <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />}
            {toast.type === "info" && <ShieldCheck className="w-4 h-4 text-[#a59aff] shrink-0" />}
            <span className="text-xs font-bold text-neutral-300 whitespace-nowrap">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {activeBalanceAnim && (
        <BalanceAnimation
          initialBalance={activeBalanceAnim.initial}
          addedAmount={activeBalanceAnim.amount}
          onAnimationComplete={handleAnimationComplete}
        />
      )}
    </div>
  );
}