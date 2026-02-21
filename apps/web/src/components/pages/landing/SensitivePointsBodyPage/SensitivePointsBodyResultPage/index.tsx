'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import ExerciseSection from './ExerciseSection';
import SensitiveResultHeading from './SensitiveResultHeading';
import WarningSection from './WarningSection';
import useGetResult from './__hooks__/useGetResult';
import { SENSITIVE_POINTS_BODY_RESULT_DATA } from './constants';
import { ResultLevelEnum } from './enum';

const SensitivePointsBodyResultPage = () => {
  const { resultLevel } = useGetResult();
  const result = resultLevel
    ? SENSITIVE_POINTS_BODY_RESULT_DATA[resultLevel]
    : SENSITIVE_POINTS_BODY_RESULT_DATA[ResultLevelEnum.MEDIUM];

  return (
    <div className=" relative ">
      <SensitiveResultHeading imageHeader={result.imageHeader} title={result.title} />

      <div className="flex flex-col justify-center px-4 lg:w-10/12 lg:mx-auto">
        <CustomTypography fontSize="Body_Medium" className="text-center -mt-7">
          {result.description}
        </CustomTypography>

        <WarningSection />

        <ExerciseSection exercise={result.exercise} />

        <CustomTypography fontSize="Body_Small" className="text-center py-4">
          توصیه می‌شه این تست رو بعد از مدتی دوباره انجام بدی تا پیشرفتت رو بسنجی.
        </CustomTypography>
      </div>
    </div>
  );
};

export default SensitivePointsBodyResultPage;
