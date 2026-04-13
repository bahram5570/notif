import { CalendarWidgetEnums } from '../../../CalendarEnums';
import { HasNoteDotProps } from './types';

const HasNoteDot = ({ day, isSelected }: HasNoteDotProps) => {
  const hasNote = (day.items.find((i) => i.type === CalendarWidgetEnums.Note)?.data.notes.length || 0) > 0;

  return (
    <>
      {hasNote && (
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

export default HasNoteDot;
