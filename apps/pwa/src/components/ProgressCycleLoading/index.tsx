import { useEffect, useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
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
          {isLargeScreen && (
            <div className="mb-16 w-[200px]">
              <CustomImage src={image} />
            </div>
          )}

          <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground text-center w-full px-7">
            {titles.main}
          </Dark_Typography>

          <CircleProgressBar loadingStatus={loadingStatus} onComplete={onComplete} />

          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {titles.subTitle1}
          </Dark_Typography>

          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {titles.subTitle2}
          </Dark_Typography>
        </div>
      )}
    </>
  );
};

export default ProgressCycleLoading;
