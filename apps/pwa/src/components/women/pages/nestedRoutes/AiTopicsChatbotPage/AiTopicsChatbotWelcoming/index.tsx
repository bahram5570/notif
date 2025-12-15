import { useState } from 'react';

import { removeWelcomingHandler } from '@utils/aiChatBotWelcoming';
import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import AiChatbotWelcomingLayout from '@components/ui/__AiChatbot__/AiChatbotWelcomingLayout';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useWidgetActions from '@hooks/useWidgetActions';

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
          <div className="px-6 flex flex-col gap-12  glass-card shadow-lg rounded-[32px] pt-6 pb-8 ">
            {isLoading && <TopicsChatbotWelcomingSkeleton />}
            {!isLoading && (
              <>
                <div className=" flex flex-col gap-3">
                  <div className="flex flex-col justify-end items-end gap-1">
                    <Typography scale="Title" size="Large">
                      {data?.title}
                    </Typography>
                  </div>
                  <Typography scale="Body" size="Medium">
                    {data?.description}
                  </Typography>
                </div>
                <Button
                  variant="fill"
                  size="large"
                  color="FREE-STYLES"
                  contentsColor={colorFormatConverter(data?.button.foregroundColor || '')}
                  buttonColor={colorFormatConverter(data?.button.backgroundColor || '')}
                  onClick={onClick}
                  fullWidth
                >
                  <Typography scale="Lable" size="Large" color="White">
                    {data?.button.text}
                  </Typography>
                </Button>
              </>
            )}
          </div>
        </div>
      </AiChatbotWelcomingLayout>
    </>
  );
};

export default AiTopicsChatbotWelcoming;
