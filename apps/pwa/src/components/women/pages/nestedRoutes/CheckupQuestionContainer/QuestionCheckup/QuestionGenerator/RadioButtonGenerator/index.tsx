import Dark_RadioButton from '@components/ui/Dark_RadioButton';
import Dark_Typography from '@components/ui/Dark_Typography';

import { RadioButtonGeneratorPropsType } from './type';

const RadioButtonGenerator = ({ isSelected, label, value, handleChange }: RadioButtonGeneratorPropsType) => {
  return (
    <div
      onClick={() => handleChange(value)}
      className={`w-full rounded-lg flex flex-col justify-between gap-3 py-2 px-3 ${isSelected ? 'bg-impo_Primary_PrimaryContainer' : 'bg-impo_Neutral_Surface'}`}
    >
      <div className="w-full flex flex-col  justify-between gap-3 cursor-pointer">
        <div className="flex flex-row-reverse items-center">
          <Dark_RadioButton isChecked={isSelected} onClick={() => {}} />

          <Dark_Typography
            fontSize="Body_Medium"
            className={`text-impo_Neutral_OnBackground ${isSelected && 'dark:text-impo_Black'}`}
          >
            {label}
          </Dark_Typography>
        </div>
      </div>
    </div>
  );
};

export default RadioButtonGenerator;
