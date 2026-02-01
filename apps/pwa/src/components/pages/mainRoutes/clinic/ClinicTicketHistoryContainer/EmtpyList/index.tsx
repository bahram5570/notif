import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

const EmptyList = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-[20dvh]">
      <CustomImage src="/assets/images/ticketsHistoryEmptyList.webp" width={105} />

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        شما تا به حال مشاوره فعالی نداشته‌اید
      </CustomTypography>
    </div>
  );
};

export default EmptyList;
