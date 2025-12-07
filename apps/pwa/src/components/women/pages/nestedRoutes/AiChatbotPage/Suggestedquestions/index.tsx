import QuestionItem from './QuestionItem';
import SuggestedQuestionsAiChatbotSkeleton from './SuggestedQuestionsAiChatbotSkeleton';
import useGetQuestionData from './__hooks__/useGetQuestionData';
import { SuggestedQuestionsPropsType } from './type';

const SuggestedQuestions = ({ messageId, defaultQustionHandler }: SuggestedQuestionsPropsType) => {
  const { questions, isLoading } = useGetQuestionData({ messageId });

  return (
    <>
      {isLoading && !questions && <SuggestedQuestionsAiChatbotSkeleton />}
      {!isLoading && questions && (
        <div className="flex flex-col gap-3">
          {questions.map((question, index) => {
            return <QuestionItem key={index} defaultQustionHandler={defaultQustionHandler} question={question} />;
          })}
        </div>
      )}
    </>
  );
};

export default SuggestedQuestions;
