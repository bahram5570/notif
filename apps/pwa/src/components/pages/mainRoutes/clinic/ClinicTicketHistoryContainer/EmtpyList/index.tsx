import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const EmptyList = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-[20dvh]">
      <CustomImage_NEW src="/assets/shared/images/ticketsHistoryEmptyList.webp" width={105} height={105} />

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        شما تا به حال مشاوره فعالی نداشته‌اید
      </CustomTypography>
    </div>
  );
};

export default EmptyList;
