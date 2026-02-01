import TickIcon from '@assets/icons/tick.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toPersianNumbers } from '@utils/numbers';

import CustomImage from '@components/ui/CustomImage';
import Dark_Spinner from '@components/ui/Dark_Spinner';

import { SideEnum } from './constants';
import { MessagePropsType } from './type';

const Message = ({ createTime, side, text, partnerAvatar, id }: MessagePropsType) => {
  const date = createTime ? new Date(createTime) : new Date();
  const currentDate = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className={`flex flex-col gap-4  ${side === SideEnum.Partner ? 'items-start ml-4' : 'items-end mr-4'}`}>
      <div className="flex gap-1">
        {side === SideEnum.Partner && (
          <div className="flex items-end">
            <CustomImage src={partnerAvatar} width={32} height={30} className="rounded-full !object-cover" />
          </div>
        )}
        <div
          className={`max-w-[250px] h-auto rounded-2xl ${side === SideEnum.Partner ? ' mb-4 border border-impo_Surface_SurfaceVariant' : 'mb-2'}  ${side === SideEnum.Self ? 'bg-[linear-gradient(110.42deg,#FFCEDD_3.32%,#F24F7A_99.1%)]' : 'bg-impo_Surface_SurfaceVariant'}`}
        >
          <div className="flex flex-col gap-1 p-2">
            <CustomTypography
              fontSize="Body_Small"
              className={`text-justify ${side === SideEnum.Partner ? 'text-impo_Neutral_OnBackground' : 'text-impo_White'}`}
            >
              {text}
            </CustomTypography>

            <div className="flex items-center w-full justify-end gap-1">
              <CustomTypography
                fontSize="Lable_Small"
                className={` ${side === SideEnum.Partner ? 'text-impo_Neutral_OnBackground' : 'text-impo_White'}`}
              >
                {toPersianNumbers(currentDate)}
              </CustomTypography>

              {id === '' ? (
                <Dark_Spinner size={16} className="border-impo_Neutral_Surface" />
              ) : (
                <TickIcon
                  className={`w-4 h-4 ${side === SideEnum.Partner ? 'stroke-impo_Neutral_OnBackground' : 'stroke-impo_White'}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
