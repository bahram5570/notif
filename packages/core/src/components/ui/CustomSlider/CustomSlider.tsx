import { SliderProps } from './types';

export const CustomSlider = ({ children, className, gap, id, sidePadding }: SliderProps) => {
  return (
    <div
      id={id}
      style={{ gap, paddingLeft: sidePadding, paddingRight: sidePadding }}
      className={`
                  max-w-full 
                  overflow-x-auto 
                  overflow-y-hidden 
                  flex 
                  flex-row-reverse 
                  scrollbar 
                  ${className}
                `}
    >
      <>{children}</>
    </div>
  );
};
