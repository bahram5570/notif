import InfoIcon from '@assets/shared/icons/infoIcon.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

export const SelectedDaySignsNotAllowed = () => {
  return (
    <div className="flex justify-end gap-2 w-full pt-2">
      <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
        نمیتونی برای آینده نشانه انتخاب کنی
      </CustomTypography>

      <InfoIcon className="w-4 h-auto fill-impo_Yellow_500" />
    </div>
  );
};
