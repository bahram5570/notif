import { memo } from 'react';

import SelectedIcon from '@assets/shared/icons/selectedTick.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import useSignIcon from './__hooks__/useSignIcon';
import useSignSelected from './__hooks__/useSignSelected';
import { ICONS_WIDTH, SIGNS_LIST } from './constants';
import { SignGeneratorProps } from './types';

const SignGenerator = ({ category, sign, initialIsSelected, onSelect, selectedDate }: SignGeneratorProps) => {
  const { callEvent } = useAnalytics();

  const { icon } = useSignIcon({ category, sign });
  const { isSelected, isSelectedHandler } = useSignSelected({
    sign,
    category,
    onSelect,
    initialIsSelected,
  });

  const title = SIGNS_LIST?.[category]?.signs?.[sign]?.title || '';

  const clickHandler = () => {
    isSelectedHandler();
    callEvent('SexTrackerSubmitFrom_signs');
  };

  return (
    <div className="cursor-pointer" onClick={clickHandler}>
      <div className="flex flex-col items-center gap-2 pointer-events-none ">
        <div
          style={{
            // width: ICONS_WIDTH,
            // height: ICONS_WIDTH,
            minWidth: ICONS_WIDTH,
            minHeight: ICONS_WIDTH,
          }}
          className={`
                      relative 
                      flex 
                      justify-center 
                      items-center 
                      border-[1px] 
                      rounded-full 
                      bg-impo_White
                      ${isSelected ? 'border-impo_Primary_Primary' : 'border-impo_Grey_200 dark:border-impo_Grey_800'}
                    `}
        >
          <>{icon}</>

          {isSelected && <SelectedIcon className="absolute -left-1 -bottom-1 w-6 h-auto" />}
        </div>

        <CustomTypography fontSize="Body_Small" className="text-center text-impo_Neutral_OnBackground">
          {title}
        </CustomTypography>
      </div>
    </div>
  );
};

export default memo(SignGenerator, () => {
  return true;
});
