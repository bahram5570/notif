import React from 'react';

const LiquidGlassCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-md p-6 rounded-2xl bg-white/0 backdrop-blur-[8px] border border-white/50 shadow-lg absolute top-[400px] ">
      <div className="absolute -top-10 -left-10 z-40 w-40 h-40 bg-white/20 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
      {children}
    </div>
  );
};

export default LiquidGlassCard;
{
  /* <LiquidGlassCard>
  <div className="relative z-10 text-center">
    <h2 className="text-white text-2xl font-semibold mb-2">Liquid Glass</h2>
    <p className="text-black mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae vel quisquam hic, blanditiis possimus
      voluptates ut incidunt id ea, deleniti saepe nihil. Asperiores ea dicta alias cumque perferendis deserunt.
    </p>
    <button className="px-4 py-2 rounded-md bg-red-200 backdrop-blur-sm border border-white/10 text-white hover:bg-white/30 transition">
      Explore
    </button>
  </div>
</LiquidGlassCard>; */
}
