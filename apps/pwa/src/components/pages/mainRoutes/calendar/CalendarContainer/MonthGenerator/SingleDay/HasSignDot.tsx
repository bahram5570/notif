import { CalendarWidgetEnums } from '../../../__hooks__/useCalendarGetData/CalendarEnums';
import { HasSignDotProps } from './types';

const HasSignDot = ({ day, isSelected }: HasSignDotProps) => {
  const hasSign = (day.items.find((i) => i.type === CalendarWidgetEnums.Sign)?.data.signs.length || 0) > 0;

  return (
    <>
      {hasSign && (
        <div
          style={{ bottom: isSelected ? '2px' : '4px' }}
          className="absolute left-0 right-0 flex justify-center pointer-events-none z-10"
        >
          <span className="absolute w-[6px] h-[6px] rounded-full bg-impo_Primary_Primary" />
        </div>
      )}
    </>
  );
};

export default HasSignDot;
