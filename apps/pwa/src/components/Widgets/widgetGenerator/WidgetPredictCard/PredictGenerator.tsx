import EyeIcon from '@assets/icons/eye.svg';
import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';

import { PredictGeneratorProps } from './types';

const PredictGenerator = (props: PredictGeneratorProps) => {
  const { inViewRef } = useAnalytics({ inView_eventName: 'PredictionWidgetSeenMoreThan5Sec' });

  return (
    <div
      className="rounded-lg divide-y-[1px] flex flex-col justify-between items-center px-3 py-3 gap-2 "
      style={{ backgroundColor: colorFormatConverter(props.backgroundColor) }}
      ref={inViewRef}
    >
      <div className="flex flex-row-reverse items-center gap-2 w-44">
        <CustomImage src={props.icon} width={45} className="border-[1px] rounded-full border-impo_White" />

        <div className="flex flex-col justify-center items-end gap-2">
          <Dark_Typography fontSize="Lable_Large" className="text-impo_Black">
            {props.title}
          </Dark_Typography>

          <Dark_Typography fontSize="Body_Medium" className="text-impo_Grey_600 dark:text-impo_Grey_300">
            {props.trailingUp}
          </Dark_Typography>
        </div>
      </div>

      <div className="w-full flex flex-col items-end pt-2  min-w-fit gap-1">
        {props.showEyeIcon && <EyeIcon className="w-6 h-auto" style={{ fill: props.eyeIconColor }} />}

        {!props.showEyeIcon && (
          <>
            <Dark_Typography fontSize="Body_Small" className="text-impo_Grey_500 dark:text-impo_Grey_400">
              {props.trailingDown}
            </Dark_Typography>
          </>
        )}
      </div>
    </div>
  );
};

export default PredictGenerator;
