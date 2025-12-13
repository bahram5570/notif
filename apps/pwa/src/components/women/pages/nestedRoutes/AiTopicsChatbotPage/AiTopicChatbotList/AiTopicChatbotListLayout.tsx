import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import AiTopicChatbotListSkeleton from './AiTopicChatbotListSkeleton';
import { AiTopicChatbotListLayoutPropsType } from './type';

const AiTopicChatbotListLayout = ({ children, isLoading }: AiTopicChatbotListLayoutPropsType) => {
  return (
    <>
      <div
        style={{
          background:
            'linear-gradient(360deg, #D7BAFD -15.17%, rgba(194, 211, 251, 0.8) 30.1%, rgba(199, 234, 241, 0.5) 75.9%, rgba(230, 240, 232, 0.5) 104.51%)',
        }}
        className="min-h-[100dvh]"
      >
        {isLoading && <AiTopicChatbotListSkeleton />}

        {!isLoading && (
          <div style={{ paddingTop: HEADER_HEIGHT + 50 }} className="min-h-[100dvh]">
            <div className="flex flex-col gap-8 px-4" style={{ paddingBottom: HEADER_HEIGHT * 2 }}>
              {children}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AiTopicChatbotListLayout;
