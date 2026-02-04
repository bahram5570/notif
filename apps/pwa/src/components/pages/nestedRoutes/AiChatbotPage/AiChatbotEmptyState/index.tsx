import { useState } from 'react';

import AiIcon from '@assets/icons/aibg.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import AiChatbotWelcomingLayout from '@components/ui/__AiChatbot__/AiChatbotWelcomingLayout';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

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
          <AiIcon className="w-full dark:hidden " />
          <div className="px-6 flex flex-col gap-6  absolute top-10  pt-9 w-full">
            <div className=" flex flex-col gap-2 justify-center items-center px-2 dark:mt-9">
              <CustomTypography fontSize="Title_Large" className="text-center text-impo_Neutral_OnBackground">
                {props.title}
              </CustomTypography>
              <CustomTypography fontSize="Body_Medium" className="text-center text-impo_Neutral_OnBackground">
                {props.description}
              </CustomTypography>
            </div>
            <DefaultQuestionList defaultQustionHandler={props.defaultQustionHandler} questions={props.questions} />
          </div>
        </div>
      </div>
    </AiChatbotWelcomingLayout>
  );
};

export default AiChatbotEmptyState;
