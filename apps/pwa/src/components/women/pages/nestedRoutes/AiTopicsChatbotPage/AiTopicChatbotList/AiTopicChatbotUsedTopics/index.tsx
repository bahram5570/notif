import Typography from '@components/ui/Typography';

import GeneratorTopicCardList from '../GeneratorTopicCardList';
import { AiTopicChatbotUsedTopicsPropsType } from './type';

const AiTopicChatbotUsedTopics = ({ topics, onLinkHandler }: AiTopicChatbotUsedTopicsPropsType) => {
  return (
    <div className="flex flex-col w-full gap-3 items-end">
      <Typography scale="Title" size="Small">
        {/* {data.usedTopicTitle} */}
        گفتگوهای فعال
      </Typography>
      <GeneratorTopicCardList topics={topics} onLinkHandler={onLinkHandler} />
    </div>
  );
};

export default AiTopicChatbotUsedTopics;
