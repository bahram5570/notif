import { KIT_TEST_RANGE_DEFAULT_RANGE_VALUE } from '../constants';
import KitTestRangeSVG from './KitTestRangeSVG';
import { KIT_TEST_RANGE_SLIDER_HEIGHT, KIT_TEST_RANGE_SLIDER_THUMB_SIZE } from './constants';
import { KitTestRangeSliderProps } from './types';

const KitTestRangeSlider = ({ rangeValue, rangeValueHandler }: KitTestRangeSliderProps) => {
  return (
    <>
      <KitTestRangeSVG rangeValue={rangeValue} />

      <div className="relative w-full overflow-hidden" style={{ height: KIT_TEST_RANGE_SLIDER_HEIGHT }}>
        <input
          min={0}
          max={100}
          type="range"
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          defaultValue={KIT_TEST_RANGE_DEFAULT_RANGE_VALUE}
          onChange={(e) => rangeValueHandler(e.target.valueAsNumber)}
          className="w-full h-full rotate-180 cursor-pointer opacity-0"
        />

        <div
          className="absolute top-0 left-0 bottom-0 flex items-center pointer-events-none z-10"
          style={{ right: KIT_TEST_RANGE_SLIDER_THUMB_SIZE, transform: `translateX(${rangeValue}%)` }}
        >
          <div
            style={{ width: KIT_TEST_RANGE_SLIDER_THUMB_SIZE, height: KIT_TEST_RANGE_SLIDER_THUMB_SIZE }}
            className="rounded-full border-[2px] flex items-center justify-center bg-impo_Neutral_Background border-impo_Neutral_Surface"
          >
            <div className="w-full h-full rounded-full bg-impo_Primary_Primary" style={{ opacity: rangeValue / 100 }} />
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center pointer-events-none z-0">
          <div className="w-full h-[12px] rounded-full bg-gradient-to-r from-impo_Transparent to-impo_Primary_Primary " />
        </div>
      </div>
    </>
  );
};

export default KitTestRangeSlider;
