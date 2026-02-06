import { circleContainerRotateFinder, circleItemRotateMaker } from '../__utils__';

import styles from '../styles.module.css';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import { CIRCLE_EXTRA_SIZE, CIRCLE_TOTAL_AVAILABLE_PROGRESS_PERCENTAGE } from '../constants';
import useCircleLinesSizes from './__hooks__/useCircleLinesSizes';
import { CircleContainerLinesProps } from './types';

const CircleContainerLines = (props: CircleContainerLinesProps) => {
  const { inViewRef } = useAnalytics({ inView_eventName: 'cycleWidgetSeenMoreThen5Secs' });

  const containerSize = props.containerSize + CIRCLE_EXTRA_SIZE * 2;

  const { strokeDasharray, circleStyles, svgStyles } = useCircleLinesSizes({ containerSize });

  const progressMaker = (start: number, end: number) => {
    const daysCount = (end - start) * CIRCLE_TOTAL_AVAILABLE_PROGRESS_PERCENTAGE;
    return strokeDasharray - (daysCount / props.cycleLength) * strokeDasharray;
  };

  return (
    <div
      ref={inViewRef}
      className={`absolute rounded-full pointer-events-none -z-10 overflow-hidden ${styles.container}`}
      style={{
        top: -CIRCLE_EXTRA_SIZE,
        left: -CIRCLE_EXTRA_SIZE,
        right: -CIRCLE_EXTRA_SIZE,
        bottom: -CIRCLE_EXTRA_SIZE,
      }}
    >
      <div className="relative w-full h-full rounded-full" style={{ rotate: `${circleContainerRotateFinder(90)}deg` }}>
        <div className="absolute top-1 left-1 right-1 bottom-1 rounded-full bg-impo_White" />

        {/* // # Period */}
        <svg {...svgStyles} style={{ rotate: `${circleItemRotateMaker(props.periodStart, props.cycleLength)}deg` }}>
          <circle
            {...circleStyles}
            className="stroke-impo_Primary_Primary"
            strokeDashoffset={progressMaker(props.periodStart, props.periodEnd)}
          />
        </svg>

        {/* // # PMS */}
        {props.hasPms && (
          <svg {...svgStyles} style={{ rotate: `${circleItemRotateMaker(props.pmsStart, props.cycleLength)}deg` }}>
            <circle
              {...circleStyles}
              className="stroke-impo_Cycle_Pms_Eyebrow"
              strokeDashoffset={progressMaker(props.pmsStart, props.pmsEnd)}
            />
          </svg>
        )}

        {/* // # Fertility */}
        {props.hasFertility && (
          <svg
            {...svgStyles}
            style={{ rotate: `${circleItemRotateMaker(props.fertilityStart, props.cycleLength)}deg` }}
          >
            <circle
              {...circleStyles}
              className="stroke-impo_Cyan_500"
              strokeDashoffset={progressMaker(props.fertilityStart, props.fertilityEnd)}
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default CircleContainerLines;
