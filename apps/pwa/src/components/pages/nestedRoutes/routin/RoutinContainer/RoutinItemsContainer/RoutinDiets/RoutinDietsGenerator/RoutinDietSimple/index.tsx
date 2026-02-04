import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { textShorter } from '@repo/core/utils/scripts';

import { RoutinDietsSimplePropsType } from './type';

const RoutinDietsSimple = ({ item, onClick }: RoutinDietsSimplePropsType) => {
  return (
    <div className="flex flex-row-reverse justify-between items-center">
      <div className="w-full flex items-center justify-end gap-[10px] cursor-pointer" onClick={onClick}>
        <div className="flex flex-col items-end gap-1">
          <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
            {item.title}
          </CustomTypography>
          <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {textShorter(item.subtitle, 40)}
          </CustomTypography>
        </div>

        <div className="relative w-12 h-12 min-w-12 min-h-12 rounded-full">
          <div className={`w-full h-full rounded-xl  overflow-hidden`}>
            <CustomImage src={item.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutinDietsSimple;
