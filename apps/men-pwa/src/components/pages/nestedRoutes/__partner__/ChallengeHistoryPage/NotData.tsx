import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const NotData = () => {
  return (
    <div className="flex relative z-0 flex-col items-center gap-6  min-h-[100dvh] justify-center">
      <CustomImage src="/assets/shared/images/ticketsHistoryEmptyList.webp" width={106} height={140} />
      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        هنوز چالشی رو با پارتنرت انجام ندادی
      </CustomTypography>
    </div>
  );
};

export default NotData;
