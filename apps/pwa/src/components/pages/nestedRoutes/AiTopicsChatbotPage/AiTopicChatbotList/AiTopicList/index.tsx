import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import GeneratorTopicCardList from '../GeneratorTopicCardList';
import { AiTopicListPropsType } from './type';

const AiTopicList = ({ hasUsedTopicsListData, onLinkHandler, topics }: AiTopicListPropsType) => {
  return (
    <div className="flex justify-end items-end flex-col gap-4">
      {hasUsedTopicsListData && (
        <>
          <div className="h-0 w-full rotate-180 opacity-40 border border-impo_Neutral_Background" />
          <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
            {/* {data.topicTitle} */}
            تالارهای پیشنهادی
          </CustomTypography>
        </>
      )}

      <GeneratorTopicCardList topics={topics} onLinkHandler={onLinkHandler} usedTopics={true} />
    </div>
  );
};

export default AiTopicList;
