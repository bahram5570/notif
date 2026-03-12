import { RadioButtonProps } from './type';

export const CustomRadioButton = ({ isChecked, onClick, isDisable, testId, isMan = false }: RadioButtonProps) => {
  const clickHandler = () => {
    if (!isDisable && onClick) {
      onClick();
    }
  };

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
                    ${isChecked ? (isMan ? 'border-impo_PrimaryMan_PrimaryMan' : 'border-impo_Primary_Primary') : 'border-impo_Surface_Outline'}
                  `}
      >
        {isChecked && (
          <div
            className={`
                        w-3 
                        h-3 
                        rounded-full 
                        m-auto
                        ${isChecked ? (isMan ? 'bg-impo_PrimaryMan_PrimaryMan' : 'bg-impo_Primary_Primary') : 'bg-impo_Surface_Outline'}
                      `}
          />
        )}
      </div>
    </div>
  );
};
