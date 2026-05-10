import { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@assets/shared/icons/calendarArrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { LandingFaqGeneratorTypes } from './types';

const LandingFaqGenerator = ({ title, description, isSelected, selectHandler }: LandingFaqGeneratorTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;

    if (el) {
      const extraSpace = 8;
      setMaxHeight(el.scrollHeight + extraSpace);
    }
  }, [ref.current?.scrollHeight]);

  return (
    <div
      onClick={selectHandler}
      className={`
                  flex
                  justify-between items-start
                  w-full 
                  p-4
                  rounded-xl 
                  border-[1px] 
                  border-impo_Primary_Primary
                  bg-impo_Pink_50 
                  dark:bg-impo_Surface_SurfaceVariant 
                  cursor-pointer
                `}
    >
      <div className="flex flex-col gap-1">
        <CustomTypography tagType="h3" fontSize="Lable_Medium" className="!text-impo_Neutral_OnBackground">
          {title}
        </CustomTypography>

        <div
          ref={ref}
          className="w-full duration-500 overflow-hidden"
          style={{ maxHeight: isSelected ? maxHeight : 0 }}
        >
          <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnBackground">
            {description}
          </CustomTypography>
        </div>
      </div>

      <ArrowIcon
        className={`
                    w-5 
                    min-w-5
                    h-auto
                    stroke-impo_Surface_Outline 
                    duration-500 
                    ${isSelected ? '-rotate-90' : 'rotate-0'}
                  `}
      />
    </div>
  );
};

export default LandingFaqGenerator;
