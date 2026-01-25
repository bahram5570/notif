import ReplyIcon from '@assets/icons/Reply_2.svg';

const SuggestedQuestionsAiChatbotSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex items-center justify-start flex-row-reverse gap-2">
        <ReplyIcon className="w-6 h-6 fill-impo_Grey_700" />
        <div
          className="bg-white/50 py-3 px-4 animate-skeleton w-72 h-10 border border-impo_Grey_300"
          style={{
            borderRadius: '100px 100px 4px 100px',
          }}
        ></div>
      </div>
      <div className="flex items-center justify-start flex-row-reverse gap-2">
        <ReplyIcon className="w-6 h-6 fill-impo_Grey_700" />
        <div
          className="bg-white/50 py-3 px-4 animate-skeleton w-60 h-10 border border-impo_Grey_300"
          style={{
            borderRadius: '100px 100px 4px 100px',
          }}
        ></div>
      </div>
      <div className="flex items-center justify-start flex-row-reverse gap-2">
        <ReplyIcon className="w-6 h-6 fill-impo_Grey_700" />
        <div
          className="bg-white/50 py-3 px-4 animate-skeleton w-56 h-10 border border-impo_Grey_300"
          style={{
            borderRadius: '100px 100px 4px 100px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default SuggestedQuestionsAiChatbotSkeleton;
