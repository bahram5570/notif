import React from 'react';

const LiquidGlassCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-md p-6 rounded-[32px] bg-white/0 backdrop-blur-[8px] border border-white/50 shadow-lg absolute top-[36%]  ">
      <div className="absolute -top-10 -left-10 z-40 w-40 h-40 bg-white/20 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
      {children}
    </div>
  );
};

export default LiquidGlassCard;
