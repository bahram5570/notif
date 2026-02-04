import { useState } from 'react';

import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { removeWelcomingHandler } from '@utils/aiChatBotWelcoming';

import AiChatbotWelcomingLayout from '@components/ui/__AiChatbot__/AiChatbotWelcomingLayout';
import useWidgetActions from '@hooks/useWidgetActions';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import TopicsChatbotWelcomingSkeleton from './TopicsChatbotWelcomingSkeleton';
import useGetData from './__hooks__/useGetData';
import { TopicsChatbotWelcomingPropsType } from './type';

const AiTopicsChatbotWelcoming = ({ onUpdateKeyHandler }: TopicsChatbotWelcomingPropsType) => {
  const { data, isLoading } = useGetData();
  const { actionHandler } = useWidgetActions();
  const [top, setTop] = useState<number>(0);

  const updateTopHandler = (v: number) => {
    setTop(v);
  };

  const onClick = () => {
    // callEvent('ChatbotInteractionClick');
    if (data) {
      actionHandler(data.button.action);

      setTimeout(() => {
        removeWelcomingHandler();
        onUpdateKeyHandler();
      }, 3000);
    }
  };

  return (
    <>
      <AiChatbotWelcomingLayout updateTopHandler={updateTopHandler}>
        <div className="absolute mx-auto   left-0 right-0 bottom-0 px-5 " style={{ maxWidth: MAX_SCREEN_WIDTH, top }}>
          <div className="px-6 flex flex-col gap-12  glass-card  shadow-lg rounded-[32px] pt-6 pb-8 ">
            {isLoading && <TopicsChatbotWelcomingSkeleton />}
            {!isLoading && (
              <>
                <div className=" flex flex-col gap-3">
                  <div className="flex flex-col justify-end items-end gap-1">
                    <CustomTypography fontSize="Title_Large" className="text-impo_Neutral_OnBackground">
                      {data?.title}
                    </CustomTypography>
                  </div>
                  <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                    {data?.description}
                  </CustomTypography>
                </div>
                <CustomButton
                  // contentsColor={colorFormatConverter(data?.button.foregroundColor || '')}
                  // buttonColor={colorFormatConverter(data?.button.backgroundColor || '')}
                  onClick={onClick}
                >
                  <CustomTypography fontSize="Lable_Large" className="text-impo_White">
                    {data?.button.text}
                  </CustomTypography>
                </CustomButton>
              </>
            )}
          </div>
        </div>
      </AiChatbotWelcomingLayout>
    </>
  );
};

export default AiTopicsChatbotWelcoming;
