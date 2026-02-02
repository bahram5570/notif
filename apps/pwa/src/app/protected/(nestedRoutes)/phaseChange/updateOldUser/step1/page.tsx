'use client';

import ImpoIcon from '@assets/images/questionsImpo.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { getUserCookie } from '@actions/cookie.actions';
import { InstallationPurposeEnum } from '@constants/activation.constants';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

const loadingId = 'completeActionId';

const Step1 = () => {
  const { payloadHandler } = usePhaseChangePayload();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const selectHandler = async () => {
    const user = await getUserCookie();

    if (user) {
      const installationPurpose = user.installationPurpose;

      if (
        InstallationPurposeEnum.tracker.status === installationPurpose.status &&
        InstallationPurposeEnum.tracker.periodStatus === installationPurpose.periodStatus
      ) {
        pageNavigationHandler({ id: loadingId, showProgressBar: false, linkTo: 'tracker_step1' });
        payloadHandler({ ...installationPurpose });
      } else if (
        InstallationPurposeEnum.intention.status === installationPurpose.status &&
        InstallationPurposeEnum.intention.periodStatus === installationPurpose.periodStatus
      ) {
        pageNavigationHandler({ id: loadingId, showProgressBar: false, linkTo: 'intention_step1' });
        payloadHandler({ ...installationPurpose });
      } else if (
        InstallationPurposeEnum.prevention.status === installationPurpose.status &&
        InstallationPurposeEnum.prevention.periodStatus === installationPurpose.periodStatus
      ) {
        pageNavigationHandler({ id: loadingId, showProgressBar: false, linkTo: 'prevention_step1' });
        payloadHandler({ ...installationPurpose });
      } else if (InstallationPurposeEnum.pregnancy.status === installationPurpose.status) {
        pageNavigationHandler({ id: loadingId, showProgressBar: false, linkTo: 'pregnancy_step1' });
        payloadHandler({ ...installationPurpose });
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center px-4 py-9">
      <ImpoIcon className="w-20 mt-20" />

      <div className="flex flex-col items-center gap-2 px-5 pt-[100px]">
        <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground text-center">
          همراه عزیز ایمپو سلام!
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground text-center">
          از اینکه به جمع ایمپویی‌ها پیوستی و برای مراقبت از خودت اپلیکیشن ایمپو رو نصب کردی، خوشحالیم&#128525;
        </CustomTypography>
      </div>

      <CustomButton
        fontSize="Lable_Large"
        onClick={selectHandler}
        className="mt-auto !w-[204px]"
        isLoading={loadingId === pageNavigationLoading}
      >
        بزن بریم
      </CustomButton>
    </div>
  );
};

export default Step1;
