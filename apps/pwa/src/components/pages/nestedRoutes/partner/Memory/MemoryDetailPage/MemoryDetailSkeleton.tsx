import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';

const MemoryDetailSkeleton = () => {
  return (
    <div
      className="w-full h-[100dvh] flex flex-col items-center gap-4 px-4 animate-skeleton"
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <div className="w-full h-[10px] rounded-lg bg-impo_Neutral_Surface" />
      <div className="w-full h-[260px] rounded-lg bg-impo_Neutral_Surface" />
      <div className="w-full h-[60px] rounded-md bg-impo_Neutral_Surface" />
    </div>
  );
};

export default MemoryDetailSkeleton;
