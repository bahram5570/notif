import { useState } from 'react';

import ArrowRightIcon from '@assets/icons/ArrowRight.svg';
import DotIcon from '@assets/icons/MenuDots.svg';
import chatbotJson from '@assets/lottie/chatbot.json';

import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';

import { WelcomingTypeEnum } from '../WelcomingContainer/enum';
import MoreActionsMenu from './MoreActionsMenu';
import { AiChatbotHeaderPropsType } from './type';

const AiChatbotHeader = ({ welcomingType }: AiChatbotHeaderPropsType) => {
  const { colors } = useTheme();

  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const [isOpen, setIsOpen] = useState(false);

  const id = `AiChatbotHeaderRouteBack`;

  const clickHandler = () => {
    if (!pageNavigationLoading) {
      pageNavigationHandler({ showProgressBar: false, linkTo: -1, id });
    }
  };

  const openHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`fixed left-0 right-0 top-0 mx-auto flex z-40`}
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: HEADER_HEIGHT }}
    >
      <div
        className={`flex w-full ${welcomingType !== WelcomingTypeEnum.TopicsPage ? 'justify-between' : 'justify-end'}  items-center px-4 py-3`}
      >
        {welcomingType !== WelcomingTypeEnum.TopicsPage && (
          <div
            className="flex justify-center items-center w-12 h-12 rounded-full glass-card cursor-pointer shadow-lg"
            onClick={openHandler}
          >
            <DotIcon className="w-6 h-6" style={{ fill: colors.Surface_InverseSurface }} />
          </div>
        )}

        <div className="flex justify-center items-center gap-2">
          {welcomingType !== WelcomingTypeEnum.TopicsPage && (
            <div className="flex flex-row-reverse rounded-full pl-6 py-1 pr-4 glass-card shadow-lg">
              <LottieJson animationData={chatbotJson} loop={false} autoPlay={false} className="!w-9" />
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
            className="cursor-pointer flex justify-center items-center  w-12 h-12 rounded-full glass-card shadow-lg"
            onClick={clickHandler}
          >
            {pageNavigationLoading === id && <Spinner color="outline" width={28} />}
            {pageNavigationLoading !== id && (
              <ArrowRightIcon className="w-6 h-full stroke-2" style={{ fill: colors.Surface_Outline }} />
            )}
          </div>
        </div>
      </div>

      <MoreActionsMenu isOpen={isOpen} openHandler={openHandler} />
    </div>
  );
};

export default AiChatbotHeader;
