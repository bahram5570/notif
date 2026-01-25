import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';

const MessageContainerSkeleton = () => {
  return (
    <div
      className="w-full h-[100dvh] flex flex-col items-center gap-4 px-4 animate-skeleton"
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <div className="w-full h-[260px] rounded-lg bg-impo_Neutral_Surface" />
      <div className="w-[250px] h-[50px] rounded-full bg-impo_Neutral_Surface" />
    </div>
  );
};

export default MessageContainerSkeleton;
