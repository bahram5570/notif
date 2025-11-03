import { useState } from 'react';

import ArrowRightIcon from '@assets/icons/ArrowRight.svg';
import DotIcon from '@assets/icons/MenuDots.svg';
import chatbotJson from '@assets/lottie/chatbot.json';

import CustomImage from '@components/ui/CustomImage';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';

import { WelcomingTypeEnum } from '../WelcomingContainer/enum';
import MoreActionsMenu from './MoreActionsMenu';
import MoreActionMenuModals from './MoreActionsMenu/MoreActionMenuModals';
import { AiChatbotHeaderPropsType } from './type';

const AiChatbotHeader = ({ welcomingType, chatId, showActionMenu }: AiChatbotHeaderPropsType) => {
  const { colors } = useTheme();

  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const [isOpen, setIsOpen] = useState(false);

  const id = `AiChatbotHeaderRouteBack`;

  const clickHandler = () => {
    if (!pageNavigationLoading) {
      pageNavigationHandler({ showProgressBar: false, linkTo: -1, id });
    }
  };

  const closeHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`fixed left-0 right-0 top-0 mx-auto flex z-40 `}
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: HEADER_HEIGHT }}
    >
      <div className={`flex w-full ${showActionMenu ? 'justify-between' : 'justify-end'}  items-end px-4 pt-3`}>
        {showActionMenu && (
          <div
            className="flex justify-center items-center w-12 h-12 rounded-full glass-card !bg-white/70 cursor-pointer shadow-sm"
            onClick={closeHandler}
          >
            <DotIcon className="w-6 h-6" style={{ fill: colors.Surface_InverseSurface }} />
          </div>
        )}

        <div className="flex justify-center items-center gap-2">
          {showActionMenu && (
            <div className="flex flex-row-reverse items-center gap-2 rounded-full pl-6 py-1 pr-4 glass-card !bg-white/70 shadow-sm">
              <CustomImage src="/assets/images/mones.webp" width={32} height={32} />
              {/* <LottieJson animationData={chatbotJson} loop={false} autoPlay={false} className="!w-9" /> */}
              <div className="flex flex-col justify-center items-end">
                <Typography scale="Lable" size="Large">
                  مونس
                </Typography>
                <Typography scale="Body" size="Small" color="Surface_InverseSurface">
                  دستیار هوش مصنوعی
                </Typography>
              </div>
            </div>
          )}

          <div
            className="cursor-pointer flex justify-center items-center  w-12 h-12 rounded-full glass-card  !bg-white/70 shadow-sm"
            onClick={clickHandler}
          >
            {pageNavigationLoading === id && <Spinner color="outline" width={28} />}
            {pageNavigationLoading !== id && (
              <ArrowRightIcon className="w-6 h-full stroke-2" style={{ fill: colors.Surface_InverseSurface }} />
            )}
          </div>
        </div>
      </div>

      <MoreActionsMenu isOpen={isOpen} closeHandler={closeHandler} welcomingType={welcomingType} />
      <MoreActionMenuModals chatId={chatId} />
    </div>
  );
};

export default AiChatbotHeader;
