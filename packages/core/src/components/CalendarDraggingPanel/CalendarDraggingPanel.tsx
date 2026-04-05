import { MAX_SCREEN_WIDTH } from '../../constants/app.constants';
import { useSystem } from '../../hooks/useSystem';
import CalendarHandle from './CalendarHandle/CalendarHandle';
import { SelectedDayBiorhythm } from './SelectedDayBiorhythm/SelectedDayBiorhythm';
import { SelectedDayNote } from './SelectedDayNote/SelectedDayNote';
import { SelectedDaySigns } from './SelectedDaySigns/SelectedDaySigns';
import { SelectedDayStatus } from './SelectedDayStatus/SelectedDayStatus';
import useCalendarDrag from './__hooks__/useCalendarDrag';
import useSelectedDateInfo from './__hooks__/useSelectedDateInfo';
import { CALENDAR_DRAGGING_PANEL_ID } from './constants';
import { CalendarDraggingPanelProps } from './types';

export const CalendarDraggingPanel = ({ selectedDate, calendarData }: CalendarDraggingPanelProps) => {
  const { ref, isDragging, positionY } = useCalendarDrag();
  const { dayScript, monthNameScript, selectedDateInfo } = useSelectedDateInfo(selectedDate, calendarData);
  const { appName } = useSystem();

  return (
    <div className="relative w-full h-[100dvh]" id={CALENDAR_DRAGGING_PANEL_ID}>
      <div
        ref={ref}
        style={{ maxWidth: MAX_SCREEN_WIDTH, top: positionY }}
        className="absolute left-0 right-0 bottom-0 mx-auto bg-impo_Neutral_Surface z-30"
      >
        <div
          className="flex flex-col items-center gap-6 px-4 py-2"
          style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
        >
          <CalendarHandle />
          <SelectedDayStatus day={dayScript} monthName={monthNameScript} selectedDateInfo={selectedDateInfo} />
          {appName === 'PWA' && <SelectedDaySigns selectedDateInfo={selectedDateInfo} />}
          <SelectedDayNote selectedDateInfo={selectedDateInfo} />
          <SelectedDayBiorhythm selectedDateInfo={selectedDateInfo} />
        </div>
      </div>
    </div>
  );
};
