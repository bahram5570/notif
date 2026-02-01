import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { AiTopicChatbotTopicHeaderPropsType } from './type';

const AiTopicChatbotTopicHeader = ({ subtitle, title }: AiTopicChatbotTopicHeaderPropsType) => {
  return (
    <div className="flex flex-col items-end justify-end gap-2">
      <CustomTypography fontSize="Title_Large" className="text-impo_Neutral_OnBackground">
        {title}
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {subtitle}
      </CustomTypography>
    </div>
  );
};

export default AiTopicChatbotTopicHeader;
