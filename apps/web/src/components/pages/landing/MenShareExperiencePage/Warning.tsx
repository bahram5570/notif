import InfoIcon from '@assets/icons/info.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const Warning = () => {
  return (
    <div className="px-4 lg:px-0 mt-4">
      <div className="px-3 py-4 bg-[#FFF1E3] flex justify-center items-center rounded-2xl ">
        <div className="flex  lg:items-center items-start gap-2">
          <InfoIcon />

          <CustomTypography fontSize="Lable_Medium" className="text-impo_Black ">
            فراموش نکن: حفظ حریم شخصی و ناشناس موندن هویتت، اولویت ماست.
            {/* <CustomTypography fontSize="Body_Medium" className="text-impo_Black"></CustomTypography> */}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default Warning;
