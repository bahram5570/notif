import CustomModal from '@components/ui/CustomModal';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import Loading from '@components/ui/Loading';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
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
  zIndex = 76,
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

      <CustomModal className="!w-[calc(100%_-_32px)] !min-h-fit" isOpen={isOpen} zIndex={zIndex}>
        <div className="w-full rounded-xl flex flex-col items-center justify-center gap-4">
          {icon && icon}

          <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnSurface">
            {title}
          </Dark_Typography>

          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnSurface text-center">
            {description}
          </Dark_Typography>

          <div className="w-full flex items-center gap-4">
            <Dark_Button
              fontSize="Body_Large"
              id={id}
              onClick={clickHandler}
              className="!bg-impo_Error_ErrorContainer !border-impo_Error_ErrorContainer !text-impo_Error_Error"
            >
              {applyButtonText}
            </Dark_Button>

            <Dark_Button
              fontSize="Body_Large"
              onClick={() => router.back()}
              className="!bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnBackground"
            >
              {cancelButtonText}
            </Dark_Button>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default ShareExperienceApproveModalsModule;
