import { formatPersionDate } from './utils';
import HamdelIcon from '@assets/shared/icons/hamdel.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toPersianNumbers } from '@repo/core/utils/numbers';

import { MessageItemPropsType } from './type';

const MessageItem = ({ fromMan, text, createTime }: MessageItemPropsType) => {
  const date = new Date(createTime);
  const currentDate = toPersianNumbers(formatPersionDate(date));

  return (
    <>
      {!fromMan && (
        <div className=" flex gap-2 px-2 items-center  absolute -top-[6px] right-6 bg-impo_Neutral_Background">
          <CustomTypography fontSize="Lable_Medium" className="text-right w-full text-impo_Neutral_OnBackground">
            پیام همدل شما
          </CustomTypography>

          <HamdelIcon className="w-[18px] h-[18px] stroke-impo_Primary_Primary" />
        </div>
      )}
      <div className="flex flex-col justify-between h-full p-1 gap-3">
        <CustomTypography
          fontSize="Body_Small"
          className={`text-justify w-full p-1 break-words text-impo_Neutral_OnBackground ${!fromMan && 'mt-1'}`}
        >
          {text}
        </CustomTypography>
        <CustomTypography fontSize="Body_Small" className="text-impo_Surface_Outline">
          {currentDate}
        </CustomTypography>
      </div>
    </>
  );
};

export default MessageItem;
