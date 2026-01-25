import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';

const CheckupQuestionContainerSkeleton = () => {
  return (
    <div
      className="w-full h-[100dvh] flex flex-col mt-3 items-center gap-4 px-4 animate-skeleton"
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <div className="w-full h-[200px] rounded-md my-5 bg-impo_Neutral_Surface" />

      <div className="w-full h-[200px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-full h-[200px] rounded-md mt-5 bg-impo_Neutral_Surface" />
    </div>
  );
};

export default CheckupQuestionContainerSkeleton;
