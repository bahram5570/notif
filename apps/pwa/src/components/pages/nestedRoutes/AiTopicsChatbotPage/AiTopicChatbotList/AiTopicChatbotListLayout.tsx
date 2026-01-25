import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';

import AiTopicChatbotListSkeleton from './AiTopicChatbotListSkeleton';
import { AiTopicChatbotListLayoutPropsType } from './type';

const AiTopicChatbotListLayout = ({ children, isLoading }: AiTopicChatbotListLayoutPropsType) => {
  return (
    <>
      <div
        style={{
          background:
            'linear-gradient(360deg, #D7BAFD -15.17%, rgba(194, 211, 251, 0.8) 30.1%, rgba(199, 234, 241, 0.5) 75.9%, rgba(230, 240, 232, 0.5) 104.51%)',
          paddingTop: HEADER_HEIGHT + 50,
          paddingBottom: HEADER_HEIGHT * 2,
        }}
        className="min-h-[100dvh] flex flex-col gap-8 px-4 dark:!bg-none "
      >
        {isLoading && <AiTopicChatbotListSkeleton />}

        {!isLoading && children}
      </div>
    </>
  );
};

export default AiTopicChatbotListLayout;
