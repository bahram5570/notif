import { colorFormatConverter } from '../../../../utils/scripts';
import EyeIcon from '@assets/shared/icons/eye.svg';

import { MODAL_QUERY_NAME } from '../../../../constants/modal.constants';
import { useAnalytics } from '../../../../hooks/useAnalytics';
import { usePageNavigationLoading } from '../../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../../hooks/useQueryParamsHandler';
import { useSystem } from '../../../../hooks/useSystem';
import { CustomImage } from '../../../ui/CustomImage';
import { CustomTypography } from '../../../ui/CustomTypography';
import PredictModal from './PredictModal';
import { PredictGeneratorProps } from './types';

const PredictGenerator = (props: PredictGeneratorProps) => {
  const { inViewRef } = useAnalytics({ inView_eventName: 'PredictionWidgetSeenMoreThan5Sec' });
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { appName } = useSystem();

  const onClick = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: 'predict',
    }),
      pageNavigationHandler({ showProgressBar: true, id: 'predict' }));
  };

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
            {!props.showMoreInfo && (
              <CustomTypography fontSize="Body_Small" className="text-impo_Grey_500 dark:text-impo_Grey_400">
                {props.trailingDown}
              </CustomTypography>
            )}

            {props.showMoreInfo && (
              <div onClick={onClick}>
                <CustomTypography fontSize="Body_Small" className="text-impo_Primary_Primary">
                  اطلاعات بیشتر
                </CustomTypography>
              </div>
            )}
          </>
        )}
      </div>
      {appName === 'PWA' && <PredictModal />}
    </div>
  );
};

export default PredictGenerator;
