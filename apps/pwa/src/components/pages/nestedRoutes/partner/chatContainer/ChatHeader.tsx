import ArrowIcon from '@assets/shared/icons/arrow.svg';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import useCalendarDateFormat from '../__hooks__/useCalendarDateFormat';
import ProgressBar from './ProgressBar';
import { ChatHeaderPropsType } from './type';

const ChatHeader = ({ createTime, partnerAvatar, partnerName, progress, avatar }: ChatHeaderPropsType) => {
  const { currentDate } = useCalendarDateFormat({ date: createTime });
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();

  const onClick = () => {
    pageNavigationHandler({ linkTo: -1, id: 'back' });
  };

  return (
    <div
      className="flex items-end flex-col w-full backdrop-blur-md py-4 px-2 gap-4 mx-auto fixed top-0 left-0 right-0 z-40 "
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="flex px-4 py-2 w-full justify-end">
        <div className="flex items-center gap-4 min-w-fit">
          <div className="flex flex-row-reverse gap-2 items-center">
            <CustomImage_NEW
              src={partnerAvatar || '/assets/images/man.webp'}
              width={40}
              height={40}
              className="rounded-full !object-cover"
            />
            <div className="flex flex-col items-end justify-end">
              <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Title_Small">
                {partnerName}
              </CustomTypography>
              <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Small">
                {`تاریخ شروع چت :${currentDate}`}
              </CustomTypography>
            </div>
          </div>

          <div className="cursor-pointer flex justify-center items-center w-8 h-8" onClick={onClick}>
            {navigationLoadingId === 'back' && <CustomSpinner size={28} className="border-impo_Surface_Outline" />}
            {navigationLoadingId !== 'back' && (
              <ArrowIcon className="w-6 h-full stroke-2 stroke-impo_Surface_Outline" />
            )}
          </div>
        </div>
      </div>
      <ProgressBar progress={progress} avatar={avatar} partnerAvatar={partnerAvatar} />
    </div>
  );
};

export default ChatHeader;
