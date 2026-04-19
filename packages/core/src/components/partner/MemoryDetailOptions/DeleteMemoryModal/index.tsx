import { useMemo } from 'react';

import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomModal } from '@repo/core/components/ui/CustomModal';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useRouter } from 'next/navigation';

import { useSystem } from '../../../../hooks/useSystem';
import useDelete from './__hooks__/useDelete';
import { DeleteMemoryModalPropsType } from './type';

const DeleteMemoryModal = ({ memoryId }: DeleteMemoryModalPropsType) => {
  const router = useRouter();
  const { appName } = useSystem();
  const { deleteHandler, isLoading } = useDelete({ memoryId });

  const onClick = () => {
    router.back();
  };

  const theme = useMemo<{ borderColor: string; backgroundcolor: string; textColor: string }>(() => {
    switch (appName) {
      case 'MEN_PWA':
        return {
          borderColor: '!bg-impo_PrimaryMan_PrimaryMan',
          backgroundcolor: '!border-impo_PrimaryMan_PrimaryMan',
          textColor: '!text-impo_White',
        };

      default:
        return {
          borderColor: 'border-impo_Primary_PrimaryContainer',
          backgroundcolor: 'bg-impo_Primary_PrimaryContainer',
          textColor: '!text-impo_Error_Error',
        };
    }
  }, [appName]);

  return (
    <CustomModal className="pb-0">
      <div className="w-[290px] flex flex-col items-center gap-4">
        <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Title_Small">
          حذف خاطره
        </CustomTypography>
        <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Medium">
          می‌خوای این خاطره رو حذف کنی؟
        </CustomTypography>

        <div className="w-full flex items-center justify-between gap-2">
          <CustomButton
            className={`${theme.backgroundcolor} ${theme.borderColor} ${theme.textColor}`}
            onClick={deleteHandler}
            fontSize="Lable_Large"
            isLoading={isLoading}
          >
            بله
          </CustomButton>

          <CustomButton
            className="!text-impo_Neutral_OnSurface !bg-impo_Neutral_Surface !border-impo_Neutral_Surface"
            onClick={onClick}
            fontSize="Lable_Large"
          >
            خیر
          </CustomButton>
        </div>
      </div>
    </CustomModal>
  );
};

export default DeleteMemoryModal;
