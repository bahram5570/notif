'use client';

import OnMountRewardModule from '@components/activation/OnMountRewardModule';
import Goal3Container from '@components/activation/pages/goal/Goal3Container';
import useProfileData from '@hooks/__profile__/useProfileData';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step1 = () => {
  // # هدف نصب
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();
  const { profileData } = useProfileData();

  return (
    <>
      <OnMountRewardModule
        firstName={payload.firstName}
        currentRewardData={{
          enable: true,
          doRepeat: true,
          btnLabel: 'تکمیل اطلاعات',
          gradient: ['#fce7eb', '#ffffff'],
          title: 'ایمپو مثل همیشه در کنارته  🫂',
          image: '/assets/lottie/miscarriage.lottie',
          description: `@${profileData?.name || ''} برای سبز نشدن جوانه کوچکی که در دل داشتی، متاسفیم.`,
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
