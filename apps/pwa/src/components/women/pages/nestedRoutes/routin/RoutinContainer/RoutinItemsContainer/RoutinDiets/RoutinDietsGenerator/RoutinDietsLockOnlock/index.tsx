import LockIcon from '@assets/icons/LockKeyhole.svg';
import TickIcon from '@assets/icons/tickIcon.svg';
import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import { ProgramWidgetItemStatusEnum } from '@components/women/pages/nestedRoutes/routin/enum';

import { RoutinDietsLockOnlockPropsType } from './type';

const RoutinDietsLockOnlock = ({ item, onClick }: RoutinDietsLockOnlockPropsType) => {
  return (
    <div className="flex flex-row-reverse justify-between items-center">
      <div className="w-full flex items-center justify-end gap-[10px] cursor-pointer" onClick={onClick}>
        <div className="flex flex-col items-end gap-1">
          <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
            {item.title}
          </Dark_Typography>
          <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {textShorter(item.subtitle, 40)}
          </Dark_Typography>
        </div>

        <div className="relative w-12 h-12 min-w-12 min-h-12 rounded-full">
          <div
            className={`w-full h-full rounded-xl ${item.status === ProgramWidgetItemStatusEnum.locked ? 'blur-[1px]' : ''} overflow-hidden`}
          >
            <CustomImage src={item.image} />
          </div>
        </div>
      </div>
      {item.status === ProgramWidgetItemStatusEnum.locked && (
        <LockIcon className="w-6 h-auto stroke-impo_Surface_OutlineVariant" />
      )}
      {item.status === ProgramWidgetItemStatusEnum.Compelet && (
        <TickIcon className="w-6 h-auto fill-impo_Success_Success" />
      )}
    </div>
  );
};

export default RoutinDietsLockOnlock;
