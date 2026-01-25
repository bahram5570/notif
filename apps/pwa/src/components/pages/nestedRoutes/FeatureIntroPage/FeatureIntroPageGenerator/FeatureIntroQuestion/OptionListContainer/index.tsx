import CancelIcon from '@assets/icons/cancel.svg';
import TickIcon from '@assets/icons/tickIcon.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import { OptionListContainerPropsType } from './type';

const OptionListContainer = ({ options, handleClick, selectedIndex }: OptionListContainerPropsType) => {
  return (
    <div className="flex flex-col gap-3 w-full my-8" data-testid={'option-list-trailonboarding'}>
      {options.map((option, index) => {
        const isSelected = index === selectedIndex;

        return (
          <div
            key={index}
            className={`rounded-xl py-5 flex ${isSelected ? `justify-between ${option.isCorrect ? 'bg-impo_Success_Success' : 'bg-impo_Error_Error'}` : 'justify-end bg-impo_Neutral_Surface'}  items-center px-4`}
            onClick={() => {
              handleClick(index);
            }}
            data-testid={'featureIntro-option-item'}
            role="radio"
          >
            {isSelected && (
              <div className="w-6 h-6 rounded-full flex justify-center items-center bg-impo_White">
                {option.isCorrect ? (
                  <TickIcon className="w-4 h-auto fill-impo_Success_Success" />
                ) : (
                  <CancelIcon className="w-4 h-auto stroke-impo_Error_Error" />
                )}
              </div>
            )}
            <Dark_Typography
              fontSize="Body_Medium"
              className={`${isSelected ? 'text-impo_Success_SuccessContainer' : 'text-impo_Neutral_OnBackground'}`}
            >
              {option.title}
            </Dark_Typography>
          </div>
        );
      })}
    </div>
  );
};

export default OptionListContainer;
