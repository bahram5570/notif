import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomModal } from '@repo/core/components/ui/CustomModal';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import Loading from '@components/ui/Loading';
import useAnalytics from '@hooks/useAnalytics';
import { useRouter } from 'next/navigation';

import { ShareExperienceApproveModalsModuleProps } from './types';

const ShareExperienceApproveModalsModule = ({
  cancelButtonText,
  applyButtonText,
  applyHandler,
  description,
  isLoading,
  isOpen,
  title,
  icon,
  id,
}: ShareExperienceApproveModalsModuleProps) => {
  const { callEvent } = useAnalytics();
  const router = useRouter();

  const clickHandler = () => {
    applyHandler();
    callEvent(id || '');
  };

  return (
    <>
      {isLoading && <Loading />}

      <CustomModal className="!w-[calc(100%_-_32px)] !min-h-fit" isOpen={isOpen} zIndex={76}>
        <div className="w-full rounded-xl flex flex-col items-center justify-center gap-4">
          {icon && icon}

          <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnSurface">
            {title}
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnSurface text-center">
            {description}
          </CustomTypography>

          <div className="w-full flex items-center gap-4">
            <CustomButton
              fontSize="Body_Large"
              id={id}
              onClick={clickHandler}
              className="!bg-impo_Error_ErrorContainer !border-impo_Error_ErrorContainer !text-impo_Error_Error"
            >
              {applyButtonText}
            </CustomButton>

            <CustomButton
              fontSize="Body_Large"
              onClick={() => router.back()}
              className="!bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnBackground"
            >
              {cancelButtonText}
            </CustomButton>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default ShareExperienceApproveModalsModule;
