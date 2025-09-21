import { useState } from 'react';

import { CycleThemeEnum } from '@services/loginServices/enum';
import { cookieCreatedTime } from '@utils/cookies';
import { registerPayloadUpdater } from '@utils/register';

import { UserCookieTypes } from '@actions/cookie.actions';
import { OtpStatusTypes } from '@components/activation/pages/otp/Otp2Container/__hooks__/useOtpStatus/types';
import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import { ActivationPayloadTypes } from '@providers/__activation__/types';

import { NotificationRewardTypes, RegisterSuccessHandlerTypes } from './types';

const useRegister = (payload: ActivationPayloadTypes, onCallBack?: (v: OtpStatusTypes) => void) => {
  const { culture } = useCulture();
  const { updatedPayload } = registerPayloadUpdater(payload, culture.calendarType);

  const [pair, setPair] = useState(false);
  const [fetchedUser, setFetchedUser] = useState<UserCookieTypes | null>(null);
  const [notificationReward, setNotificationReward] = useState<NotificationRewardTypes | undefined>(undefined);

  const errorHandler = () => {
    if (onCallBack) {
      onCallBack('wrong');
    }
  };

  const registerSuccessHandler: RegisterSuccessHandlerTypes = (v) => {
    if (v.result) {
      setPair(v.pair);

      setNotificationReward(v.reward.page);

      setFetchedUser({
        installationPurpose: { periodStatus: updatedPayload.periodStatus, status: updatedPayload.status },
        identity: updatedPayload.identity || '',
        password: updatedPayload.password || '',
        createdTime: cookieCreatedTime(),
        cycleTheme: CycleThemeEnum.Flat,
        token: v.token,
      });
    } else {
      errorHandler();
    }
  };

  const { isLoading, callApi } = useApi({
    method: 'POST',
    onError: errorHandler,
    onSuccess: registerSuccessHandler,
    api: 'CustomerAccount/v2/Register',
  });

  const registerHandler = () => {
    callApi(updatedPayload);
  };

  return { registerHandler, isLoading, pair, fetchedUser, notificationReward };
};

export default useRegister;
