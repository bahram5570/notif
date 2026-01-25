import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';

const ChallengeSkeleton = () => {
  return (
    <div
      className="w-full h-[100dvh] flex flex-col items-center gap-4 px-4 animate-skeleton"
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <div className="w-full h-[55px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-full h-[55px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-full h-2 rounded-md bg-impo_Neutral_Surface" />
      <div className="flex w-full flex-row-reverse gap-2 bg-impo_Neutral_Surface">
        <div className="w-8 h-8 rounded-full bg-impo_Neutral_Surface" />
        <div className="w-full h-[150px] rounded-md bg-impo_Neutral_Surface" />
      </div>
    </div>
  );
};

export default ChallengeSkeleton;
