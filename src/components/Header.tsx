import { motion, AnimatePresence } from "motion/react";
import { Menu, X, LogIn, ChevronDown, DollarSign, Plus } from "lucide-react";
import { useState } from "react";
import { MorphineIcon } from "./MorphineIcon";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: { username: string; avatarUrl: string; balance: number } | null;
  onLogin: () => void;
  onLogout: () => void;
  onAddBalance: () => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  user,
  onLogin,
  onLogout,
  onAddBalance,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const navItems = [
    { id: "HOME", label: "Home" },
    { id: "PRODUCTS", label: "Products" },
    { id: "LUA_VM", label: "Lua VM" },
    { id: "RESELL", label: "Resell" },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-5 flex justify-center">
      <div className="w-full max-w-[1100px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] h-14 md:h-16 px-6 md:px-8 rounded-full flex items-center justify-between relative shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        
        {/* Left Side: Logo & Brand */}
        <div className="flex items-center gap-3 z-10 shrink-0 cursor-pointer" onClick={() => handleTabClick("HOME")}>
          <MorphineIcon size={24} className="text-[#a59aff] transition-transform hover:rotate-12 hover:scale-110 active:scale-95" />
          <span className="text-lg font-black tracking-tighter text-white hidden sm:block">
            MORPHINE
          </span>
        </div>

        {/* Center: Navigation Options */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center h-full">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`group relative px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.label}
                {/* Smooth left-to-right expanding/retracting underline of full length */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#a59aff] transition-all duration-[400ms] ease-out origin-left transform ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Side: Logged In User OR Discord Login */}
        <div className="flex items-center gap-4 z-10 shrink-0">
          <AnimatePresence mode="wait">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 cursor-pointer group hover:opacity-95 transition-opacity"
                >
                  <div className="flex flex-col leading-none text-right gap-0.5">
                    <span className="text-[0.7rem] font-bold text-neutral-300 group-hover:text-white transition-colors">
                      {user.username}
                    </span>
                    <span className="user-balance text-[0.6rem] font-black text-[#a59aff] tracking-wider">
                      ${user.balance.toFixed(1)} USD
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden transition-all group-hover:scale-103 group-hover:border-[#a59aff]/40 relative">
                    <img
                      className="w-full h-full object-cover"
                      src={user.avatarUrl}
                      alt={user.username}
                    />
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Profile Controls Dropdown */}
                {profileDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40 cursor-default" 
                      onClick={() => setProfileDropdownOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-48 rounded-xl bg-[#0a0a0a]/95 border border-white/10 p-2 z-50 shadow-xl backdrop-blur-md"
                    >
                      <button
                        onClick={() => {
                          onAddBalance();
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors cursor-pointer text-left"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Add $10.0 Balance
                      </button>
                      
                      <div className="h-[1px] bg-white/5 my-1" />
                      
                      <button
                        onClick={() => {
                          onLogout();
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer text-left"
                      >
                        Sign Out
                      </button>
                    </motion.div>
                  </>
                )}
              </div>
            ) : (
              <button
                onClick={onLogin}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white text-[0.65rem] font-black uppercase tracking-wider transition-all hover:scale-[1.02] hover:shadow-[0_10px_25px_-5px_rgba(88,101,242,0.4)] cursor-pointer"
              >
                {/* Custom inline SVG Discord logo exactly matching website source */}
                <svg className="w-3.5 h-3.5" viewBox="0 0 127.14 96.36" fill="#ffffff">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a.41.41,0,0,0-.43.2,72.48,72.48,0,0,0-3.17,6.52,97.26,97.26,0,0,0-29,0,72.84,72.84,0,0,0-3.19-6.52.4.4,0,0,0-.43-.2A105.09,105.09,0,0,0,19.44,8.07a.44.44,0,0,0-.2.07C2.12,34,1.15,59.39,3.46,84.41a.48.48,0,0,0,.19.34A105.77,105.77,0,0,0,35.77,96.36a.42.42,0,0,0,.46-.22,74.22,74.22,0,0,0,6.42-10.38.4.4,0,0,0-.22-.56,68.7,68.7,0,0,1-10-4.76.41.41,0,0,1,0-.69c.83-.62,1.67-1.28,2.46-1.95a.39.39,0,0,1,.41-.05,73.4,73.4,0,0,0,57.48,0,.39.39,0,0,1,.41.05c.79.67,1.63,1.33,2.46,1.95a.41.41,0,0,1,0,.69,68.61,68.61,0,0,1-10,4.76.41.41,0,0,0-.22.56,74.8,74.8,0,0,0,6.43,10.38.42.42,0,0,0,.46.22,105.48,105.48,0,0,0,32.11-11.61.45.45,0,0,0,.19-.34c2.72-28.53-4.67-53.59-20-76.27A.39.39,0,0,0,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.07,65.69,84.69,65.69Z" />
                </svg>
                <span>LOGIN</span>
              </button>
            )}
          </AnimatePresence>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drop-down Menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-[#050505]/98 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 z-40 md:hidden shadow-2xl"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full text-center py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                    isActive
                      ? "bg-[#a59aff]/10 text-[#a59aff]"
                      : "text-neutral-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
