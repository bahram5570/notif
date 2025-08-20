import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ChallengeQuestionPropsType } from './type';

const ChallengeQuestion = ({
  avatarUrl,
  helper,
  question,
  answerValue,
  onChangeHandler,
}: ChallengeQuestionPropsType) => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-col justify-end items-end gap-2 mt-4">
      <Typography scale="Body" size="Medium">
        {question}
      </Typography>
      <div className="flex w-full flex-row-reverse gap-1">
        <CustomImage src={avatarUrl} className="w-8 h-8 rounded-full !object-cover" />
        <div className="flex w-full ">
          <textarea
            placeholder={helper}
            className="w-full text-end px-4 py-3 rounded-xl focus-visible:outline-1 focus-visible:outline placeholder:text-sm"
            style={{ background: colors.Surface_SurfaceVariant, outlineColor: colors.PrimaryWoman_Primary }}
            value={answerValue}
            maxLength={500}
            onChange={(e) => onChangeHandler(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChallengeQuestion;
