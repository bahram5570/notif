import CancelIcon from '@assets/icons/cancel.svg';
import TickIcon from '@assets/icons/tickIcon.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { OptionListContainerPropsType } from './type';

const OptionListContainer = ({ options, handleClick, selectedIndex }: OptionListContainerPropsType) => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-col gap-3 w-full my-8" data-testid={'option-list-trailonboarding'}>
      {options.map((option, index) => {
        const isSelected = index === selectedIndex;
        const bgColor = !isSelected
          ? colors.Neutral_Surface
          : option.isCorrect
            ? colors.Success_Success
            : colors.Error_Error;

        return (
          <div
            key={index}
            style={{
              backgroundColor: bgColor,
            }}
            className={`rounded-xl py-5 flex ${isSelected ? 'justify-between' : 'justify-end'}  items-center px-4`}
            onClick={() => {
              handleClick(index);
            }}
            data-testid={'featureIntro-option-item'}
            role="radio"
          >
            {isSelected && (
              <div
                className="w-6 h-6 rounded-full flex justify-center items-center"
                style={{ background: colors.Neutral_Background }}
              >
                {option.isCorrect ? (
                  <TickIcon className="w-4 h-auto" style={{ fill: colors.Success_Success }} />
                ) : (
                  <CancelIcon className="w-4 h-auto" style={{ stroke: colors.Error_Error }} />
                )}
              </div>
            )}
            <Typography
              scale="Body"
              size="Medium"
              color={isSelected ? 'Success_SuccessContainer' : 'Neutral_OnBackground'}
            >
              {option.title}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default OptionListContainer;
