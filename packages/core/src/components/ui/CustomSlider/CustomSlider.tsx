import { useOperatingSystem } from '../../../hooks/useOperatingSystem';
import { SliderProps } from './types';

export const CustomSlider = ({ children, className, gap = '16px', id, sidePadding }: SliderProps) => {
  const { operatingSystem } = useOperatingSystem();

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
                  scrollbar ${operatingSystem !== 'windows' && 'hide'}
                  ${className}
                `}
    >
      <>{children}</>
    </div>
  );
};
