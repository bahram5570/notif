import { useEffect, useState } from 'react';

import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useActivationIsLargeScreen from '@hooks/__activation__/useActivationIsLargeScreen';

import CircleProgressBar from './CircleProgressBar';
import { ProgressCycleEnums } from './enums';
import { ProgressCycleLoadingProps } from './types';

const ProgressCycleLoading = ({ onComplete, isSuccess, titles, image }: ProgressCycleLoadingProps) => {
  const { isLargeScreen } = useActivationIsLargeScreen();
  const [loadingStatus, setLoadingStatus] = useState<ProgressCycleEnums>(ProgressCycleEnums.Start);

  useEffect(() => {
    if (isSuccess) {
      setLoadingStatus(ProgressCycleEnums.Complete);
    }
  }, [isSuccess]);

  return (
    <>
      {loadingStatus !== ProgressCycleEnums.Null && (
        <div className="w-full h-full flex flex-col justify-center items-center bg-impo_Neutral_Background">
          {isLargeScreen && <CustomImage_NEW src={image} width={200} height={200} containerClassName="mb-16" />}

          <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground text-center w-full px-7">
            {titles.main}
          </CustomTypography>

          <CircleProgressBar loadingStatus={loadingStatus} onComplete={onComplete} />

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {titles.subTitle1}
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {titles.subTitle2}
          </CustomTypography>
        </div>
      )}
    </>
  );
};

export default ProgressCycleLoading;
