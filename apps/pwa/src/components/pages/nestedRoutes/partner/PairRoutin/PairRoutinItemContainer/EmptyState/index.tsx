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
          onClick={onClick}
          className="!bg-impo_Surface_OnSurfaceVariant dark:!bg-impo_Surface_SurfaceVariant !text-impo_Primary_OnPrimary !border-impo_Surface_OnSurfaceVariant dark:!border-impo_Surface_SurfaceVariant max-w-fit"
        >
          <div className={`w-full h-full flex justify-center gap-2 `}>
            <div className="flex justify-center items-center">
              <CustomTypography fontSize="Lable_Large" className="text-impo_PrimaryMan_OnPrimaryMan">
                بریم مرحله قبل
              </CustomTypography>
            </div>
            <ArrowIcon className="w-6 h-auto stroke-2 stroke-impo_Primary_OnPrimary" />
          </div>
        </CustomButton>
      </div>
    </div>
  );
};

export default EmptyState;
