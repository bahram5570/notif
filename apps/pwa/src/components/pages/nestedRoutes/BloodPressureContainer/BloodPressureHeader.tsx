import BloodPressureIcon from '@assets/icons/Blood_Pressure.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { FOOTER_HEIGHT, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

const BloodPressureHeader = () => {
  return (
    <div
      className="flex fixed z-40 flex-row-reverse items-center justify-between px-4 gap-4 pb-3 bg-impo_Neutral_Background"
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: FOOTER_HEIGHT + 10 }}
    >
      <div className="flex flex-col gap-1 items-end">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          تست فشارخون بارداری
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          عدد فشارخون که اندازه گرفتی رو وارد کن تا بهت توصیه مورد نظر رو بدیم
        </CustomTypography>
      </div>

      <div className="w-[72px] h-[72px] min-w-[72px] min-h-[72px] flex justify-center items-center rounded-full dark:bg-impo_Blue_900 bg-impo_Blue_50">
        <BloodPressureIcon className="w-9 h-12" />
      </div>
    </div>
  );
};

export default BloodPressureHeader;
