import { useState } from 'react';

import { LoginResponseTypes } from '@services/loginServices/types';
import { registerPayloadUpdater } from '@utils/register';

import { FetchedUserTypes } from '@components/activation/CompleteRegisterContainer/types';
import { OtpStatusTypes } from '@components/activation/pages/otp/Otp2Container/__hooks__/useOtpStatus/types';
import { ActivationPayloadTypes } from '@providers/__activation__/types';
import { APP_VERSION } from '@repo/core/constants/app.constants';
import { useCountDown } from '@repo/core/hooks/useCountDown';
import { useCulture } from '@repo/core/hooks/useCulture';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { NotificationRewardTypes, RegisterResponseTypes } from './types';

const useRegister = (payload: ActivationPayloadTypes, onCallBack?: (v: OtpStatusTypes) => void) => {
  const { culture } = useCulture();
  const { updatedPayload } = registerPayloadUpdater(payload, culture.calendarType);

  const [pair, setPair] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedUser, setFetchedUser] = useState<FetchedUserTypes | null>(null);
  const [registerData, setRegisterData] = useState<RegisterResponseTypes | null>(null);
  const [notificationReward, setNotificationReward] = useState<NotificationRewardTypes | undefined>(undefined);

  const errorHandler = () => {
    setIsLoading(false);

    if (onCallBack) {
      onCallBack('wrong');
    }
  };

  const completeHandler = (v: LoginResponseTypes) => {
    if (registerData) {
      setPair(registerData.pair);
      setNotificationReward(registerData.reward.page);
      setFetchedUser({
        userCookie: {
          identity: updatedPayload.identity || '',
          password: updatedPayload.password || '',
          loginId: v.loginId,
          token: v.token,
        },
        userInfoCookie: {
          installationPurpose: { periodStatus: updatedPayload.periodStatus, status: updatedPayload.status },
          cycleTheme: v.cycleTheme,
          name: v.name,
        },
      });

      setIsLoading(false);
      setRegisterData(null);
    }
  };

  const { callApi: callLoginApi } = usePwaApi<LoginResponseTypes>({
    method: 'POST',
    onError: errorHandler,
    onSuccess: completeHandler,
    api: 'CustomerAccount/Loginv6',
  });

  const { startCounter } = useCountDown({
    time: 3,
    onCallBack: () => {
      const payload = {
        phoneModel: '',
        channelVersion: '',
        version: APP_VERSION || '',
        identity: updatedPayload.identity,
        password: updatedPayload.password,
        deviceToken: updatedPayload.deviceToken,
      };

      callLoginApi(payload);
    },
  });

  const registerSuccessHandler = (v: RegisterResponseTypes) => {
    if (v.result) {
      startCounter();
      setRegisterData(v);
    } else {
      errorHandler();
    }
  };

  const { callApi: callRegisterApi } = usePwaApi({
    method: 'POST',
    onError: errorHandler,
    onSuccess: registerSuccessHandler,
    api: 'CustomerAccount/v2/Register',
  });

  const registerHandler = () => {
    setIsLoading(true);
    callRegisterApi(updatedPayload);
  };

  return { registerHandler, isLoading, pair, fetchedUser, notificationReward };
};

export default useRegister;
