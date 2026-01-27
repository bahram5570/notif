import { useEffect, useRef, useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { RadioGeneratorProps } from './types';

const RadioGenerator = ({ option, selectedItem, selectedItemHandler }: RadioGeneratorProps) => {
  const isChecked = selectedItem === option.id;

  const ref = useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState('0px');

  useEffect(() => {
    const containerHeight = ref.current?.clientHeight;
    setDescriptionHeight((containerHeight ? containerHeight + 6 : 0) + 'px');
  }, []);

  const height = option.icon ? 'initial' : `${option.description && isChecked ? descriptionHeight : 0}`;

  return (
    <div onClick={() => selectedItemHandler(option.id)} data-testid={`radioItem_${option.id}`} aria-checked={isChecked}>
      <div
        className={`
                    w-full 
                    h-fit 
                    p-4 
                    flex 
                    justify-between 
                    items-center 
                    gap-1 
                    pointer-events-none
                    border-[1px] 
                    rounded-xl 
                    ${
                      isChecked
                        ? 'bg-impo_Pink_50 dark:bg-impo_Surface_SurfaceVariant border-impo_Primary_Primary'
                        : 'bg-impo_Neutral_Surface border-impo_Transparent'
                    }
                  `}
      >
        {option.icon && (
          <div className="relative w-[84px] h-[84px] min-w-[84px] min-h-[84px]">
            <CustomImage src={option.icon} />
          </div>
        )}

        <div className="w-full flex flex-col gap-1">
          <div className="flex justify-end items-start gap-2">
            <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
              {option.text}
            </Dark_Typography>

            <div
              className={`
                          relative 
                          w-5 
                          h-5 
                          min-w-5 
                          min-h-5 
                          rounded-full 
                          border-[1px]
                          ${isChecked ? 'border-impo_Primary_Primary' : 'border-impo_Surface_OutlineVariant'}
                        `}
            >
              {isChecked && (
                <div className="absolute top-[3px] left-[3px] right-[3px] bottom-[3px] rounded-full bg-impo_Primary_Primary m-auto" />
              )}
            </div>
          </div>

          <div style={{ height }} className={`w-full overflow-hidden transition-all ease-in-out duration-200`}>
            <div ref={ref} className="w-full flex flex-col items-end">
              <div
                className={`w-full h-[1px] mr-7 ${option.icon ? 'bg-impo_Transparent my-0.5' : 'bg-impo_Surface_OutlineVariant my-2'}`}
              />

              <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground mr-7">
                {option.description}
              </Dark_Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioGenerator;
