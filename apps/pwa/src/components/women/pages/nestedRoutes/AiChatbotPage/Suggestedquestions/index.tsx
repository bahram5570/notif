import ReplyIcon from '@assets/icons/Reply_2.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import SuggestedQuestionsAiChatbotSkeleton from './SuggestedQuestionsAiChatbotSkeleton';
import useGetQuestionData from './__hooks__/useGetQuestionData';
import { SuggestedQuestionsPropsType } from './type';

const SuggestedQuestions = ({ messageId, defaultQustionHandler }: SuggestedQuestionsPropsType) => {
  const { colors } = useTheme();
  const { questions, isLoading } = useGetQuestionData({ messageId });

  const onClick = (question: string) => {
    defaultQustionHandler(question);
  };

  return (
    <>
      {isLoading && !questions && <SuggestedQuestionsAiChatbotSkeleton />}
      {!isLoading && questions && (
        <div className="flex flex-col gap-3">
          {questions.map((question, index) => {
            const isMultiLine = question.length > 43;

            return (
              <div key={index} className="flex items-center justify-start flex-row-reverse gap-2">
                <div className="w-6 h-6">
                  <ReplyIcon className="w-6 h-auto" style={{ fill: colors.Grey_700 }} />
                </div>

                <div
                  className="bg-white/50 py-4 "
                  style={{
                    border: `0.25px solid ${colors.Grey_300}`,
                    borderRadius: isMultiLine ? '32px 32px 4px 32px' : '100px 100px 4px 100px',
                  }}
                  onClick={() => onClick(question)}
                >
                  <Typography scale="Body" size="Medium" className="px-6">
                    {question}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SuggestedQuestions;
