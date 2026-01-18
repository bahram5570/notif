import { forwardRef } from 'react';

import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTypographyMaker from '@hooks/useTypographyMaker';

import Dark_Spinner from '../Dark_Spinner';
import { Dark_ButtonTypes } from './types';

const Dark_Button = forwardRef((props: Dark_ButtonTypes, ref: React.LegacyRef<HTMLButtonElement>) => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const { typographyFontStyles, result } = useTypographyMaker({
    children: props.children,
    fontSize: props.fontSize,
    numbersMode: props.numbersMode,
  });

  const isLoading = props.isLoading || pageNavigationLoading === props.navigationLoadingId;

  const clickHandler = () => {
    if (!props.isDisable && !isLoading) {
      props.onClick();

      if (props.navigationLoadingId) {
        pageNavigationHandler({ showProgressBar: false, id: props.navigationLoadingId });
      }
    }
  };

  return (
    <button
      ref={ref}
      id={props.id}
      onClick={clickHandler}
      data-testid={props.testId}
      disabled={props.isDisable || props.isLoading}
      style={{ ...typographyFontStyles, ...props.style }}
      className={`
                  h-[40px] 
                  w-full
                  px-4 
                  bg-impo_Primary_Primary 
                  text-impo_Primary_OnPrimary
                  border-[1.5px] 
                  rounded-full 
                  border-impo_Primary_Primary 
                  ${props.isDisable ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
                  ${props.className}
                `}
    >
      <div className="relative w-full min-w-fit h-full flex items-center justify-center">
        {isLoading ? <Dark_Spinner className={` ${props.spinnerClassName}`} /> : <>{result}</>}
      </div>
    </button>
  );
});

export default Dark_Button;
