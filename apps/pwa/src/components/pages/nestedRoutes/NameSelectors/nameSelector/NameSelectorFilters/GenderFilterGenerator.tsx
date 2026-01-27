import Dark_Typography from '@components/ui/Dark_Typography';
import useOverflowHandler from '@hooks/useOverflowHandler';

import { GenderFilterGeneratorProps } from './types';

const GenderFilterGenerator = ({ value, list, onSelect }: GenderFilterGeneratorProps) => {
  useOverflowHandler();

  return (
    <>
      <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground pb-1">
        جنسیت نوزاد:
      </Dark_Typography>

      {list.map((item, index) => {
        const isSelected = value === item.value;

        return (
          <div className="w-full flex items-center justify-end gap-2" onClick={() => onSelect(item.value)} key={index}>
            <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
              {item.title}
            </Dark_Typography>

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
                          p-[2px]
                          ${isSelected ? 'border-impo_Primary_Primary' : 'border-impo_Surface_OutlineVariant'}
                        `}
            >
              {isSelected && <div className="w-full h-full rounded-full bg-impo_Primary_Primary" />}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GenderFilterGenerator;
