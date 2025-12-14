import { useState } from 'react';

import AiIcon from '@assets/icons/aibg.svg';

import Typography from '@components/ui/Typography';
import AiChatbotWelcomingLayout from '@components/ui/__AiChatbot__/AiChatbotWelcomingLayout';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import DefaultQuestionList from './DefaultQuestionList';
import { AiChatbotEmptyStatePropsType } from './type';

const AiChatbotEmptyState = (props: AiChatbotEmptyStatePropsType) => {
  const [top, setTop] = useState<number>(0);

  const updateTopHandler = (v: number) => {
    setTop(v);
  };

  return (
    <AiChatbotWelcomingLayout updateTopHandler={updateTopHandler}>
      <div className=" absolute w-full mx-auto" style={{ top, maxWidth: MAX_SCREEN_WIDTH }}>
        <div className=" relative  w-full h-full">
          <AiIcon className="w-full " />
          <div className="px-6 flex flex-col gap-6  absolute top-10  pt-9 w-full">
            <div className=" flex flex-col gap-2 justify-center items-center px-2">
              <Typography scale="Title" size="Large" textAlign="center">
                {props.title}
              </Typography>
              <Typography scale="Body" size="Medium" textAlign="center">
                {props.description}
              </Typography>
            </div>
            <DefaultQuestionList defaultQustionHandler={props.defaultQustionHandler} questions={props.questions} />
          </div>
        </div>
      </div>
    </AiChatbotWelcomingLayout>
  );
};

export default AiChatbotEmptyState;
