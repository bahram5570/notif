import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const NoSigns = () => {
  return (
    <div className="flex flex-col items-end pr-4">
      <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
        هنوز نشانه ای برای امروز ثبت نکردی
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnSurface">
        برای ثبت نشانه روی علامت + بزن
      </CustomTypography>
    </div>
  );
};

export default NoSigns;
