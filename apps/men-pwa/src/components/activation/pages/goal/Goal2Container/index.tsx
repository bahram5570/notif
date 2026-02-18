import ActivationTabs from '@components/activation/ActivationTabs';
import DateModule from '@components/activation/DateModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import { ACTIVATION_BIRTHDATE_TABS_LIST } from '@constants/activation.constants';
import useActivationBirthdateTabs from '@hooks/__activation__/useActivationBirthdateTabs';
import useActivationBirthdayDefaultDate from '@hooks/__activation__/useActivationBirthdayDefaultDate';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Goal2ContainerProps } from './types';

const Goal2Container = ({
  payloadHandler,
  activationData,
  onRegister,
  onContinue,
  isLoading,
  payload,
  info,
}: Goal2ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });
  const defaultDate = useActivationBirthdayDefaultDate();
  const { tab, tabHandler } = useActivationBirthdateTabs((v) => payloadHandler({ calendarType: v }));

  if (options === undefined) {
    return <></>;
  }

  const valueHandler = (v: string) => {
    nextPageHandler({
      rewardId: pageInfo.nextActivationList.condition1?.rewardId,
      nextActivation: pageInfo.nextActivationList.condition1?.url || '',
    });

    payloadHandler({ birthDate: v });
  };

  return (
    <MainActivationModule {...pageInfo} onRegister={onRegister}>
      <ActivationTabs tab={tab} tabHandler={tabHandler} tabsList={ACTIVATION_BIRTHDATE_TABS_LIST} />
      <DateModule valueHandler={valueHandler} defaultDate={defaultDate} key={tab} />
    </MainActivationModule>
  );
};

export default Goal2Container;
