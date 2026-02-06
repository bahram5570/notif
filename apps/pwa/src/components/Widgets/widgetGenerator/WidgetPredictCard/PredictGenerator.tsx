import EyeIcon from '@assets/icons/eye.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { colorFormatConverter } from '@repo/core/utils/scripts';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

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
          <CustomTypography fontSize="Lable_Large" className="text-impo_Black">
            {props.title}
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="text-impo_Grey_600 dark:text-impo_Grey_300">
            {props.trailingUp}
          </CustomTypography>
        </div>
      </div>

      <div className="w-full flex flex-col items-end pt-2  min-w-fit gap-1">
        {props.showEyeIcon && <EyeIcon className="w-6 h-auto" style={{ fill: props.eyeIconColor }} />}

        {!props.showEyeIcon && (
          <>
            <CustomTypography fontSize="Body_Small" className="text-impo_Grey_500 dark:text-impo_Grey_400">
              {props.trailingDown}
            </CustomTypography>
          </>
        )}
      </div>
    </div>
  );
};

export default PredictGenerator;
