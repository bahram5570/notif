import useTypographyMaker from '@hooks/useTypographyMaker';

import Spinner from '../Spinner';
import { CustomBUttonTypes } from './types';

const CustomButton = (props: CustomBUttonTypes) => {
  const { typographyFontStyles, result } = useTypographyMaker({
    children: props.children,
    fontSize: props.fontSize,
    numbersMode: props.numbersMode,
  });

  const clickHandler = () => {
    if (!props.isDisable && !props.isLoading) {
      props.onClick();
    }
  };

  return (
    <button
      id={props.id}
      onClick={clickHandler}
      aria-label="CustomButton"
      disabled={props.isDisable || props.isLoading}
      style={{ ...typographyFontStyles, ...props.style }}
      className={`
                  text-impo_White 
                  h-[40px] 
                  px-4 
                  bg-impo_Primary_Primary 
                  border-impo_Primary_Primary 
                  border-[1.5px] 
                  rounded-full 
                  ${props.isDisable ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
                  ${props.className}
                `}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {props.isLoading ? (
          <Spinner className={`border-impo_Primary_OnPrimary ${props.spinnerClassName}`} />
        ) : (
          <>{result}</>
        )}
      </div>
    </button>
  );
};

export default CustomButton;
