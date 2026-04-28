import { useRouter } from 'next/navigation';

import { useAnalytics } from '../../../hooks/useAnalytics';
import { CustomButton } from '../../ui/CustomButton';
import { CustomModal } from '../../ui/CustomModal';
import { CustomTypography } from '../../ui/CustomTypography';
import { Loading } from '../../ui/Loading';
import { ApproveModalsModulepProps } from './type';

export const ApproveModalsModule = (props: ApproveModalsModulepProps) => {
  const {
    applyButtonText,
    applyHandler,
    cancelButtonText,
    description,
    isLoading,
    isOpen,
    title,
    icon,
    id,
    zIndex = 70,
  } = props;
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
              isLoading={isLoading}
              isDisable={isLoading}
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
