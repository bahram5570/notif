import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import RoutinDietsGenerator from './RoutinDietsGenerator';
import { RoutinDietsProps } from './types';

const RoutinDiets = ({ name, items }: RoutinDietsProps) => {
  return (
    <>
      <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground pb-3 ml-auto">
        {name}
      </CustomTypography>

      {items.map((item, index) => {
        const lastItem = index === items.length - 1;
        return (
          <div key={index}>
            {index > 0 && <div className="w-full h-[1px] my-3 bg-impo_Surface_SurfaceVariant" />}

            <RoutinDietsGenerator item={item} index={index} isLastItem={lastItem} />
          </div>
        );
      })}
    </>
  );
};

export default RoutinDiets;
