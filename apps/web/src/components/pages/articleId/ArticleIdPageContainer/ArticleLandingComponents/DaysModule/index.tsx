import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

import CustomTypography from '@components/ui/CustomTypography';

import { DaysModuleTypes } from './types';

const DaysModule = ({ placeholder, minValue, defaultValue, value, valueHandler }: DaysModuleTypes) => {
  const selectHandler = (isIncrement: boolean) => {
    if (value <= 0) {
      valueHandler(defaultValue);
      return;
    }

    if (isIncrement) {
      valueHandler(value + 1);
      return;
    }

    if (!isIncrement) {
      if (value <= minValue) {
        valueHandler(minValue);
        return;
      }

      valueHandler(value - 1);
    }
  };

  return (
    <div className="w-full h-[56px] flex items-center justify-between px-4 rounded-xl bg-impo_White">
      <div className="w-8 h-8 flex items-center justify-center cursor-pointer" onClick={() => selectHandler(true)}>
        <AddRoundedIcon className="w-6 h-6 fill-impo_Grey_800" />
      </div>

      <CustomTypography fontSize="Body_Large" className="!text-impo_Grey_800">
        {value || placeholder}
      </CustomTypography>

      <div className="w-8 h-8 flex items-center justify-center cursor-pointer" onClick={() => selectHandler(false)}>
        <RemoveRoundedIcon className="w-6 h-6 fill-impo_Grey_800" />
      </div>
    </div>
  );
};

export default DaysModule;
