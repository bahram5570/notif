import { useEffect, useState } from 'react';

import CheckCircleIcon from '@assets/icons/checkCircle.svg';
import InfoIcon from '@assets/icons/info.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useCountDown from '@hooks/useCountDown';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { LottieCanvas } from '@repo/core/lib/LottieCanvas';

import { ResponsePropsType } from '../../CheckupQuestionContainer/QuestionCheckup/__hooks__/useSubmit/type';
import { MESSAGE_PREGNANCY_CHECKUP_RESULT } from '../constant';
import { ResultTypeEnum } from './enum';

const PregnancyCheckupToast = () => {
  const [showLottie, setShowLottie] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [resultMessage, setResultMessage] = useState<ResponsePropsType | null>(null);

  const { startCounter: startShowMessage } = useCountDown({
    time: 5,
    onCallBack: () => {
      setShowLottie(false);
      setShowStatus(true);
      startHideToast();
    },
  });

  const { startCounter: startHideToast } = useCountDown({
    time: 7,
    onCallBack: () => {
      setShowStatus(false);
      setResultMessage(null);
    },
  });

  useEffect(() => {
    const hasResultTest =
      typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(MESSAGE_PREGNANCY_CHECKUP_RESULT);

    if (hasResultTest) {
      const parsedResult = JSON.parse(hasResultTest) as ResponsePropsType;
      setResultMessage(parsedResult);
      sessionStorage.removeItem(MESSAGE_PREGNANCY_CHECKUP_RESULT);

      setShowLottie(true);
      startShowMessage();
    }
  }, []);

  const renderToastMessage = () => {
    if (!resultMessage) return null;

    return (
      <div
        className={`fixed left-0 right-0 px-5 w-full mx-auto animate-signsChangedToast z-50 ${
          showStatus ? 'mt-20' : ''
        } `}
        style={{
          maxWidth: MAX_SCREEN_WIDTH,
        }}
      >
        <div
          className={`flex justify-center items-center gap-3 rounded-lg px-4 py-2 border ${resultMessage.status === ResultTypeEnum.Warning ? 'border-impo_Warning_Warning bg-impo_Warning_WarininContainer' : 'border-impo_Success_Success bg-impo_Success_SuccessContainer'}`}
        >
          <div className="border-r-[1px]  border-r-impo_Neutral_Surface dark:border-r-impo_Neutral_OnSurface">
            <CustomTypography fontSize="Body_Medium" className="px-2  text-impo_Black">
              {resultMessage.message}
            </CustomTypography>
          </div>
          <div className="w-6 h-6">
            {resultMessage.status === ResultTypeEnum.Warning ? (
              <InfoIcon className="w-6 h-6 stroke-impo_Warning_Warning" />
            ) : (
              <CheckCircleIcon />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {showLottie && (
        <div
          className={`fixed left-0 right-0 px-5 w-full mx-auto animate-signsChangedToast z-50 ${
            showStatus ? 'mt-20' : ''
          } `}
          style={{
            maxWidth: MAX_SCREEN_WIDTH,
          }}
        >
          <LottieCanvas src={'/assets/lottie/hasSignsChanged.lottie'} autoplay={true} />
        </div>
      )}
      {showStatus && renderToastMessage()}
    </>
  );
};

export default PregnancyCheckupToast;
