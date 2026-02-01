import { SliderProps } from './types';

export const CustomSlider = ({ children, className, gap, id, sidePadding, isWindows }: SliderProps) => {
  return (
    <div
      className={`max-w-full overflow-x-auto overflow-y-hidden flex flex-row-reverse scrollbar ${!isWindows && 'hide'} ${className}`}
      style={{ gap, paddingLeft: sidePadding, paddingRight: sidePadding }}
      id={id}
    >
      {children}
    </div>
  );
};
