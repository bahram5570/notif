import Icon from '@assets/icons/Generate B.svg';
import { removeWelcomingHandler } from '@utils/aiChatBotWelcoming';
import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useWidgetActions from '@hooks/useWidgetActions';

import useGetData from './__hooks__/useGetData';

const TopicsChatbotWelcoming = ({ top, onUpdateKeyHandler }: { top: number; onUpdateKeyHandler: any }) => {
  const { data, isLoading } = useGetData();
  const { actionHandler } = useWidgetActions();

  const onClick = () => {
    // callEvent('ChatbotInteractionClick');
    if (data) {
      actionHandler(data.button.action);
      removeWelcomingHandler();
      onUpdateKeyHandler();
    }
  };

  return (
    <div className="absolute mx-auto   left-0 right-0 bottom-0 px-5 " style={{ maxWidth: MAX_SCREEN_WIDTH, top }}>
      <div className="px-6 flex flex-col gap-14  glass-card shadow-lg rounded-[32px] pt-6 pb-8 ">
        <div className=" flex flex-col gap-3">
          <div className="flex flex-col justify-end items-end gap-1">
            <Typography scale="Title" size="Large">
              {data?.title}
            </Typography>
          </div>
          <Typography scale="Body" size="Medium" textAlign="justify">
            {data?.description}
          </Typography>
        </div>

        <Button
          variant="fill"
          size="medium"
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
      </div>
    </div>
  );
};

export default TopicsChatbotWelcoming;
