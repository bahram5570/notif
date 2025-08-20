import { useEffect, useState } from 'react';

import TickIcon from '@assets/icons/tickIcon.svg';
import { convertToPersianOrdinal } from '@utils/numbers';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useCountDown from '@hooks/useCountDown';
import useTheme from '@hooks/useTheme';

import { ROUTIN_STEP, SHOW_ROUTIN_UNLOCK_TOST } from './constant';

const RoutinUnlockTost = () => {
  const [showRoutinToast, setShowRoutinToast] = useState<boolean | null>(null);
  const [routinStep, setRoutinStep] = useState<number>(0);
  const showRoutinUnlockToast = localStorage.getItem(SHOW_ROUTIN_UNLOCK_TOST);
  const currentRoutinStep = localStorage.getItem(ROUTIN_STEP);
  const { colors } = useTheme();

  const { startCounter: startShowMessage } = useCountDown({
    time: 9,
    onCallBack: () => {
      setShowRoutinToast(false);
    },
  });

  useEffect(() => {
    if (showRoutinUnlockToast) {
      const parsedResult = JSON.parse(showRoutinUnlockToast) as boolean;
      setShowRoutinToast(parsedResult);
      localStorage.removeItem(SHOW_ROUTIN_UNLOCK_TOST);

      setShowRoutinToast(true);
      startShowMessage();
    }
  }, []);

  useEffect(() => {
    if (showRoutinToast) {
      if (currentRoutinStep) {
        const parsedResult = JSON.parse(currentRoutinStep) as number;
        setRoutinStep(parsedResult + 1);
        localStorage.removeItem(ROUTIN_STEP);
      }
    }
  }, [showRoutinToast]);

  return (
    <>
      {showRoutinToast && routinStep && (
        <div
          className={`fixed left-0 right-0 bottom-0 px-5 w-full animate-routinUnlockToast mx-auto  mb-4  z-50 `}
          style={{
            maxWidth: MAX_SCREEN_WIDTH,
          }}
        >
          <div
            style={{
              background: colors.Success_SuccessContainer,
              border: `1px solid ${colors.Success_Success}`,
            }}
            className="flex justify-center items-center gap-3 rounded-lg p-4"
          >
            <div className="border-r-[1px]">
              <Typography scale="Body" size="Small" className="px-2">
                {`  مرحله ${convertToPersianOrdinal(routinStep)} با موفقیت انجام و مرحله ${convertToPersianOrdinal(routinStep + 1)} آنلاک شد`}
              </Typography>
            </div>

            <div className="w-6 h-6 flex justify-center items-center">
              <TickIcon className="w-4 h-auto" style={{ fill: colors.Success_Success }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoutinUnlockTost;
