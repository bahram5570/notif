import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import AiChatbotHeader from '../AiChatbotHeader';
import { WelcomingTypeEnum } from '../WelcomingContainer/enum';
import AiTopicChatbotListFooter from './AiTopicChatbotListFooter';
import AiTopicChatbotListSkeleton from './AiTopicChatbotListSkeleton';
import GeneratorTopicCardList from './GeneratorTopicCardList';
import useGetTopicList from './__hooks__/useGetTopicList';

const AiTopicChatbotList = () => {
  const { colors } = useTheme();
  const { data, isLoading } = useGetTopicList();

  const result = data?.result;
  const hasUsedTopicsListData = result && result.usedTopics.length > 0;
  const hasTopicsListData = result && result.topics.length > 0;

  return (
    <>
      <AiChatbotHeader welcomingType={WelcomingTypeEnum.TopicsPage} showActionMenu={true} />
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
              <div className="flex flex-col items-end justify-end gap-2">
                <Typography scale="Title" size="Large">
                  {result?.title}
                </Typography>
                <Typography size="Medium" scale="Body">
                  {result?.subtitle}
                </Typography>
              </div>

              {hasUsedTopicsListData && (
                <div className="flex flex-col w-full gap-3 items-end">
                  <Typography scale="Title" size="Small">
                    {/* {data.usedTopicTitle} */}
                    گفتگوهای فعال
                  </Typography>
                  <GeneratorTopicCardList topics={result.usedTopics} categoryId={result.id} />
                </div>
              )}

              {hasTopicsListData && (
                <div className="flex justify-end items-end flex-col gap-4">
                  {hasUsedTopicsListData && (
                    <>
                      <div
                        className="h-0 w-full rotate-180 opacity-40"
                        style={{ border: `1px solid ${colors.Neutral_Background}` }}
                      />
                      <Typography scale="Title" size="Small">
                        {/* {data.topicTitle} */}
                        تالارهای پیشنهادی
                      </Typography>
                    </>
                  )}

                  <GeneratorTopicCardList topics={result.topics} categoryId={result.id} usedTopics={true} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <AiTopicChatbotListFooter inputPlaceholder={result?.inputPlaceholder} />
    </>
  );
};

export default AiTopicChatbotList;
