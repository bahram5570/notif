import Dark_Typography from '@components/ui/Dark_Typography';

import GeneratorTopicCardList from '../GeneratorTopicCardList';
import { AiTopicChatbotUsedTopicsPropsType } from './type';

const AiTopicChatbotUsedTopics = ({ topics, onLinkHandler }: AiTopicChatbotUsedTopicsPropsType) => {
  return (
    <div className="flex flex-col w-full gap-3 items-end">
      <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        {/* {data.usedTopicTitle} */}
        گفتگوهای فعال
      </Dark_Typography>
      <GeneratorTopicCardList topics={topics} onLinkHandler={onLinkHandler} />
    </div>
  );
};

export default AiTopicChatbotUsedTopics;
