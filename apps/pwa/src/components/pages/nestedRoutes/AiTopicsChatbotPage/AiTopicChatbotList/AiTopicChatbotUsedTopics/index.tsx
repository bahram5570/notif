import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import GeneratorTopicCardList from '../GeneratorTopicCardList';
import { AiTopicChatbotUsedTopicsPropsType } from './type';

const AiTopicChatbotUsedTopics = ({ topics, onLinkHandler }: AiTopicChatbotUsedTopicsPropsType) => {
  return (
    <div className="flex flex-col w-full gap-3 items-end">
      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        {/* {data.usedTopicTitle} */}
        گفتگوهای فعال
      </CustomTypography>
      <GeneratorTopicCardList topics={topics} onLinkHandler={onLinkHandler} />
    </div>
  );
};

export default AiTopicChatbotUsedTopics;
