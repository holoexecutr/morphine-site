import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, Minus, Plus, User, CheckCircle, Ticket } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  label: string;
  displayPrice: string;
  priceValue: number;
  isBalanceOnly?: boolean;
}

interface CheckoutPortalProps {
  plan: Plan;
  user: {
    username: string;
    avatarUrl: string;
    balance: number;
  } | null;
  onLogin: () => void;
  onBack: () => void;
  onPurchaseComplete: (planName: string, totalPrice: number, amount: number) => void;
  onAddBalance: () => void;
}

export default function CheckoutPortal({
  plan,
  user,
  onLogin,
  onBack,
  onPurchaseComplete,
  onAddBalance,
}: CheckoutPortalProps) {
  const [amount, setAmount] = useState<number>(1);
  const [couponCode, setCouponCode] = useState<string>("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [appliedCode, setAppliedCode] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  // Handle increment/decrement
  const handleIncrement = () => {
    setAmount((prev) => Math.min(prev + 1, 100));
  };

  const handleDecrement = () => {
    setAmount((prev) => Math.max(prev - 1, 1));
  };

  // Pricing math values
  const pricePerUnit = plan.priceValue;
  const rawSubtotal = pricePerUnit * amount;

  // Let's implement a realistic reseller bulk discount: 
  // Buy 5+ keys get 10% off, 10+ keys get 20% off!
  let resellerDiscountPercentage = 0;
  if (amount >= 10) {
    resellerDiscountPercentage = 0.20;
  } else if (amount >= 5) {
    resellerDiscountPercentage = 0.10;
  }
  const resellerDiscountValue = Number((rawSubtotal * resellerDiscountPercentage).toFixed(2));

  // Premium Coupon codes: "MORPHINE" (15% off) or "DISCORD" (10% off)
  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (code === "MORPHINE") {
      setAppliedDiscount(0.15);
      setAppliedCode(code);
      setSuccessMsg("Coupon 'MORPHINE' applied! 15% discount active.");
    } else if (code === "DISCORD") {
      setAppliedDiscount(0.10);
      setAppliedCode(code);
      setSuccessMsg("Coupon 'DISCORD' applied! 10% discount active.");
    } else if (code === "") {
      setSuccessMsg("");
    } else {
      setSuccessMsg("Invalid coupon code.");
    }
  };

  const couponDiscountValue = Number(((rawSubtotal - resellerDiscountValue) * appliedDiscount).toFixed(2));
  const totalDiscount = resellerDiscountValue + couponDiscountValue;
  const calculatedTotal = Math.max(0, rawSubtotal - totalDiscount);

  // Perform purchase action
  const handleProcessCheckout = () => {
    if (!user) return;
    onPurchaseComplete(plan.name, calculatedTotal, amount);
  };

  return (
    <section className="min-h-[82vh] flex items-center justify-center py-10 px-4 md:px-10 relative z-10 select-none">
      <div className="w-full max-w-[940px] bg-[#0e0f11]/60 backdrop-blur-xl rounded-[2rem] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.95)] border border-white/[0.04] grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Column - Product Specifications */}
        <div className="p-8 md:p-11 bg-transparent flex flex-col justify-between text-left">
          
          {/* Back button */}
          <div>
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-white text-[10px] md:text-xs font-bold uppercase tracking-widest cursor-pointer transition-colors mb-10 group"
            >
              <span className="text-sm font-normal mr-1">&lt;</span>
              BACK TO HOME
            </button>

            {/* Custom display product name bracket design */}
            <h2 className="text-[1.8rem] md:text-[2.3rem] font-extrabold mb-4 text-white tracking-widest font-sans uppercase leading-none select-none">
              &#123; {plan.name ? plan.name.toUpperCase() : "PRODUCT_NAME"} &#125;
            </h2>

            <p className="text-[#85868a] text-xs font-normal mb-8 max-w-[340px] leading-relaxed">
              After buying you can view your license by clicking your Discord avatar in the topbar.
            </p>
          </div>

          {/* Pricing Adjustments details */}
          <div className="space-y-6">
            
            {/* Divider */}
            <div className="w-full h-[1px] bg-white/[0.03]" />

            {/* Quantity Selector Slider row */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-400">
                Amount:
              </span>
              <div className="flex items-center gap-1.5 bg-[#121316] border border-white/[0.04] p-1 rounded-xl">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="w-[26px] h-[26px] rounded-[6px] bg-white/[0.03] hover:bg-white/[0.1] flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <input
                  type="number"
                  value={amount}
                  readOnly
                  className="w-10 h-[26px] bg-white text-black font-sans font-extrabold text-xs text-center rounded-[6px] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="w-[26px] h-[26px] rounded-[6px] bg-white/[0.03] hover:bg-white/[0.1] flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Financial Rows */}
            <div className="space-y-3.5 text-xs">
              <div className="flex items-center justify-between text-[#8e9297]">
                <span>Subtotal:</span>
                <span className="text-white font-sans font-bold">
                  {plan.isBalanceOnly ? `${amount} Balance` : `€${rawSubtotal.toFixed(2)}`}
                </span>
              </div>

              {!plan.isBalanceOnly && (
                <>
                  <div className="flex items-center justify-between text-[#8e9297]">
                    <span>Reseller Bulk Discount:</span>
                    <span className="text-white font-sans font-bold">
                      -€{resellerDiscountValue.toFixed(2)}
                    </span>
                  </div>

                  {appliedDiscount > 0 && (
                    <div className="flex items-center justify-between text-[#8e9297]">
                      <span className="inline-flex items-center gap-1">
                        <Ticket className="w-3.5 h-3.5 text-[#a59aff]" />
                        Coupon Discount:
                      </span>
                      <span className="text-white font-sans font-bold">
                        -€{couponDiscountValue.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {/* Promo Input Box */}
                  <div className="flex items-center gap-2 mt-4">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Coupon code"
                      className="bg-[#111215] border border-white/[0.04] text-white text-xs rounded-lg px-4 py-2.5 placeholder:text-neutral-600 focus:outline-none focus:border-white/[0.12] flex-grow font-sans"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-4 py-2.5 rounded-lg bg-[#171524] hover:bg-[#201d33] text-xs font-bold text-[#a59aff] tracking-widest uppercase cursor-pointer transition-colors whitespace-nowrap border border-[#a59aff]/10"
                    >
                      APPLY
                    </button>
                  </div>
                  
                  {successMsg && (
                    <p className={`text-[10px] ${successMsg.includes("applied") ? "text-emerald-400" : "text-amber-500"}`}>
                      {successMsg}
                    </p>
                  )}
                </>
              )}
            </div>

            {/* Final Dividers */}
            <div className="w-full h-[1px] bg-white/[0.03] mt-5" />

            {/* Total Display */}
            <div className="flex items-end justify-between pt-2">
              <span className="text-sm font-bold text-white tracking-wide">Total:</span>
              <span className="text-[1.8rem] md:text-[2.2rem] font-bold text-white tracking-tight font-sans leading-none">
                {plan.isBalanceOnly ? `${amount} Balance` : `€${calculatedTotal.toFixed(2)}`}
              </span>
            </div>

          </div>

        </div>

        {/* Right Column - OAuth Checkout Panel */}
        <div className="bg-[#131416]/50 p-8 md:p-11 flex flex-col justify-center items-center text-center relative border-l border-white/[0.02]">
          
          {/* Subtle glowing dark core background effect */}
          <div className="absolute inset-0 bg-radial-gradient from-white/[0.01] to-transparent pointer-events-none" />

          {!user ? (
            /* Logged Out view: Login Required */
            <div className="relative z-10 w-full flex flex-col items-center justify-center max-w-xs">
              
              {/* User Outline Icon */}
              <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-neutral-400 stroke-[1.5]" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 font-sans">
                Login Required
              </h3>
              <p className="text-[#8e9297] text-xs font-normal mb-8 max-w-[240px] leading-relaxed">
                You must be logged in to complete a purchase.
              </p>

              <button
                onClick={onLogin}
                className="w-full py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest bg-[#a59aff] hover:bg-[#b5abff] text-[#0d0e11] cursor-pointer transition-all active:scale-[0.98] shadow-lg shadow-black/30 font-sans select-none"
              >
                LOGIN WITH DISCORD
              </button>
            </div>
          ) : (
            /* Logged In view: Dynamic verification with user balance details */
            <div className="relative z-10 w-full flex flex-col items-center justify-center max-w-xs">
              
              <div className="relative mb-5">
                <img
                  src={user.avatarUrl}
                  alt={user.username}
                  className="w-16 h-16 rounded-full border-2 border-[#a59aff]/40 object-cover shadow-2xl"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#090a0f]" />
              </div>

              <span className="text-[10px] font-bold text-[#a59aff] tracking-widest uppercase mb-1">
                CONNECTED DISCORD
              </span>
              <h3 className="text-base font-bold text-white mb-4 font-sans">
                {user.username}
              </h3>

              {/* Status information */}
              <div className="w-full bg-[#0d0e11] border border-white/[0.03] rounded-xl p-4 mb-8 text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8e9297]">Your Balance:</span>
                  <span className="text-emerald-400 font-bold font-sans">${user.balance.toFixed(2)} USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e9297]">Required Balance:</span>
                  <span className="text-white font-sans font-bold">
                    {plan.isBalanceOnly ? `${amount} Bal` : `$${(calculatedTotal * 1.08).toFixed(2)} USD`}
                  </span>
                </div>
                <div className="w-full h-[1px] bg-white/[0.03] my-1" />
                <p className="text-[10px] text-neutral-500 leading-normal text-center">
                  Balance conversions are processed in real-time.
                </p>
              </div>

              {/* Action Buttons based on funds balance */}
              {plan.isBalanceOnly ? (
                user.balance >= amount ? (
                  <button
                    onClick={handleProcessCheckout}
                    className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer transition-all active:scale-[0.98] shadow-lg shadow-black/30 font-sans"
                  >
                    COMPLETE PURCHASE
                  </button>
                ) : (
                  <div className="w-full space-y-3">
                    <button
                      onClick={onAddBalance}
                      className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest bg-[#a59aff] hover:bg-[#b5abff] text-[#0d0e11] cursor-pointer transition-all active:scale-[0.98] shadow-lg font-sans"
                    >
                      ADD BALANCE
                    </button>
                    <p className="text-[10px] text-amber-500">
                      Insufficient points balance. Add points to continue.
                    </p>
                  </div>
                )
              ) : (
                user.balance >= calculatedTotal ? (
                  <button
                    onClick={handleProcessCheckout}
                    className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer transition-all active:scale-[0.98] shadow-lg shadow-black/30 font-sans"
                  >
                    COMPLETE PURCHASE
                  </button>
                ) : (
                  <div className="w-full space-y-3">
                    <button
                      onClick={onAddBalance}
                      className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest bg-[#a59aff] hover:bg-[#b5abff] text-[#0d0e11] cursor-pointer transition-all active:scale-[0.98] shadow-lg font-sans"
                    >
                      ADD BALANCE
                    </button>
                    <p className="text-[10px] text-amber-500">
                      Insufficient balance on profile. Topup balance now.
                    </p>
                  </div>
                )
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
