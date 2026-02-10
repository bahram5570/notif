import { Fragment } from 'react';

import TickIcon from '@assets/shared/icons/selectedTick.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useOverflowHandler } from '@repo/core/hooks/useOverflowHandler';

import { StylesFilterGeneratorProps } from './types';

const StylesFilterGenerator = ({ value, list, onSelect }: StylesFilterGeneratorProps) => {
  useOverflowHandler();

  const updatedList = Object.entries(list);

  return (
    <>
      {updatedList.map((mainItem, mainIndex) => {
        const mainTitle = mainItem[0];
        const items = mainItem[1].items;
        const isFirstItem = mainIndex === 0;

        return (
          <Fragment key={mainIndex}>
            {!isFirstItem && <div className="w-full h-[1px] my-1 bg-impo_Neutral_Surface" />}

            <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground pb-1">
              {mainTitle}
            </CustomTypography>

            {items.map((item, index) => {
              const isSelected = value.includes(item.value);

              return (
                <div
                  className="w-full flex items-center justify-end gap-2"
                  onClick={() => onSelect(item.value)}
                  key={index}
                >
                  <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                    {item.title}
                  </CustomTypography>

                  <div
                    className={`
                                relative 
                                w-4 
                                h-4 
                                min-w-4 
                                min-h-4 
                                rounded-full 
                                border-[1px] 
                                flex 
                                items-center 
                                justify-center 
                                overflow-hidden
                                ${isSelected ? 'bg-impo_Primary_Primary border-impo_Primary_Primary' : 'bg-impo_Transparent border-impo_Surface_OutlineVariant'}
                              `}
                  >
                    {isSelected && <TickIcon className="min-w-5 h-auto fill-impo_Neutral_Background" />}
                  </div>
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </>
  );
};

export default StylesFilterGenerator;
