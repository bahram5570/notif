import { circleContainerRotateFinder } from '../__utils__';

import styles from '../styles.module.css';

import { CIRCLE_EXTRA_SIZE } from '../constants';
import CurrentDayGenerator from './CurrentDayGenerator';
import DayGenerator from './DayGenerator';
import OvulationGenerator from './OvulationGenerator';
import { CircleContainerDaysProps, DaysColorsTypes } from './types';

const normalCurrentDayColors: DaysColorsTypes = {
  text: 'text-impo_Yellow_500',
  background: 'bg-impo_Yellow_500',
  border: 'border-impo_Yellow_500',
};
const periodColors: DaysColorsTypes = {
  text: 'text-impo_Primary_Primary',
  background: 'bg-impo_Primary_Primary',
  border: 'border-impo_Primary_Primary',
};
const pmsColors: DaysColorsTypes = {
  text: 'text-impo_Cycle_Pms_Eyebrow',
  background: 'bg-impo_Cycle_Pms_Eyebrow',
  border: 'border-impo_Cycle_Pms_Eyebrow',
};
const fertilityColors: DaysColorsTypes = {
  text: 'text-impo_Cyan_500',
  background: 'bg-impo_Cyan_500',
  border: 'border-impo_Cyan_500',
};

const rotate = `${circleContainerRotateFinder(0)}deg`;

const CircleContainerDays = (props: CircleContainerDaysProps) => {
  let currentDayColors = normalCurrentDayColors;
  if (props.currentDay >= props.periodStart && props.currentDay <= props.periodEnd) {
    currentDayColors = periodColors;
  } else if (props.hasFertility && props.currentDay >= props.fertilityStart && props.currentDay <= props.fertilityEnd) {
    currentDayColors = fertilityColors;
  } else if (props.hasPms && props.currentDay >= props.pmsStart && props.currentDay <= props.pmsEnd) {
    currentDayColors = pmsColors;
  }

  return (
    <div
      className={`absolute pointer-events-none ${styles.container}`}
      style={{
        top: -CIRCLE_EXTRA_SIZE * 2,
        left: -CIRCLE_EXTRA_SIZE * 2,
        right: -CIRCLE_EXTRA_SIZE * 2,
        bottom: -CIRCLE_EXTRA_SIZE * 2,
      }}
    >
      <div className="relative w-full h-full rounded-full" style={{ rotate }}>
        {/* // # Current day */}
        <CurrentDayGenerator colors={currentDayColors} cycleLength={props.cycleLength} currentDay={props.currentDay} />

        {/* // # Ovulation day */}
        {props.hasOvulation && (
          <OvulationGenerator
            ovulationDay={props.ovulationDay}
            cycleLength={props.cycleLength}
            currentDay={props.currentDay}
            colors={fertilityColors}
          />
        )}

        {/* // # Period */}
        <DayGenerator
          cycleLength={props.cycleLength}
          currentDay={props.currentDay}
          day={props.periodStart}
          colors={periodColors}
        />

        <DayGenerator
          cycleLength={props.cycleLength}
          currentDay={props.currentDay}
          day={props.periodEnd}
          colors={periodColors}
        />

        {/* // # Fertility */}
        {props.hasFertility && (
          <>
            <DayGenerator
              ovulationDay={props.hasOvulation ? props.ovulationDay : undefined}
              cycleLength={props.cycleLength}
              currentDay={props.currentDay}
              day={props.fertilityStart}
              colors={fertilityColors}
            />

            <DayGenerator
              ovulationDay={props.hasOvulation ? props.ovulationDay : undefined}
              cycleLength={props.cycleLength}
              currentDay={props.currentDay}
              day={props.fertilityEnd}
              colors={fertilityColors}
            />
          </>
        )}

        {/* // # PMS */}
        {props.hasPms && props.cycleLength !== props.currentDay && props.pmsEnd > props.currentDay && (
          <>
            <DayGenerator
              cycleLength={props.cycleLength}
              currentDay={props.currentDay}
              day={props.pmsEnd}
              colors={pmsColors}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CircleContainerDays;
