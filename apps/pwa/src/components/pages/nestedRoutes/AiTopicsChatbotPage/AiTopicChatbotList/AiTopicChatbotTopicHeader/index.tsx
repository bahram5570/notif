import Dark_Typography from '@components/ui/Dark_Typography';

import { AiTopicChatbotTopicHeaderPropsType } from './type';

const AiTopicChatbotTopicHeader = ({ subtitle, title }: AiTopicChatbotTopicHeaderPropsType) => {
  return (
    <div className="flex flex-col items-end justify-end gap-2">
      <Dark_Typography fontSize="Title_Large" className="text-impo_Neutral_OnBackground">
        {title}
      </Dark_Typography>
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {subtitle}
      </Dark_Typography>
    </div>
  );
};

export default AiTopicChatbotTopicHeader;
