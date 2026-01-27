'use client';

import OnMountRewardModule from '@components/activation/OnMountRewardModule';
import Goal3Container from '@components/activation/pages/goal/Goal3Container';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step1 = () => {
  // # هدف نصب
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  return (
    <>
      <OnMountRewardModule
        firstName={payload.firstName}
        currentRewardData={{
          enable: true,
          doRepeat: true,
          btnLabel: 'تکمیل اطلاعات',
          title: 'ایمپو مثل همیشه در کنارته  🫂',
          gradient: ['#fce7eb', '#ffffff'],
          image: '/assets/lottie/miscarriage.lottie',
          description: '@هستی جان برای سبز نشدن جوانه کوچکی که در دل داشتی، متاسفیم.',
        }}
      />

      <Goal3Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.step1}
      />
    </>
  );
};

export default Step1;
