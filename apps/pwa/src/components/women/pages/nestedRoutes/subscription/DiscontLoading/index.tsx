import { useEffect } from 'react';

const DiscountLoading = ({ loading }: { loading: boolean }) => {
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <div className="absolute inset-0 z-100 flex items-center justify-center bg-black/25 backdrop-blur-sm h-[100dvh]">
      <div
        className="w-10 h-10 rounded-full animate-spin bg-[conic-gradient(#FFFFFF50,#F24F7A)]
          [mask:radial-gradient(farthest-side,transparent_calc(100%-3px),black_calc(100%-3px))]
          "
      />
    </div>
  );
};

export default DiscountLoading;
