import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AiChatbotInput from '../../../AiChatbotPage/AiChatbotFooter/AiChatbotInput';
import useSubmit from './__hooks__/useSubmit';

const AiTopicChatbotListFooter = ({ inputPlaceholder }: { inputPlaceholder: string | undefined }) => {
  const { submitHandler, isLoading: newLoading } = useSubmit();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 mx-auto   flex"
      style={{
        maxWidth: MAX_SCREEN_WIDTH,
        background: 'linear-gradient(180deg, rgba(192, 194, 255, 0) -10.78%, #D3C8FC 100%)',
      }}
    >
      <div className="pt-4 pb-5 px-4 w-full">
        <AiChatbotInput hintPromptText={inputPlaceholder || ''} isLoading={newLoading} submitHandler={submitHandler} />
      </div>
    </div>
  );
};

export default AiTopicChatbotListFooter;
