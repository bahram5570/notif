'use client';

import OnMountRewardModule from '@components/activation/OnMountRewardModule';
import Breastfeeding1Container from '@components/activation/pages/breastfeeding/Breastfeeding1Container';
import useProfileData from '@hooks/__profile__/useProfileData';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import usePhaseChangeInstallationPurpose from '../../__hooks__/usePhaseChangeInstallationPurpose';
import { CHANGE_PHASE_ROUTES } from '../routesInfo';

const Step1 = () => {
  // # تاریخ زایمان
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();
  const { profileData } = useProfileData();

  usePhaseChangeInstallationPurpose({ payloadHandler, installationPurpose: 'breastfeeding' });

  const updatedPaylod = payload;
  updatedPaylod.firstName = profileData?.name || '';

  return (
    <>
      <div className="relative z-40">
        <OnMountRewardModule
          firstName={updatedPaylod.firstName}
          currentRewardData={{
            enable: true,
            doRepeat: true,
            btnLabel: 'تکمیل اطلاعات',
            title: 'مادر شدنت هزاران بار مبارک🥳️',
            image: '/assets/lottie/childbirth.lottie',
            gradient: ['#fce7eb', '#ffffff'],
            description: 'فرشته‌ی کوچک تو، این هدیه‌ی زیبای خدا،حالا در آغوشته. ',
          }}
          showRewardLottie={true}
        />
      </div>

      <Breastfeeding1Container
        payload={updatedPaylod}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.step1}
        key={profileData?.name ? 'k1' : 'k2'}
      />
    </>
  );
};

export default Step1;
