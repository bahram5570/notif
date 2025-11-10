import AiIcon from '@assets/icons/aibg.svg';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import { ChatbotMessageWelcomingPropsType } from './type';

const ChatbotMessageWelcoming = ({
  top,
  title,
  description,
  questions,
  defaultQustionHandler,
}: ChatbotMessageWelcomingPropsType) => {
  const onClick = (question: string) => {
    defaultQustionHandler(question);
  };

  return (
    <div className=" absolute w-full mx-auto" style={{ top, maxWidth: MAX_SCREEN_WIDTH }}>
      <div className=" relative  w-full h-full">
        <AiIcon className="w-full " />
        <div className="px-6 flex flex-col gap-6  absolute top-10  pt-9 w-full">
          <div className=" flex flex-col gap-2 justify-center items-center px-2">
            <Typography scale="Title" size="Large" textAlign="center">
              {title}
            </Typography>
            <Typography scale="Body" size="Medium" textAlign="center">
              {description}
            </Typography>
          </div>
          <div className="flex flex-col items-center p-0 gap-2 flex-none order-1 self-stretch flex-grow-0">
            {Array.from({ length: Math.ceil(questions.length / 2) }, (_, rowIndex) => {
              const rowQuestions = questions.slice(rowIndex * 2, rowIndex * 2 + 2);
              return (
                <div
                  key={rowIndex}
                  className="flex flex-row gap-2 items-center flex-none justify-center order-0 self-stretch flex-grow-0"
                >
                  {rowQuestions.map((question, index) => (
                    <div
                      className="glass-card w-fit justify-center items-center rounded-full flex flex-col"
                      key={index}
                      onClick={() => onClick(question)}
                    >
                      <Typography size="SmallProminet" scale="Lable" color="Surface_InverseSurface" className="p-2">
                        {question}
                      </Typography>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotMessageWelcoming;
