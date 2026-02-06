import InfoIcon from '@assets/shared/icons/infoIcon.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import { CHAT_HEADING_HEIGHT } from '../constants';

const ChatHeading = () => {
  return (
    <div
      style={{ top: HEADER_HEIGHT, maxWidth: MAX_SCREEN_WIDTH, height: CHAT_HEADING_HEIGHT }}
      className="fixed left-0 right-0 w-full px-5 pt-2 mx-auto bg-impo_Neutral_Background z-20"
    >
      <div className="flex items-center justify-end gap-2 border-[1px] rounded-lg border-impo_Yellow_500 p-3 h-fit">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          مکالمات شما با حفظ حریم شخصی ثبت میشن
        </CustomTypography>

        <div className="w-[1px] h-[32px] bg-impo_Neutral_Surface" />

        <InfoIcon className="w-6 h-auto fill-impo_Yellow_500" />
      </div>
    </div>
  );
};

export default ChatHeading;
