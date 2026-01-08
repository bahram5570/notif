import Dark_Typography from '@components/ui/Dark_Typography';

import GeneratorTopicCardList from '../GeneratorTopicCardList';
import { AiTopicListPropsType } from './type';

const AiTopicList = ({ hasUsedTopicsListData, onLinkHandler, topics }: AiTopicListPropsType) => {
  return (
    <div className="flex justify-end items-end flex-col gap-4">
      {hasUsedTopicsListData && (
        <>
          <div className="h-0 w-full rotate-180 opacity-40 border border-impo_Neutral_Background" />
          <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
            {/* {data.topicTitle} */}
            تالارهای پیشنهادی
          </Dark_Typography>
        </>
      )}

      <GeneratorTopicCardList topics={topics} onLinkHandler={onLinkHandler} usedTopics={true} />
    </div>
  );
};

export default AiTopicList;
