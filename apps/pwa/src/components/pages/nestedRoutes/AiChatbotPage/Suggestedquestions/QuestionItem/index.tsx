import ReplyIcon from '@assets/icons/Reply_2.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { QuestionItemPropsType } from './type';

const QuestionItem = ({ defaultQustionHandler, question }: QuestionItemPropsType) => {
  const isMultiLine = question.length > 43;

  const onClick = () => {
    defaultQustionHandler(question);
  };

  return (
    <div className="flex items-center justify-start flex-row-reverse gap-2">
      <div className="w-6 h-6">
        <ReplyIcon className="w-6 h-auto fill-impo_Grey_700" />
      </div>

      <div
        className="bg-white/50 dark:!bg-white/5 py-4 border border-impo_Grey_300"
        style={{
          borderRadius: isMultiLine ? '32px 32px 4px 32px' : '100px 100px 4px 100px',
        }}
        onClick={onClick}
      >
        <CustomTypography fontSize="Body_Medium" className="px-6 text-impo_Neutral_OnBackground">
          {question}
        </CustomTypography>
      </div>
    </div>
  );
};

export default QuestionItem;
