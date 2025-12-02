import Typography from '@components/ui/Typography';

import { AiTopicChatbotTopicHeaderPropsType } from './type';

const AiTopicChatbotTopicHeader = ({ subtitle, title }: AiTopicChatbotTopicHeaderPropsType) => {
  return (
    <div className="flex flex-col items-end justify-end gap-2">
      <Typography scale="Title" size="Large">
        {title}
      </Typography>
      <Typography size="Medium" scale="Body">
        {subtitle}
      </Typography>
    </div>
  );
};

export default AiTopicChatbotTopicHeader;
