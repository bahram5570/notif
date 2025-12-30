import useTypographyMaker from '@hooks/useTypographyMaker';

import { CustomBUtton2Types } from './types';

const CustomButton2 = (props: CustomBUtton2Types) => {
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
      disabled={props.isDisable}
      style={{ ...typographyFontStyles, ...props.style }}
      className={`
                  border-[1.5px] 
                  border-impo_Primary_Primary 
                  bg-impo_Primary_Primary 
                  text-impo_White 
                  h-[40px] 
                  px-4 
                  rounded-full 
                  ${props.isDisable ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
                  ${props.className}
                `}
    >
      {result}
    </button>
  );
};

export default CustomButton2;
