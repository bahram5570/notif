import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import Dark_RadioButton from '@components/ui/Dark_RadioButton';

import { RadioButtonGeneratorPropsType } from '../type';

const RadioButtonGenerator = ({
  imageUrl,
  title,
  value,
  selectedValue,
  handleChange,
}: RadioButtonGeneratorPropsType) => {
  return (
    <div
      onClick={() => handleChange(value)}
      className={`w-full rounded-2xl flex flex-col items-center justify-between gap-3 pt-4 px-4 bg-impo_Neutral_Background border ${selectedValue === value ? 'border-impo_Primary_Primary' : 'border-impo_Surface_OutlineVariant'} `}
    >
      <div className="w-full flex flex-col  gap-3 cursor-pointer">
        <div className="flex flex-row-reverse items-center">
          <Dark_RadioButton isChecked={selectedValue === value} />
          <CustomTypography
            className="text-impo_Neutral_OnBackground"
            fontSize={`${selectedValue === value ? 'Lable_Medium' : 'Body_Medium'}`}
          >
            {title}
          </CustomTypography>
        </div>
        <div className="flex justify-center items-center w-full  ">
          <CustomImage src={imageUrl} className="mt-3" />
        </div>
      </div>
    </div>
  );
};

export default RadioButtonGenerator;
