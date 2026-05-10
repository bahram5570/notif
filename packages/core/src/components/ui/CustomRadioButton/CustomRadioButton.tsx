import { useMemo } from 'react';

import { useSystem } from '../../../hooks/useSystem';
import { RadioButtonProps } from './type';

export const CustomRadioButton = ({ isChecked, onClick, isDisable, testId }: RadioButtonProps) => {
  const { appName } = useSystem();
  const clickHandler = () => {
    if (!isDisable && onClick) {
      onClick();
    }
  };

  const theme = useMemo<{ borderColor: string; backgroundcolor: string }>(() => {
    switch (appName) {
      case 'MEN_PWA':
        return {
          borderColor: 'border-impo_PrimaryMan_PrimaryMan',
          backgroundcolor: 'bg-impo_PrimaryMan_PrimaryMan',
        };

      default:
        return {
          borderColor: 'border-impo_Primary_Primary',
          backgroundcolor: 'bg-impo_Primary_Primary',
        };
    }
  }, [appName]);

  return (
    <div
      data-testid={testId}
      onClick={clickHandler}
      className={`w-10 h-10 rounded-full flex justify-center items-center ${isDisable && 'opacity-25'}`}
    >
      <div
        className={`
                    w-5 
                    h-5 
                    rounded-full 
                    flex 
                    border-2
                    ${isChecked ? theme.borderColor : 'border-impo_Surface_Outline'}
                  `}
      >
        {isChecked && (
          <div
            className={`
                        w-3 
                        h-3 
                        rounded-full 
                        m-auto
                        ${isChecked ? theme.backgroundcolor : 'bg-impo_Surface_Outline'}
                      `}
          />
        )}
      </div>
    </div>
  );
};
