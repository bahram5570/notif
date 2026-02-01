import { useEffect, useRef, useState } from 'react';

import CheckIcon from '@assets/icons/check.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ItemGeneratorProps } from './types';

const ItemGenerator = ({ option, isSelected, selectedItemHandler }: ItemGeneratorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState('0px');

  useEffect(() => {
    setDescriptionHeight((ref.current?.clientHeight || 0) + 6 + 'px');
  }, []);

  return (
    <div
      onClick={() => selectedItemHandler({ selectedIndex: option.index, isSingleSelect: option.isSingleSelect })}
      data-testid={`radioItem_binary_${option.index}`}
      aria-checked={isSelected}
    >
      <div
        className={`
                    w-full 
                    h-fit 
                    p-4 
                    pointer-events-none
                    rounded-xl 
                    border-[1px] 
                    ${
                      isSelected
                        ? 'bg-impo_Pink_50 dark:bg-impo_Surface_SurfaceVariant border-impo_Primary_Primary'
                        : 'bg-impo_Neutral_Surface border-impo_Transparent'
                    }
                  `}
      >
        <div className="flex justify-end items-center gap-2">
          <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
            {option.text}
          </CustomTypography>

          <div
            className={`
                        relative 
                        w-5 
                        h-5 
                        min-w-5 
                        min-h-5 
                        rounded-full 
                        border-[1px] 
                        overflow-hidden
                        ${isSelected ? 'border-impo_Primary_Primary' : 'border-impo_Surface_OutlineVariant'}
                      `}
          >
            {isSelected && (
              <>
                {!option.isSingleSelect && (
                  <div className="absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] bg-impo_White">
                    <CheckIcon className="w-full h-auto" />
                  </div>
                )}

                {option.isSingleSelect && (
                  <div className="absolute top-[3px] left-[3px] right-[3px] bottom-[3px] rounded-full bg-impo_Primary_Primary m-auto" />
                )}
              </>
            )}
          </div>
        </div>

        <div
          style={{ height: `${option.description && isSelected ? descriptionHeight : 0}` }}
          className={`w-full overflow-hidden transition-all ease-in-out duration-200`}
        >
          <div ref={ref} className="w-full flex flex-col items-end">
            <div className={`w-full h-[1px] my-2 mr-7 bg-impo_Surface_OutlineVariant`} />

            <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground mr-7">
              {option.description}
            </CustomTypography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemGenerator;
