import TickIcon from '@assets/icons/tick.svg';
import { toPersianNumbers } from '@utils/numbers';

import Dark_Typography from '@components/ui/Dark_Typography';

import { SideEnum } from './constants';
import { MessagePropsType } from './type';

const Message = ({ createTime, side, text }: MessagePropsType) => {
  const date = createTime ? new Date(createTime) : new Date();
  const currentDate = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className={`flex flex-col gap-4  ${side === SideEnum.Partner ? 'items-start ml-4' : 'items-end mr-4'}`}>
      <div className="flex gap-1">
        <div
          style={{
            background: `${side === SideEnum.Self ? 'linear-gradient(110.42deg, #FFCEDD 3.32%, #F24F7A 99.1%)' : ''}`,
          }}
          className={`max-w-[250px] h-auto rounded-2xl ${side === SideEnum.Partner ? ' mb-4 border border-impo_Surface_SurfaceVariant !bg-impo_Surface_SurfaceVariant' : 'mb-2'}`}
        >
          <div className="flex flex-col gap-1 p-2">
            <Dark_Typography
              fontSize="Body_Small"
              className={`text-justify ${side === SideEnum.Partner ? 'text-impo_Neutral_OnBackground' : 'text-impo_White'}`}
            >
              {text}
            </Dark_Typography>

            <div className="flex items-center w-full justify-end gap-1">
              <Dark_Typography
                fontSize="Lable_Small"
                className={`text-justify ${side === SideEnum.Partner ? 'text-impo_Neutral_OnBackground' : 'text-impo_White'}`}
              >
                {toPersianNumbers(currentDate)}
              </Dark_Typography>

              <TickIcon
                className={`w-4 h-4 ${side === SideEnum.Partner ? 'stroke-impo_Neutral_OnBackground' : 'stroke-impo_White'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
