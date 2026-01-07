import { formatPersionDate } from '../../utils';
import HamdelIcon from '@assets/icons/hamdel.svg';
import { toPersianNumbers } from '@utils/numbers';

import Dark_Typography from '@components/ui/Dark_Typography';

import { MessageItemPropsType } from './type';

const MessageItem = ({ fromMan, text, createTime }: MessageItemPropsType) => {
  const date = new Date(createTime);
  const currentDate = toPersianNumbers(formatPersionDate(date));

  return (
    <>
      {fromMan && (
        <div className=" flex gap-2 px-2 items-center  absolute -top-[6px] right-6 bg-impo_Neutral_Background">
          <Dark_Typography fontSize="Lable_Medium" className="text-right w-full text-impo_Neutral_OnBackground">
            پیام همدل شما
          </Dark_Typography>

          <HamdelIcon className="w-[18px] h-[18px] stroke-impo_PrimaryMan_PrimaryMan" />
        </div>
      )}
      <div className="flex flex-col justify-between h-full p-1 gap-3">
        <Dark_Typography
          fontSize="Body_Small"
          className={`text-justify w-full p-1 break-words text-impo_Neutral_OnBackground ${fromMan && 'mt-1'}`}
        >
          {text}
        </Dark_Typography>
        <Dark_Typography fontSize="Body_Small" className="text-impo_Surface_Outline">
          {currentDate}
        </Dark_Typography>
      </div>
    </>
  );
};

export default MessageItem;
