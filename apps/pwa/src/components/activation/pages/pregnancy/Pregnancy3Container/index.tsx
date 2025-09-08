import ActivationTabs from '@components/activation/ActivationTabs';
import { ActivationTabsListTypes } from '@components/activation/ActivationTabs/types';
import DateModule from '@components/activation/DateModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import useActivationPregnancyTabs from '@hooks/__activation__/useActivationPregnancyTabs';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Pregnancy3ContainerProps } from './types';

const Pregnancy3Container = ({
  payloadHandler,
  activationData,
  onRegister,
  onContinue,
  isLoading,
  payload,
  info,
}: Pregnancy3ContainerProps) => {
  const { tab, tabHandler, defaultDate, endDate, startDate } = useActivationPregnancyTabs();
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });

  if (options === undefined) {
    return <></>;
  }

  const valueHandler = (v: string) => {
    payloadHandler({ pregnancyDate: v, isDeliveryDate: tab === 0 ? false : true });

    nextPageHandler({
      nextActivation: pageInfo.nextActivationList.condition1?.url || '',
      rewardId: pageInfo.nextActivationList.condition1?.rewardId,
    });
  };

  const tabsList: ActivationTabsListTypes = [
    { text: options[0].text, value: 0 },
    { text: options[1].text, value: 1 },
  ];

  return (
    <>
      <MainActivationModule onContinue={onContinue} isLoading={isLoading} onRegister={onRegister} {...pageInfo}>
        <ActivationTabs tab={tab} tabHandler={tabHandler} tabsList={tabsList} />

        <DateModule
          valueHandler={valueHandler}
          defaultDate={defaultDate}
          startDate={startDate}
          endDate={endDate}
          key={tab}
        />
      </MainActivationModule>
    </>
  );
};

export default Pregnancy3Container;
