'use client';

import OnMountRewardModule from '@components/activation/OnMountRewardModule';
import Pregnancy1Container from '@components/activation/pages/pregnancy/Pregnancy1Container';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import usePhaseChangeInstallationPurpose from '../../__hooks__/usePhaseChangeInstallationPurpose';
import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step1 = () => {
  // # سابقه زایمان
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  usePhaseChangeInstallationPurpose({ payloadHandler, installationPurpose: 'pregnancy' });

  return (
    <>
      <OnMountRewardModule
        showRewardLottie={true}
        firstName={payload.firstName}
        currentRewardData={{
          enable: true,
          doRepeat: true,
          btnLabel: 'تکمیل اطلاعات بارداری',
          image: '/assets/lottie/pregnancy.lottie',
          gradient: ['#fce7eb', '#ffffff'],
          title: 'بارداریت مبارک و دلت همیشه شاد😍',
          description:
            'جوانه‌ای که در دلت پرورده می‌شه، به زودی نهالی سبز و تنومند خواهد شد. مسیرت سبز و فردایش روشن 🌱',
        }}
      />

      <Pregnancy1Container
        payload={payload}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.step1}
      />
    </>
  );
};

export default Step1;
