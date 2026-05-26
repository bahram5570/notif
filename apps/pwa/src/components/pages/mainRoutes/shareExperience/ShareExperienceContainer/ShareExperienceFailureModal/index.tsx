import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomModal } from '@repo/core/components/ui/CustomModal';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

import { ShareExperienceFailureModalPropsType } from './type';

const ShareExperienceFailureModal = ({ error }: ShareExperienceFailureModalPropsType) => {
  const router = useCustomRouter();

  const onClick = () => {
    router.push('/');
  };

  return (
    <CustomModal isOpen className="!pb-0">
      <div className="flex flex-col justify-center items-center gap-2 max-w-xs">
        <CustomTypography className=" text-center text-impo_Neutral_OnBackground">{error?.message}</CustomTypography>
        <CustomButton onClick={onClick}>{error?.btnLabel}</CustomButton>
      </div>
    </CustomModal>
  );
};

export default ShareExperienceFailureModal;
