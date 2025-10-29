import ReplyIcon from '@assets/icons/Reply_2.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import SuggestedQuestionsAiChatbotSkeleton from './SuggestedQuestionsAiChatbotSkeleton';
import useGetQuestionData from './__hooks__/useGetQuestionData';
import { SuggestedQuestionsPropsType } from './type';

const questions = [
  'علائم تخمک‌گذاری چیست؟ (برای چک کردن)',
  'شانس بارداری در این دوره چقدر است؟',
  'شانس بارداری در این دوره چقدر است؟',
];

const SuggestedQuestions = ({ messageId }: SuggestedQuestionsPropsType) => {
  const { colors } = useTheme();
  const { data, isLoading } = useGetQuestionData({ messageId });

  const onClick = (question: string) => {
    console.log(question);
  };

  return (
    <>
      {isLoading && !data && <SuggestedQuestionsAiChatbotSkeleton />}
      {!isLoading && data && (
        <div className="flex flex-col gap-2">
          {questions.map((question, index) => {
            return (
              <div key={index} className="flex items-center justify-start flex-row-reverse gap-2">
                <ReplyIcon className="w-6 h-6" style={{ fill: colors.Grey_700 }} />
                <div
                  className="bg-white/50 py-3 px-4"
                  style={{
                    border: `0.25px solid ${colors.Grey_300}`,
                    borderRadius: '100px 100px 4px 100px',
                  }}
                  onClick={() => onClick(question)}
                >
                  <Typography scale="Body" size="Medium" className="px-2">
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
