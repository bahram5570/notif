import { MAX_SCREEN_WIDTH } from '../../../constants/app.constants';
import useCalendarDateFormat from '../../../hooks/useCalendarDateFormat';
import { CustomImage } from '../../ui/CustomImage';
import { CustomTypography } from '../../ui/CustomTypography';
import { BackButton } from './BackButton';
import { ProgressBar } from './ProgressBar';
import { ChallengeChatHeaderPropsType } from './type';

export const ChallengeChatHeader = ({
  partnerAvatar,
  partnerName,
  createTime,
  progress,
  avatar,
}: ChallengeChatHeaderPropsType) => {
  const { currentDate } = useCalendarDateFormat({ date: createTime });

  return (
    <div
      className="flex items-end flex-col w-full backdrop-blur-md py-4 px-2 gap-4 mx-auto fixed top-0 left-0 right-0 z-40 "
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="flex px-4 py-2 w-full justify-end">
        <div className="flex items-center gap-4 min-w-fit">
          <div className="flex flex-row-reverse gap-2 items-center">
            <CustomImage src={partnerAvatar} width={40} height={40} className="rounded-full !object-cover" />
            <div className="flex flex-col items-end justify-end">
              <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Title_Small">
                {partnerName}
              </CustomTypography>
              <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Small">
                {`تاریخ شروع چت :${currentDate}`}
              </CustomTypography>
            </div>
          </div>
          <BackButton />
        </div>
      </div>
      <ProgressBar progress={progress} avatar={avatar} partnerAvatar={partnerAvatar} />
    </div>
  );
};
