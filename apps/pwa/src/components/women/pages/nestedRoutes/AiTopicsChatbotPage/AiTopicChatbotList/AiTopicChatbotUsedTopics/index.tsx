import Typography from '@components/ui/Typography';

import GeneratorTopicCardList from '../GeneratorTopicCardList';
import { AiTopicChatbotUsedTopicsPropsType } from './type';

const AiTopicChatbotUsedTopics = ({ usedTopics, categoryId }: AiTopicChatbotUsedTopicsPropsType) => {
  return (
    <div className="flex flex-col w-full gap-3 items-end">
      <Typography scale="Title" size="Small">
        {/* {data.usedTopicTitle} */}
        گفتگوهای فعال
      </Typography>
      <GeneratorTopicCardList topics={usedTopics} categoryId={categoryId} />
    </div>
  );
};

export default AiTopicChatbotUsedTopics;
