import ArrowIcon from '@assets/icons/arrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import Dark_Button from '@components/ui/Dark_Button';
import { useRouter } from 'next/navigation';

const EmptyState = () => {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <CustomImage src="/assets/images/empty state.webp" />
      <div className="flex justify-center items-center">
        <Dark_Button
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
        </Dark_Button>
      </div>
    </div>
  );
};

export default EmptyState;
