import chatbotJson from '@assets/lottie/chatbot.json';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import Dark_Spinner from '@components/ui/Dark_Spinner';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useWidgetActions from '@hooks/useWidgetActions';
import { LottieJson } from '@lib/LottieJson';

import TypingLoop from './TypingLoop';
import { ChatbotNavbarModePropsType } from './type';

const ChatbotNavbarMode = ({
  continueChatText,
  goToChatAction,
  collapseText1,
  collapseText2,
}: ChatbotNavbarModePropsType) => {
  const { actionHandler } = useWidgetActions();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isLoading = pageNavigationLoading === 'aiChatbot';

  const onClick = () => {
    actionHandler(goToChatAction);
    pageNavigationHandler({ id: 'aiChatbot', showProgressBar: false });
  };
  return (
    <div
      className="relative w-full h-full rounded-[100px] flex flex-row-reverse gap-2 items-center p-2 mt-4"
      style={{ background: 'linear-gradient(to right, #FFB7C9, #B5D3FF)' }}
    >
      <div>
        <div className="w-12 h-12 rounded-full bg-impo_White">
          <LottieJson animationData={chatbotJson} loop={true} />
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-row-reverse gap-2 w-full justify-between">
          <TypingLoop collapseText1={collapseText1} collapseText2={collapseText2} />
        </div>
      </div>

      <div className="w-full flex ">
        <div onClick={onClick}>
          <div className="flex flex-row items-center gap-1 justify-center w-full h-[30px] mt-auto">
            <div className="px-4 py-2 flex justify-center items-center rounded-full w-full bg-impo_Primary_Primary">
              {isLoading ? (
                <Dark_Spinner size={24} className="border-impo_Neutral_Background" />
              ) : (
                <CustomTypography fontSize="Lable_Large" className="text-impo_Primary_OnPrimary">
                  {continueChatText}
                </CustomTypography>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotNavbarMode;
