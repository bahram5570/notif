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
        </Dark_Button>
      </div>
    </div>
  );
};

export default EmptyState;
