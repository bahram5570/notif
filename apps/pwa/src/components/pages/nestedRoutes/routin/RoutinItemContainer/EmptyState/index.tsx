import ArrowIcon from '@assets/shared/icons/arrow.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

const EmptyState = () => {
  const router = useCustomRouter();

  const onClick = () => {
    router.back();
  };
  return (
    <div className="p-4 flex flex-col gap-4">
      <CustomImage_NEW src="/assets/images/empty state.webp" width={366} height={307} />

      <div className="flex justify-center items-center">
        <CustomButton
          className="text-impo_Primary_OnPrimary !border-impo_Neutral_OnSurface !bg-impo_Neutral_OnSurface max-w-fit"
          onClick={onClick}
        >
          <div className={`w-full h-full flex justify-center gap-2 `}>
            <div className="flex justify-center items-center">
              <CustomTypography className="text-impo_Neutral_Background" fontSize="Lable_Large">
                بریم مرحله قبل
              </CustomTypography>
            </div>
            <ArrowIcon className="w-6 h-auto stroke-2 stroke-impo_Neutral_Background" />
          </div>
        </CustomButton>
      </div>
    </div>
  );
};

export default EmptyState;
