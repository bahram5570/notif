import TickIcon from '@assets/icons/selectedTick.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import { EditActivationOptionGeneratorProps } from './types';

const EditActivationOptionGenerator = (props: EditActivationOptionGeneratorProps) => {
  return (
    <div
      onClick={props.onClick}
      className={`
                  w-full 
                  flex 
                  items-start 
                  justify-end 
                  gap-2 
                  py-3 
                  border-t-[1px]
                  ${props.isFirstIndex ? 'border-t-impo_Transparent' : 'border-t-impo_Surface_SurfaceVariant'}
                `}
    >
      <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
        {props.title}
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
                    ${props.isSelected ? 'border-impo_Transparent' : 'border-impo_Surface_OutlineVariant'}
                  `}
      >
        {props.isSelected && <TickIcon className="absolute top-0 left-0 right-0 bottom-0 scale-[1.4]" />}
      </div>
    </div>
  );
};

export default EditActivationOptionGenerator;
