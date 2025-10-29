import { useState } from 'react';

import AiIcon from '@assets/icons/aibg.svg';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AiChatbotInput from '../../../AiChatbotPage/AiChatbotFooter/AiChatbotInput';
import { ChatbotMessageWelcomingPropsType } from './type';

const ChatbotMessageWelcoming = ({
  top,
  title,
  description,
  questions,
  hintPromptText,
}: ChatbotMessageWelcomingPropsType) => {
  const [question, setQuestion] = useState('');

  const onClick = (question: string) => {
    setQuestion(question);
  };

  return (
    <div className=" absolute w-full " style={{ top }}>
      <div className=" relative  w-full h-full">
        <AiIcon className="w-full " />
        <div className="px-6 flex flex-col gap-12  absolute top-10  pt-9 w-full">
          <div className=" flex flex-col gap-2 justify-center items-center px-2">
            <Typography scale="Title" size="Large">
              {title}
            </Typography>
            <Typography scale="Body" size="Medium" textAlign="justify">
              {description}
            </Typography>
          </div>
          <div className="  gap-2 grid grid-cols-2 grid-rows-2 px-5" style={{ direction: 'rtl' }}>
            {questions.map((question, index) => {
              return (
                <div
                  className="glass-card w-fit px-4 py-[10px] flex justify-center items-center rounded-full"
                  key={index}
                  onClick={() => {
                    onClick(question);
                  }}
                >
                  <Typography size="SmallProminet" scale="Lable" color="Surface_InverseSurface">
                    {question}
                  </Typography>
                </div>
              );
            })}
          </div>
          <div className=" fixed bottom-0 left-0 right-0 mx-auto" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
            <div className="py-4 backdrop-blur-[8px]">
              {/* <AiChatbotInput hintPromptText={hintPromptText} question={question} /> */}

              {/* <div className="flex justify-center items-center">
                <Typography scale="Lable" size="Small" color="Surface_OnSurfaceVariant">
                  مونس هم گاهی اشتباه می‌کنه! حتماً جواب‌ها رو چک کن.
                </Typography>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotMessageWelcoming;
