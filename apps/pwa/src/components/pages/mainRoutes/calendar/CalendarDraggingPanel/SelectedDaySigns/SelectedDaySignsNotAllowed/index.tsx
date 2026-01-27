import InfoIcon from '@assets/icons/infoIcon.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

const SelectedDaySignsNotAllowed = () => {
  return (
    <div className="flex justify-end gap-2 w-full pt-2">
      <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
        نمیتونی برای آینده نشانه انتخاب کنی
      </Dark_Typography>

      <InfoIcon className="w-4 h-auto fill-impo_Yellow_500" />
    </div>
  );
};

export default SelectedDaySignsNotAllowed;
