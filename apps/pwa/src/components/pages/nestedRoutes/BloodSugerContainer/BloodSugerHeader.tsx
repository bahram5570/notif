import BloodSugerIcon from '@assets/icons/blood_suger.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

const BloodSugerHeader = () => {
  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      className="fixed flex flex-row-reverse items-center justify-between h-[80px] px-4 gap-4 pb-3 bg-impo_Neutral_Background z-40"
    >
      <div className="flex flex-col gap-1 items-end">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          تست دیابت بارداری
        </CustomTypography>

        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          میزان قندخون و زمانی که اندازه گرفتی رو وارد کن تا بهت توصیه مورد نظر رو بدیم
        </CustomTypography>
      </div>

      <div className="w-[72px] h-[72px] min-w-[72px] min-h-[72px] flex justify-center items-center rounded-full bg-impo_Orange_50">
        <BloodSugerIcon className="w-9 h-12" />
      </div>
    </div>
  );
};

export default BloodSugerHeader;
